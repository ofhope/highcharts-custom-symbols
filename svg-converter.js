#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
// svgPathParser is not directly used in the provided code snippet,
// but it's good to keep if it's used elsewhere in the full script.
// For the purpose of this modification, parsePathPreservingCase handles the parsing.
// import svgPathParser from 'svg-path-parser';


/**
 * Convert SVG path data to Highcharts symbol function
 * @param {string} pathData - SVG path data (d attribute)
 * @param {string} symbolName - Name for the symbol
 * @param {string} viewBox - SVG viewBox (default: "0 0 256 256")
 * @returns {string} - Highcharts symbol function code
 */
function convertSvgToHighchartsSymbol(pathData, symbolName, viewBox = "0 0 256 256") {
  // Parse viewBox to get dimensions
  const viewBoxParts = viewBox.split(' ');
  const viewBoxWidth = parseInt(viewBoxParts[2]);
  const viewBoxHeight = parseInt(viewBoxParts[3]);

  // Use direct path parsing to preserve original command case
  const highchartsPath = convertSvgPathDirectly(pathData, viewBoxWidth, viewBoxHeight);

  // Generate the TypeScript function
  return generateHighchartsFunction(symbolName, pathData, viewBox, highchartsPath);
}



/**
 * Convert parsed SVG commands to Highcharts path array
 * @param {Array} commands - Parsed SVG commands from svg-path-parser
 * @param {number} viewBoxWidth - Original viewBox width
 * @param {number} viewBoxHeight - Original viewBox height
 * @returns {string} - Highcharts path array code
 */
function convertParsedPathToHighcharts(commands, viewBoxWidth, viewBoxHeight) {
  let pathArray = [];

  for (const command of commands) {
    switch (command.code) {
      case 'M': // Move to
        pathArray.push(`'M', sx(${command.x}), sy(${command.y})`);
        break;

      case 'L': // Line to
        pathArray.push(`'L', sx(${command.x}), sy(${command.y})`);
        break;

      case 'H': // Horizontal line
        pathArray.push(`'L', sx(${command.x}), sy(${command.y || 0})`);
        break;

      case 'V': // Vertical line
        pathArray.push(`'L', sx(${command.x || 0}), sy(${command.y})`);
        break;

      case 'C': // Cubic bezier curve
        pathArray.push(`'C', sx(${command.x1}), sy(${command.y1}), sx(${command.x2}), sy(${command.y2}), sx(${command.x}), sy(${command.y})`);
        break;

      case 'S': // Smooth cubic bezier curve
        pathArray.push(`'C', sx(${command.x1 || command.x}), sy(${command.y1 || command.y}), sx(${command.x2}), sy(${command.y2}), sx(${command.x}), sy(${command.y})`);
        break;

      case 'Q': // Quadratic bezier curve - preserve original command
        pathArray.push(`'Q', sx(${command.x1}), sy(${command.y1}), sx(${command.x}), sy(${command.y})`);
        break;

      case 'T': // Smooth quadratic bezier curve - preserve original command
        pathArray.push(`'T', sx(${command.x}), sy(${command.y})`);
        break;

      case 'A': // Arc - preserve original arc commands since Highcharts supports them
        pathArray.push(`'A', sx(${command.rx}), sy(${command.ry}), ${command.xAxisRotation || 0}, ${command.largeArc ? 1 : 0}, ${command.sweep ? 1 : 0}, sx(${command.x}), sy(${command.y})`);
        break;

      case 'Z': // Close path
        pathArray.push(`'Z'`);
        break;
    }
  }

  return `[\n    ${pathArray.join(',\n    ')}\n  ]`;
}



/**
 * Generate the complete Highcharts symbol function
 * @param {string} symbolName - Symbol name
 * @param {string} originalPath - Original SVG path
 * @param {string} viewBox - Original viewBox
 * @param {string|null} pathCode - Generated path code (null for fallback)
 * @returns {string} - Complete TypeScript function
 */
