import Highcharts from "highcharts";

// Crown Cross symbol from Phosphor Icons
// Original SVG: <path d="M128,83.22a53.86,53.86,0,0,0-8-10.06V40H104a8,8,0,0,1,0-16h16V8a8,8,0,0,1,16,0V24h16a8,8,0,0,1,0,16H136V73.16A53.86,53.86,0,0,0,128,83.22ZM180,56c-17.74,0-33.21,6.48-44,17.16V176a8,8,0,0,1-16,0V73.16C109.21,62.48,93.74,56,76,56a60.07,60.07,0,0,0-60,60c0,29.86,14.54,48.85,26.73,59.52A90.48,90.48,0,0,0,64,189.34V208a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V189.34a90.48,90.48,0,0,0,21.27-13.82C225.46,164.85,240,145.86,240,116A60.07,60.07,0,0,0,180,56Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["crown-cross"] = function (x: number, y: number, w: number, h: number) {
  // Scale the original path coordinates to fit within the symbol bounds
  // Original SVG coordinates are based on 256x256 viewBox
  const scaleX = w / 256;
  const scaleY = h / 256;
  
  // Helper function to scale coordinates
  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  
  // This SVG contains multiple elements: the cross at the top and the crown base
  // Breaking down the original path into logical segments:
  
  const path = [
    // Top cross section
    // Start with the complex curve at the junction
    'M', sx(128), sy(83.22),
    // Curve representing the junction (a53.86,53.86,0,0,0-8-10.06)
    'C', sx(125.33), sy(79.89), sx(122.67), sy(76.56), sx(120), sy(73.16),
    'L', sx(120), sy(40),
    'L', sx(104), sy(40),
    // Curve for rounded corner (a8,8,0,0,1,0-16)
    'C', sx(99.58), sy(40), sx(96), sy(36.42), sx(96), sy(32),
    'C', sx(96), sy(27.58), sx(99.58), sy(24), sx(104), sy(24),
    'L', sx(120), sy(24),
    'L', sx(120), sy(8),
    // Curve for rounded corner (a8,8,0,0,1,16,0)
    'C', sx(120), sy(3.58), sx(123.58), sy(0), sx(128), sy(0),
    'C', sx(132.42), sy(0), sx(136), sy(3.58), sx(136), sy(8),
    'L', sx(136), sy(24),
    'L', sx(152), sy(24),
    // Curve for rounded corner (a8,8,0,0,1,0,16)
    'C', sx(156.42), sy(24), sx(160), sy(27.58), sx(160), sy(32),
    'C', sx(160), sy(36.42), sx(156.42), sy(40), sx(152), sy(40),
    'L', sx(136), sy(40),
    'L', sx(136), sy(73.16),
    // Curve representing the junction (A53.86,53.86,0,0,0,128,83.22)
    'C', sx(133.33), sy(76.56), sx(130.67), sy(79.89), sx(128), sy(83.22),
    'Z',
    
    // Crown base - left side curve
    'M', sx(180), sy(56),
    'C', sx(162.26), sy(56), sx(146.79), sy(62.48), sx(136), sy(73.16),
    'L', sx(136), sy(176),
    // Curve for rounded corner (a8,8,0,0,1-16,0)
    'C', sx(136), sy(180.42), sx(132.42), sy(184), sx(128), sy(184),
    'C', sx(123.58), sy(184), sx(120), sy(180.42), sx(120), sy(176),
    'L', sx(120), sy(73.16),
    'C', sx(109.21), sy(62.48), sx(93.74), sy(56), sx(76), sy(56),
    // Large curve for crown left side (a60.07,60.07,0,0,0-60,60)
    'C', sx(42.98), sy(56), sx(16), sy(82.98), sx(16), sy(116),
    'C', sx(16), sy(145.86), sx(30.54), sy(164.85), sx(42.73), sy(175.52),
    // Curve for crown bottom (A90.48,90.48,0,0,0,64,189.34)
    'C', sx(48.89), sy(181.78), sx(55.67), sy(186.01), sx(64), sy(189.34),
    'L', sx(64), sy(208),
    // Curve for rounded corner (a16,16,0,0,0,16,16)
    'C', sx(64), sy(216.84), sx(71.16), sy(224), sx(80), sy(224),
    'L', sx(176), sy(224),
    // Curve for rounded corner (a16,16,0,0,0,16-16)
    'C', sx(184.84), sy(224), sx(192), sy(216.84), sx(192), sy(208),
    'L', sx(192), sy(189.34),
    // Curve for crown bottom (a90.48,90.48,0,0,0,21.27-13.82)
    'C', sx(200.33), sy(186.01), sx(207.11), sy(181.78), sx(213.27), sy(175.52),
    'C', sx(225.46), sy(164.85), sx(240), sy(145.86), sx(240), sy(116),
    // Large curve for crown right side (A60.07,60.07,0,0,0,180,56)
    'C', sx(240), sy(82.98), sx(213.02), sy(56), sx(180), sy(56),
    'Z'
  ];
  
  return path;
};
