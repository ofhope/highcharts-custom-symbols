import Highcharts from "highcharts";

// Cross symbol from Phosphor Icons
// Original SVG: <path d="M216,92v24a16,16,0,0,1-16,16H156v92a16,16,0,0,1-16,16H116a16,16,0,0,1-16-16V132H56a16,16,0,0,1-16-16V92A16,16,0,0,1,56,76h44V32a16,16,0,0,1,16-16h24a16,16,0,0,1,16,16V76h44A16,16,0,0,1,216,92Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols.cross = function (x: number, y: number, w: number, h: number) {
  // Scale the original path coordinates to fit within the symbol bounds
  // Original SVG coordinates are based on 256x256 viewBox
  const scaleX = w / 256;
  const scaleY = h / 256;
  
  // Helper function to scale coordinates
  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  
  // Convert the SVG path to Highcharts path commands
  // Breaking down the original path:
  // M216,92v24a16,16,0,0,1-16,16H156v92a16,16,0,0,1-16,16H116a16,16,0,0,1-16-16V132H56a16,16,0,0,1-16-16V92A16,16,0,0,1,56,76h44V32a16,16,0,0,1,16-16h24a16,16,0,0,1,16,16V76h44A16,16,0,0,1,216,92Z
  
  const path = [
    // Start at top-right of horizontal bar
    'M', sx(216), sy(92),
    
    // Vertical line down 24px (v24)
    'L', sx(216), sy(116),
    
    // Arc to create rounded corner (a16,16,0,0,1,-16,16)
    'C', sx(216), sy(124.84), sx(208.84), sy(132), sx(200), sy(132),
    
    // Horizontal line to middle (H156)
    'L', sx(156), sy(132),
    
    // Vertical line down 92px (v92)
    'L', sx(156), sy(224),
    
    // Arc for rounded corner (a16,16,0,0,1,-16,16)
    'C', sx(156), sy(232.84), sx(148.84), sy(240), sx(140), sy(240),
    
    // Horizontal line to left side of vertical bar (H116)
    'L', sx(116), sy(240),
    
    // Arc for rounded corner (a16,16,0,0,1,-16,-16)
    'C', sx(107.16), sy(240), sx(100), sy(232.84), sx(100), sy(224),
    
    // Vertical line up to middle (V132)
    'L', sx(100), sy(132),
    
    // Horizontal line to left edge (H56)
    'L', sx(56), sy(132),
    
    // Arc for rounded corner (a16,16,0,0,1,-16,-16)
    'C', sx(47.16), sy(132), sx(40), sy(124.84), sx(40), sy(116),
    
    // Vertical line up (V92)
    'L', sx(40), sy(92),
    
    // Arc for rounded corner (A16,16,0,0,1,56,76)
    'C', sx(40), sy(83.16), sx(47.16), sy(76), sx(56), sy(76),
    
    // Horizontal line to middle (h44)
    'L', sx(100), sy(76),
    
    // Vertical line up to top (V32)
    'L', sx(100), sy(32),
    
    // Arc for rounded corner (a16,16,0,0,1,16,-16)
    'C', sx(100), sy(23.16), sx(107.16), sy(16), sx(116), sy(16),
    
    // Horizontal line to right side of vertical bar (h24)
    'L', sx(140), sy(16),
    
    // Arc for rounded corner (a16,16,0,0,1,16,16)
    'C', sx(148.84), sy(16), sx(156), sy(23.16), sx(156), sy(32),
    
    // Vertical line down to middle (V76)
    'L', sx(156), sy(76),
    
    // Horizontal line to right edge (h44)
    'L', sx(200), sy(76),
    
    // Arc for rounded corner (A16,16,0,0,1,216,92)
    'C', sx(208.84), sy(76), sx(216), sy(83.16), sx(216), sy(92),
    
    // Close the path (Z)
    'Z'
  ];
  
  return path;
};