function generateHighchartsFunction(symbolName, originalPath, viewBox, pathCode) {
  const viewBoxParts = viewBox.split(' ');
  const vbWidth = viewBoxParts[2];
  const vbHeight = viewBoxParts[3];

  // Use the parsed path with original SVG commands preserved
  return `import Highcharts from "highcharts";

// ${symbolName} symbol from SVG (preserving original path commands)
// Original SVG: <path d="${originalPath}"/>
// Original viewBox: ${viewBox}

Highcharts.SVGRenderer.prototype.symbols["${symbolName}"] = function (x: number, y: number, w: number, h: number) {
  // Scale the original path coordinates to fit within the symbol bounds
  // Original SVG commands (M, L, C, S, Q, T, A, Z) are preserved for maximum fidelity
  const scaleX = w / ${vbWidth};
  const scaleY = h / ${vbHeight};

  // Helper functions to scale coordinates
  const sx = (coord: number) => x + coord * scaleX;  // For absolute coordinates
  const sy = (coord: number) => y + coord * scaleY;  // For absolute coordinates
  const dx = (coord: number) => coord * scaleX;       // For relative coordinates (no offset)
  const dy = (coord: number) => coord * scaleY;       // For relative coordinates (no offset)

  const path = ${pathCode};

  return path;
};`;
}

/**
 * Process SVG file and generate Highcharts symbol
 * @param {string} svgFilePath - Path to SVG file
 * @param {string} outputDir - Output directory for generated file
 */
function processSvgFile(svgFilePath, outputDir) {
  try {
    const svgContent = fs.readFileSync(svgFilePath, 'utf8');
    const fileName = path.basename(svgFilePath, '.svg');

    // Extract path data
    const pathMatch = svgContent.match(/<path[^>]*d="([^"]*)"[^>]*>/);
    if (!pathMatch) {
      console.error(`No path data found in ${svgFilePath}`);
      return;
    }

    // Extract viewBox
    const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 256 256";

    const pathData = pathMatch[1];
    const symbolName = fileName.toLowerCase().replace(/[^a-z0-9]/g, '-');

    // Generate TypeScript code
    const tsCode = convertSvgToHighchartsSymbol(pathData, symbolName, viewBox);

    // Ensure the output directory exists for the current file
    fs.mkdirSync(outputDir, { recursive: true });

    // Write to file
    const outputPath = path.join(outputDir, `${fileName}.ts`);
    fs.writeFileSync(outputPath, tsCode);

    console.log(`✅ Generated: ${outputPath}`);

  } catch (error) {
    console.error(`❌ Error processing ${svgFilePath}:`, error.message);
  }
}

/**
 * Generates an index.ts file in the specified directory,
 * importing and re-exporting all generated Highcharts symbol files (.ts)
 * within that directory.
 * @param {string} directoryPath - The path to the directory where the index.ts should be created.
 */
function generateIndexFile(directoryPath) {
  try {
    const filesInDir = fs.readdirSync(directoryPath, { withFileTypes: true });
    const symbolFiles = filesInDir
      .filter(dirent => dirent.isFile() && dirent.name.endsWith('.ts') && dirent.name !== 'index.ts')
      .map(dirent => path.basename(dirent.name, '.ts')); // Get just the name without .ts

    if (symbolFiles.length === 0) {
      // If no symbol files, remove existing index.ts if it exists
      const indexPath = path.join(directoryPath, 'index.ts');
      if (fs.existsSync(indexPath)) {
        fs.unlinkSync(indexPath);
        console.log(`🗑️ Removed empty index.ts: ${indexPath}`);
      }
      return; // No symbols to export, no index file needed
    }

    let indexContent = '';
    for (const symbolName of symbolFiles) {
      indexContent += `export * from './${symbolName}';\n`;
    }

    const indexPath = path.join(directoryPath, 'index.ts');
    fs.writeFileSync(indexPath, indexContent);
    console.log(`✨ Generated index.ts: ${indexPath}`);

  } catch (error) {
    console.error(`❌ Error generating index.ts for ${directoryPath}:`, error.message);
  }
}


// CLI Usage
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
SVG to Highcharts Symbol Converter

Usage:
  node svg-converter.js <svg-file> [output-dir]
  node svg-converter.js <svg-directory> [output-dir]

Examples:
  node svg-converter.js svgs/baby-fill.svg ./symbols/
  node svg-converter.js ./svgs/ ./symbols/phosphor/
  node svg-converter.js ./svgs/ ./symbols/  (This will process all svgs and subdirectories)
