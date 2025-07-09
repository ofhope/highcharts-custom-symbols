import Highcharts from "highcharts";

// First Aid symbol from Phosphor Icons
// Original SVG: <path d="M232,108v40a16,16,0,0,1-16,16H164v52a16,16,0,0,1-16,16H108a16,16,0,0,1-16-16V164H40a16,16,0,0,1-16-16V108A16,16,0,0,1,40,92H92V40a16,16,0,0,1,16-16h40a16,16,0,0,1,16,16V92h52A16,16,0,0,1,232,108Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["first-aid"] = function (x: number, y: number, w: number, h: number) {
  // Scale the original path coordinates to fit within the symbol bounds
  // Original SVG coordinates are based on 256x256 viewBox
  const scaleX = w / 256;
  const scaleY = h / 256;
  
  // Helper function to scale coordinates
  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  
  // Convert the SVG path to Highcharts path commands
  // Breaking down the original path:
  // M232,108v40a16,16,0,0,1-16,16H164v52a16,16,0,0,1-16,16H108a16,16,0,0,1-16-16V164H40a16,16,0,0,1-16-16V108A16,16,0,0,1,40,92H92V40a16,16,0,0,1,16-16h40a16,16,0,0,1,16,16V92h52A16,16,0,0,1,232,108Z
  
  const path = [
    // Start at top-right of horizontal bar
    'M', sx(232), sy(108),
    
    // Vertical line down 40px (v40)
    'L', sx(232), sy(148),
    
    // Arc to create rounded corner (a16,16,0,0,1,-16,16)
    'C', sx(232), sy(156.84), sx(224.84), sy(164), sx(216), sy(164),
    
    // Horizontal line to middle (H164)
    'L', sx(164), sy(164),
    
    // Vertical line down 52px (v52)
    'L', sx(164), sy(216),
    
    // Arc for rounded corner (a16,16,0,0,1,-16,16)
    'C', sx(164), sy(224.84), sx(156.84), sy(232), sx(148), sy(232),
    
    // Horizontal line to left side of vertical bar (H108)
    'L', sx(108), sy(232),
    
    // Arc for rounded corner (a16,16,0,0,1,-16,-16)
    'C', sx(99.16), sy(232), sx(92), sy(224.84), sx(92), sy(216),
    
    // Vertical line up to middle (V164)
    'L', sx(92), sy(164),
    
    // Horizontal line to left edge (H40)
    'L', sx(40), sy(164),
    
    // Arc for rounded corner (a16,16,0,0,1,-16,-16)
    'C', sx(31.16), sy(164), sx(24), sy(156.84), sx(24), sy(148),
    
    // Vertical line up (V108)
    'L', sx(24), sy(108),
    
    // Arc for rounded corner (A16,16,0,0,1,40,92)
    'C', sx(24), sy(99.16), sx(31.16), sy(92), sx(40), sy(92),
    
    // Horizontal line to middle (H92)
    'L', sx(92), sy(92),
    
    // Vertical line up to top (V40)
    'L', sx(92), sy(40),
    
    // Arc for rounded corner (a16,16,0,0,1,16,-16)
    'C', sx(92), sy(31.16), sx(99.16), sy(24), sx(108), sy(24),
    
    // Horizontal line to right side of vertical bar (h40)
    'L', sx(148), sy(24),
    
    // Arc for rounded corner (a16,16,0,0,1,16,16)
    'C', sx(156.84), sy(24), sx(164), sy(31.16), sx(164), sy(40),
    
    // Vertical line down to middle (V92)
    'L', sx(164), sy(92),
    
    // Horizontal line to right edge (h52)
    'L', sx(216), sy(92),
    
    // Arc for rounded corner (A16,16,0,0,1,232,108)
    'C', sx(224.84), sy(92), sx(232), sy(99.16), sx(232), sy(108),
    
    // Close the path (Z)
    'Z'
  ];
  
  return path;
};
