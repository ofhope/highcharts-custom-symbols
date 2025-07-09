import Highcharts from "highcharts";

// Crosshair Simple symbol from Phosphor Icons
// Original SVG: <path d="M176,136h23.54A72.11,72.11,0,0,1,136,199.54V176a8,8,0,0,0-16,0v23.54A72.11,72.11,0,0,1,56.46,136H80a8,8,0,0,0,0-16H56.46A72.11,72.11,0,0,1,120,56.46V80a8,8,0,0,0,16,0V56.46A72.11,72.11,0,0,1,199.54,120H176a8,8,0,0,0,0,16Zm56-8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["crosshair-simple"] = function (x: number, y: number, w: number, h: number) {
  // Scale the original path coordinates to fit within the symbol bounds
  // Original SVG coordinates are based on 256x256 viewBox
  const scaleX = w / 256;
  const scaleY = h / 256;
  
  // Helper function to scale coordinates
  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  
  // This SVG contains multiple elements: crosshair lines and two concentric circles
  // Breaking down the original path into logical segments:
  
  const path = [
    // Inner crosshair structure
    // Right horizontal line
    'M', sx(176), sy(136),
    'L', sx(199.54), sy(136),
    // Arc showing the circular boundary on the right
    'C', sx(199.54), sy(175.76), sx(175.76), sy(199.54), sx(136), sy(199.54),
    'L', sx(136), sy(176),
    'C', sx(136), sy(171.58), sx(132.42), sy(168), sx(128), sy(168),
    'C', sx(123.58), sy(168), sx(120), sy(171.58), sx(120), sy(176),
    'L', sx(120), sy(199.54),
    // Arc continuing the circular boundary
    'C', sx(80.24), sy(199.54), sx(56.46), sy(175.76), sx(56.46), sy(136),
    'L', sx(80), sy(136),
    'C', sx(84.42), sy(136), sx(88), sy(132.42), sx(88), sy(128),
    'C', sx(88), sy(123.58), sx(84.42), sy(120), sx(80), sy(120),
    'L', sx(56.46), sy(120),
    // Arc continuing the circular boundary
    'C', sx(56.46), sy(80.24), sx(80.24), sy(56.46), sx(120), sy(56.46),
    'L', sx(120), sy(80),
    'C', sx(120), sy(84.42), sx(123.58), sy(88), sx(128), sy(88),
    'C', sx(132.42), sy(88), sx(136), sy(84.42), sx(136), sy(80),
    'L', sx(136), sy(56.46),
    // Arc completing the circular boundary
    'C', sx(175.76), sy(56.46), sx(199.54), sy(80.24), sx(199.54), sy(120),
    'L', sx(176), sy(120),
    'C', sx(171.58), sy(120), sx(168), sy(123.58), sx(168), sy(128),
    'C', sx(168), sy(132.42), sx(171.58), sy(136), sx(176), sy(136),
    'Z',
    
    // Outer circle boundary
    'M', sx(232), sy(128),
    'C', sx(232), sy(70.56), sx(185.44), sy(24), sx(128), sy(24),
    'C', sx(70.56), sy(24), sx(24), sy(70.56), sx(24), sy(128),
    'C', sx(24), sy(185.44), sx(70.56), sy(232), sx(128), sy(232),
    'C', sx(185.44), sy(232), sx(232), sy(185.44), sx(232), sy(128),
    'Z',
    
    // Inner circle (creating the ring effect)
    'M', sx(128), sy(216),
    'C', sx(79.4), sy(216), sx(40), sy(176.6), sx(40), sy(128),
    'C', sx(40), sy(79.4), sx(79.4), sy(40), sx(128), sy(40),
    'C', sx(176.6), sy(40), sx(216), sy(79.4), sx(216), sy(128),
    'C', sx(216), sy(176.6), sx(176.6), sy(216), sx(128), sy(216),
    'Z'
  ];
  
  return path;
};