`);
    return;
  }

  const inputPath = args[0];
  const outputRoot = args[1] || './symbols/'; // Root output directory

  // Check if input path exists
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Error: Input path '${inputPath}' does not exist.`);
    console.log(`
Available SVG files in svgs/ directory:`);
    try {
      // List files in the base 'svgs/' directory if it exists
      const baseSvgDir = './svgs/';
      if (fs.existsSync(baseSvgDir)) {
        const svgFiles = fs.readdirSync(baseSvgDir).filter(file => file.endsWith('.svg'));
        svgFiles.forEach(file => console.log(`  ${baseSvgDir}${file}`));
        // Also list subdirectories
        fs.readdirSync(baseSvgDir, { withFileTypes: true })
          .filter(dirent => dirent.isDirectory())
          .forEach(dirent => console.log(`  ${baseSvgDir}${dirent.name}/`));
      } else {
        console.log(`  No svgs/ directory found`);
      }
    } catch (e) {
      console.log(`  Error listing svgs/ directory: ${e.message}`);
    }
    return;
  }

  // Function to recursively process directories
  function processDirectoryRecursive(currentInputPath, currentOutputPath) {
    const stats = fs.statSync(currentInputPath);

    if (stats.isDirectory()) {
      // Ensure the current output directory exists
      fs.mkdirSync(currentOutputPath, { recursive: true });

      const files = fs.readdirSync(currentInputPath, { withFileTypes: true });
      let svgFilesFound = false;

      for (const dirent of files) {
        const fullInputPath = path.join(currentInputPath, dirent.name);
        // If it's a directory, the output path for its contents should also be a subdirectory
        const fullOutputPath = path.join(currentOutputPath, dirent.name);

        if (dirent.isDirectory()) {
          // Recursively call for subdirectories
          processDirectoryRecursive(fullInputPath, fullOutputPath);
        } else if (dirent.isFile() && dirent.name.endsWith('.svg')) {
          // Process SVG files, outputting them to the currentOutputPath
          processSvgFile(fullInputPath, currentOutputPath);
          svgFilesFound = true;
        }
      }

      // After processing all files/subdirectories in the current directory, generate its index.ts
      generateIndexFile(currentOutputPath);

      if (!svgFilesFound && currentInputPath !== inputPath) {
        // Only log if no SVGs found in a subdirectory, not the root input if it's empty
        console.log(`No SVG files found in ${currentInputPath}`);
      }

    } else if (stats.isFile()) {
      // Process single file (if initial input was a file)
      if (!currentInputPath.endsWith('.svg')) {
        console.error(`❌ Error: File '${currentInputPath}' is not an SVG file (must end with .svg)`);
        return;
      }
      console.log(`Processing single file: ${currentInputPath}`);
      // For a single file, the output directory is the specified outputRoot
      processSvgFile(currentInputPath, currentOutputPath); // currentOutputPath is outputRoot here
      generateIndexFile(currentOutputPath); // Generate index for the outputRoot
    } else {
      console.error(`❌ Error: '${currentInputPath}' is neither a file nor a directory`);
    }
  }

  // Start the recursive processing
  console.log(`Starting SVG conversion from '${inputPath}' to '${outputRoot}'...`);
  processDirectoryRecursive(inputPath, outputRoot);
  console.log('Conversion complete.');
}

// Check if this module is being run directly (ES module equivalent of require.main === module)
import { fileURLToPath } from 'url';
import { pathToFileURL } from 'url';

const scriptPath = pathToFileURL(process.argv[1]).href;

if (import.meta.url === scriptPath) {
  main();
}

export { convertSvgToHighchartsSymbol, processSvgFile };

/**
 * Convert SVG path directly preserving original command case and structure
 * @param {string} pathData - SVG path data
 * @param {number} viewBoxWidth - Original viewBox width
 * @param {number} viewBoxHeight - Original viewBox height
 * @returns {string} - Highcharts path array code
 */
