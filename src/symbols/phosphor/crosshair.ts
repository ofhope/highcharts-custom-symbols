import Highcharts from "highcharts";

// Crosshair symbol from Phosphor Icons
// Original SVG: <path d="M232,120h-8.34A96.14,96.14,0,0,0,136,32.34V24a8,8,0,0,0-16,0v8.34A96.14,96.14,0,0,0,32.34,120H24a8,8,0,0,0,0,16h8.34A96.14,96.14,0,0,0,120,223.66V232a8,8,0,0,0,16,0v-8.34A96.14,96.14,0,0,0,223.66,136H232a8,8,0,0,0,0-16Zm-32,16h7.6A80.15,80.15,0,0,1,136,207.6V200a8,8,0,0,0-16,0v7.6A80.15,80.15,0,0,1,48.4,136H56a8,8,0,0,0,0-16H48.4A80.15,80.15,0,0,1,120,48.4V56a8,8,0,0,0,16,0V48.4A80.15,80.15,0,0,1,207.6,120H200a8,8,0,0,0,0,16Zm-32-8a40,40,0,1,1-40-40A40,40,0,0,1,168,128Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols.crosshair = function (x: number, y: number, w: number, h: number) {
  // Scale the original path coordinates to fit within the symbol bounds
  // Original SVG coordinates are based on 256x256 viewBox
  const scaleX = w / 256;
  const scaleY = h / 256;
  
  // Helper function to scale coordinates
  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  
  // This SVG contains multiple elements, so we'll create a complex path
  // Breaking down the original path into logical segments:
  
  const path = [
    // Outer crosshair arms - Top arm
    'M', sx(232), sy(120),
    'L', sx(223.66), sy(120),
    'C', sx(223.66), sy(76.86), sx(179.14), sy(32.34), sx(136), sy(32.34),
    'L', sx(136), sy(24),
    'C', sx(136), sy(19.58), sx(132.42), sy(16), sx(128), sy(16),
    'C', sx(123.58), sy(16), sx(120), sy(19.58), sx(120), sy(24),
    'L', sx(120), sy(32.34),
    'C', sx(76.86), sy(32.34), sx(32.34), sy(76.86), sx(32.34), sy(120),
    'L', sx(24), sy(120),
    'C', sx(19.58), sy(120), sx(16), sy(123.58), sx(16), sy(128),
    'C', sx(16), sy(132.42), sx(19.58), sy(136), sx(24), sy(136),
    'L', sx(32.34), sy(136),
    'C', sx(32.34), sy(179.14), sx(76.86), sy(223.66), sx(120), sy(223.66),
    'L', sx(120), sy(232),
    'C', sx(120), sy(236.42), sx(123.58), sy(240), sx(128), sy(240),
    'C', sx(132.42), sy(240), sx(136), sy(236.42), sx(136), sy(232),
    'L', sx(136), sy(223.66),
    'C', sx(179.14), sy(223.66), sx(223.66), sy(179.14), sx(223.66), sy(136),
    'L', sx(232), sy(136),
    'C', sx(236.42), sy(136), sx(240), sy(132.42), sx(240), sy(128),
    'C', sx(240), sy(123.58), sx(236.42), sy(120), sx(232), sy(120),
    'Z',
    
    // Inner ring - outer boundary
    'M', sx(200), sy(136),
    'L', sx(207.6), sy(136),
    'C', sx(207.6), sy(171.7), sx(179.7), sy(207.6), sx(136), sy(207.6),
    'L', sx(136), sy(200),
    'C', sx(136), sy(195.58), sx(132.42), sy(192), sx(128), sy(192),
    'C', sx(123.58), sy(192), sx(120), sy(195.58), sx(120), sy(200),
    'L', sx(120), sy(207.6),
    'C', sx(76.3), sy(207.6), sx(48.4), sy(171.7), sx(48.4), sy(136),
    'L', sx(56), sy(136),
    'C', sx(60.42), sy(136), sx(64), sy(132.42), sx(64), sy(128),
    'C', sx(64), sy(123.58), sx(60.42), sy(120), sx(56), sy(120),
    'L', sx(48.4), sy(120),
    'C', sx(48.4), sy(84.3), sx(76.3), sy(48.4), sx(120), sy(48.4),
    'L', sx(120), sy(56),
    'C', sx(120), sy(60.42), sx(123.58), sy(64), sx(128), sy(64),
    'C', sx(132.42), sy(64), sx(136), sy(60.42), sx(136), sy(56),
    'L', sx(136), sy(48.4),
    'C', sx(179.7), sy(48.4), sx(207.6), sy(84.3), sx(207.6), sy(120),
    'L', sx(200), sy(120),
    'C', sx(195.58), sy(120), sx(192), sy(123.58), sx(192), sy(128),
    'C', sx(192), sy(132.42), sx(195.58), sy(136), sx(200), sy(136),
    'Z',
    
    // Central circle
    'M', sx(168), sy(128),
    'C', sx(168), sy(106.87), sx(149.13), sy(88), sx(128), sy(88),
    'C', sx(106.87), sy(88), sx(88), sy(106.87), sx(88), sy(128),
    'C', sx(88), sy(149.13), sx(106.87), sy(168), sx(128), sy(168),
    'C', sx(149.13), sy(168), sx(168), sy(149.13), sx(168), sy(128),
    'Z'
  ];
  
  return path;
};
