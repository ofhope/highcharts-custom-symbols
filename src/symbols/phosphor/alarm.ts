import Highcharts from "highcharts";

// Alarm symbol from Phosphor Icons
// Original SVG: <path d="M61.66,37.66l-32,32A8,8,0,0,1,18.34,58.34l32-32A8,8,0,0,1,61.66,37.66Zm176,20.68-32-32a8,8,0,0,0-11.32,11.32l32,32a8,8,0,0,0,11.32-11.32ZM224,136a96,96,0,1,1-96-96A96.11,96.11,0,0,1,224,136Zm-32,0a8,8,0,0,0-8-8H136V80a8,8,0,0,0-16,0v56a8,8,0,0,0,8,8h56A8,8,0,0,0,192,136Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols.alarm = function (x: number, y: number, w: number, h: number) {
  // Scale the original path coordinates to fit within the symbol bounds
  // Original SVG coordinates are based on 256x256 viewBox
  const scaleX = w / 256;
  const scaleY = h / 256;
  
  // Helper function to scale coordinates
  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  
  // This SVG contains an alarm clock with multiple components
  // Breaking down the original path into logical segments:
  
  const path = [
    // Left alarm indicator
    'M', sx(61.66), sy(37.66),
    'L', sx(29.66), sy(69.66),
    // Curve for rounded corner (A8,8,0,0,1,18.34,58.34)
    'C', sx(26.83), sy(72.49), sx(21.17), sy(66.83), sx(18.34), sy(58.34),
    'L', sx(50.34), sy(26.34),
    // Curve for rounded corner (A8,8,0,0,1,61.66,37.66)
    'C', sx(53.17), sy(23.51), sx(58.83), sy(29.17), sx(61.66), sy(37.66),
    'Z',
    
    // Right alarm indicator  
    'M', sx(237.66), sy(58.34),
    'L', sx(205.66), sy(26.34),
    // Curve for rounded corner (a8,8,0,0,0-11.32,11.32)
    'C', sx(202.83), sy(23.51), sx(197.17), sy(23.51), sx(194.34), sy(26.34),
    'C', sx(191.51), sy(29.17), sx(191.51), sy(34.83), sx(194.34), sy(37.66),
    'L', sx(226.34), sy(69.66),
    // Curve for rounded corner (a8,8,0,0,0,11.32-11.32)
    'C', sx(229.17), sy(72.49), sx(234.83), sy(72.49), sx(237.66), sy(69.66),
    'C', sx(240.49), sy(66.83), sx(240.49), sy(61.17), sx(237.66), sy(58.34),
    'Z',
    
    // Main clock face
    'M', sx(224), sy(136),
    // Large circle for clock face (a96,96,0,1,1-96-96)
    'C', sx(224), sy(82.98), sx(181.02), sy(40), sx(128), sy(40),
    'C', sx(74.98), sy(40), sx(32), sy(82.98), sx(32), sy(136),
    'C', sx(32), sy(189.02), sx(74.98), sy(232), sx(128), sy(232),
    'C', sx(181.02), sy(232), sx(224), sy(189.02), sx(224), sy(136),
    'Z',
    
    // Inner clock face and hands
    'M', sx(192), sy(136),
    // Curve for rounded corner (a8,8,0,0,0-8-8)
    'C', sx(192), sy(131.58), sx(188.42), sy(128), sx(184), sy(128),
    'L', sx(136), sy(128),
    'L', sx(136), sy(80),
    // Curve for rounded corner (a8,8,0,0,0-16,0)
    'C', sx(136), sy(75.58), sx(132.42), sy(72), sx(128), sy(72),
    'C', sx(123.58), sy(72), sx(120), sy(75.58), sx(120), sy(80),
    'L', sx(120), sy(136),
    // Curve for rounded corner (a8,8,0,0,0,8,8)
    'C', sx(120), sy(140.42), sx(123.58), sy(144), sx(128), sy(144),
    'L', sx(184), sy(144),
    // Curve for rounded corner (A8,8,0,0,0,192,136)
    'C', sx(188.42), sy(144), sx(192), sy(140.42), sx(192), sy(136),
    'Z'
  ];
  
  return path;
};