function convertSvgPathDirectly(pathData, viewBoxWidth, viewBoxHeight) {
  let pathArray = [];

  // Parse the SVG path while preserving original command case
  const commands = parsePathPreservingCase(pathData);

  for (const { command, params } of commands) {
    const isUppercase = command === command.toUpperCase();

    switch (command.toLowerCase()) {
      case 'm': // Move to
        if (isUppercase) {
          // Absolute coordinates
          pathArray.push(`'M', sx(${params[0]}), sy(${params[1]})`);
        } else {
          // Relative coordinates - scale the relative offset
          pathArray.push(`'m', dx(${params[0]}), dy(${params[1]})`);
        }
        break;

      case 'l': // Line to
        if (isUppercase) {
          pathArray.push(`'L', sx(${params[0]}), sy(${params[1]})`);
        } else {
          pathArray.push(`'l', dx(${params[0]}), dy(${params[1]})`);
        }
        break;

      case 'h': // Horizontal line
        if (isUppercase) {
          pathArray.push(`'H', sx(${params[0]})`);
        } else {
          pathArray.push(`'h', dx(${params[0]})`);
        }
        break;

      case 'v': // Vertical line
        if (isUppercase) {
          pathArray.push(`'V', sy(${params[0]})`);
        } else {
          pathArray.push(`'v', dy(${params[0]})`);
        }
        break;

      case 'c': // Cubic bezier curve
        if (isUppercase) {
          pathArray.push(`'C', sx(${params[0]}), sy(${params[1]}), sx(${params[2]}), sy(${params[3]}), sx(${params[4]}), sy(${params[5]})`);
        } else {
          pathArray.push(`'c', dx(${params[0]}), dy(${params[1]}), dx(${params[2]}), dy(${params[3]}), dx(${params[4]}), dy(${params[5]})`);
        }
        break;

      case 's': // Smooth cubic bezier curve
        if (isUppercase) {
          pathArray.push(`'S', sx(${params[0]}), sy(${params[1]}), sx(${params[2]}), sy(${params[3]})`);
        } else {
          pathArray.push(`'s', dx(${params[0]}), dy(${params[1]}), dx(${params[2]}), dy(${params[3]})`);
        }
        break;

      case 'q': // Quadratic bezier curve
        if (isUppercase) {
          pathArray.push(`'Q', sx(${params[0]}), sy(${params[1]}), sx(${params[2]}), sy(${params[3]})`);
        } else {
          pathArray.push(`'q', dx(${params[0]}), dy(${params[1]}), dx(${params[2]}), dy(${params[3]})`);
        }
        break;

      case 't': // Smooth quadratic bezier curve
        if (isUppercase) {
          pathArray.push(`'T', sx(${params[0]}), sy(${params[1]})`);
        } else {
          pathArray.push(`'t', dx(${params[0]}), dy(${params[1]})`);
        }
        break;

      case 'a': // Arc
        if (isUppercase) {
          pathArray.push(`'A', dx(${params[0]}), dy(${params[1]}), ${params[2]}, ${params[3]}, ${params[4]}, sx(${params[5]}), sy(${params[6]})`);
        } else {
          pathArray.push(`'a', dx(${params[0]}), dy(${params[1]}), ${params[2]}, ${params[3]}, ${params[4]}, dx(${params[5]}), dy(${params[6]})`);
        }
        break;

      case 'z': // Close path
        pathArray.push(`'Z'`);
        break;
    }
  }

  return `[\n    ${pathArray.join(',\n    ')}\n  ]`;
}

/**
 * Parse SVG path data while preserving original command case
 * @param {string} pathData - SVG path data
 * @returns {Array} - Array of {command, params} objects
 */
function parsePathPreservingCase(pathData) {
  const commands = [];

  // Normalize spaces but preserve command case
  const normalized = pathData
    .replace(/,/g, ' ')
    .replace(/([MmLlHhVvCcSsQqTtAaZz])/g, ' $1 ')
    .replace(/\s+/g, ' ')
    .replace(/([0-9])-/g, '$1 -')
    .trim();

  const tokens = normalized.split(/\s+/).filter(token => token);

  let i = 0;
  while (i < tokens.length) {
    let command = tokens[i];  // Use 'let' instead of 'const'

    if (!/[MmLlHhVvCcSsQqTtAaZz]/.test(command)) {
      i++;
      continue;
    }

    const paramCount = getParameterCount(command.toLowerCase());

    // Handle commands with no parameters (Z/z)
    if (paramCount === 0) {
      commands.push({ command, params: [] });
      i++;
      continue;
    }

    // Collect parameters
    let paramIndex = i + 1;
    while (paramIndex < tokens.length && !/[MmLlHhVvCcSsQqTtAaZz]/.test(tokens[paramIndex])) {
      const params = [];

      // Collect exactly paramCount parameters
      for (let p = 0; p < paramCount && paramIndex < tokens.length; p++) {
        if (!/[MmLlHhVvCcSsQqTtAaZz]/.test(tokens[paramIndex])) {
          const num = parseFloat(tokens[paramIndex]);
          params.push(isNaN(num) ? 0 : num);
          paramIndex++;
        } else {
          break;
        }
      }

      if (params.length === paramCount) {
        commands.push({ command, params });
      }

      // For commands that can repeat (like L after M), subsequent ones are implicit L/l
      if (command.toLowerCase() === 'm') {
        command = command === 'M' ? 'L' : 'l';  // Now this works because command is 'let'
      }
    }

    i = paramIndex;
  }

  return commands;
}

/**
 * Get parameter count for SVG path commands
 * @param {string} command - Command letter (lowercase)
 * @returns {number} - Number of parameters
 */
function getParameterCount(command) {
  const counts = {
    'm': 2, 'l': 2, 'h': 1, 'v': 1,
    'c': 6, 's': 4, 'q': 4, 't': 2,
    'a': 7, 'z': 0
  };
  return counts[command] || 0;
}
