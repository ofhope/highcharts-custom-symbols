#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

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
    
    // Write to file
    const outputPath = path.join(outputDir, `${fileName}.ts`);
    fs.writeFileSync(outputPath, tsCode);
    
    console.log(`✅ Generated: ${outputPath}`);
    
  } catch (error) {
    console.error(`❌ Error processing ${svgFilePath}:`, error.message);
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
`);
    return;
  }

  const inputPath = args[0];
  const outputDir = args[1] || './symbols/';

  // Check if input path exists
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Error: Input path '${inputPath}' does not exist.`);
    console.log(`
Available SVG files in svgs/ directory:`);
    try {
      const svgFiles = fs.readdirSync('./svgs/').filter(file => file.endsWith('.svg'));
      svgFiles.forEach(file => console.log(`  svgs/${file}`));
    } catch (e) {
      console.log(`  No svgs/ directory found`);
    }
    return;
  }

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const stats = fs.statSync(inputPath);
  
  if (stats.isDirectory()) {
    // Process all SVG files in directory
    const svgFiles = fs.readdirSync(inputPath).filter(file => file.endsWith('.svg'));
    console.log(`Processing ${svgFiles.length} SVG files from ${inputPath}...`);
    
    if (svgFiles.length === 0) {
      console.log(`❌ No SVG files found in ${inputPath}`);
      return;
    }
    
    for (const svgFile of svgFiles) {
      processSvgFile(path.join(inputPath, svgFile), outputDir);
    }
  } else if (stats.isFile()) {
    // Process single file
    if (!inputPath.endsWith('.svg')) {
      console.error(`❌ Error: File '${inputPath}' is not an SVG file (must end with .svg)`);
      return;
    }
    console.log(`Processing single file: ${inputPath}`);
    processSvgFile(inputPath, outputDir);
  } else {
    console.error(`❌ Error: '${inputPath}' is neither a file nor a directory`);
  }
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
  // Regex to match a command letter (case-sensitive) followed by its parameters.
  // Parameters can be numbers, including decimals and negatives.
  // We use a non-greedy match for parameters `.*?` to avoid over-matching
  // and look for the next command or end of string.
  const commandRegex = /([MmLlHhVvCcSsQqTtAaZz])\s*([^MmLlHhVvCcSsQqTtAaZz]*)/g;

  let match;
  let currentCommand = '';
  let lastCommandType = ''; // To handle implicit L/l after M/m

  while ((match = commandRegex.exec(pathData)) !== null) {
    let command = match[1];
    let paramsStr = match[2].trim();

    const paramValues = [];
    // Regex to split parameters, handling spaces and negative signs
    // This allows for "10-20" to be correctly split into "10" and "-20"
    const paramSplitRegex = /([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)/g;
    let paramMatch;

    while ((paramMatch = paramSplitRegex.exec(paramsStr)) !== null) {
      paramValues.push(parseFloat(paramMatch[1]));
    }

    const expectedParamCount = getParameterCount(command.toLowerCase());

    // Handle implicit commands (e.g., L after M)
    if (command.toLowerCase() === 'm' && paramValues.length > 2) {
      // First M/m command
      commands.push({ command: command, params: paramValues.slice(0, 2) });
      // Subsequent parameters are implicit L/l commands
      for (let i = 2; i < paramValues.length; i += 2) {
        commands.push({ command: (command === 'M' ? 'L' : 'l'), params: paramValues.slice(i, i + 2) });
      }
    } else {
      // General case for all other commands and single M/m commands
      if (expectedParamCount === 0) {
        // Z/z commands have no parameters
        commands.push({ command: command, params: [] });
      } else {
        // Handle repeated parameters for commands like L, C, S, Q, T, A
        let pIndex = 0;
        while (pIndex < paramValues.length) {
          const paramsForThisCommand = paramValues.slice(pIndex, pIndex + expectedParamCount);
          if (paramsForThisCommand.length === expectedParamCount) {
            commands.push({ command: command, params: paramsForThisCommand });
            pIndex += expectedParamCount;
            // After the initial M/m, subsequent segments are implicitly L/l
            if (command.toLowerCase() === 'm') { // Only for the first 'm' command
              command = command === 'M' ? 'L' : 'l';
            }
          } else {
            // Not enough parameters for a full command, something is off
            console.warn(`Warning: Not enough parameters for command ${command} at ${match.index}. Expected ${expectedParamCount}, got ${paramsForThisCommand.length}.`);
            break; // Stop processing parameters for this command
          }
        }
      }
    }
  }
  return commands;
}

// Retain the existing getParameterCount function as it is correct.
function getParameterCount(command) {
  const counts = {
    'm': 2, 'l': 2, 'h': 1, 'v': 1,
    'c': 6, 's': 4, 'q': 4, 't': 2,
    'a': 7, 'z': 0
  };
  return counts[command] || 0;
}
