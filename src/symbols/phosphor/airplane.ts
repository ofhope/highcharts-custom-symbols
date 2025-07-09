import Highcharts from "highcharts";

// Airplane symbol from Phosphor Icons
// Original SVG: <path d="M240,136v32a8,8,0,0,1-8,8,7.61,7.61,0,0,1-1.57-.16L156,161v23.73l17.66,17.65A8,8,0,0,1,176,208v24a8,8,0,0,1-11,7.43l-37-14.81L91,239.43A8,8,0,0,1,80,232V208a8,8,0,0,1,2.34-5.66L100,184.69V161L25.57,175.84A7.61,7.61,0,0,1,24,176a8,8,0,0,1-8-8V136a8,8,0,0,1,4.42-7.16L100,89.06V44a28,28,0,0,1,56,0V89.06l79.58,39.78A8,8,0,0,1,240,136Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols.airplane = function (x: number, y: number, w: number, h: number) {
  // Scale the original path coordinates to fit within the symbol bounds
  // Original SVG coordinates are based on 256x256 viewBox
  const scaleX = w / 256;
  const scaleY = h / 256;
  
  // Helper function to scale coordinates
  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  
  // This SVG contains a complex airplane shape
  // Breaking down the original path into logical segments:
  
  const path = [
    // Right wing section
    'M', sx(240), sy(136),
    'L', sx(240), sy(168),
    // Curve for rounded corner (a8,8,0,0,1-8,8)
    'C', sx(240), sy(172.42), sx(236.42), sy(176), sx(232), sy(176),
    // Slight curve for wing tip (a7.61,7.61,0,0,1-1.57-.16)
    'C', sx(231.48), sy(175.95), sx(230.95), sy(175.89), sx(230.43), sy(175.84),
    'L', sx(156), sy(161),
    'L', sx(156), sy(184.73),
    'L', sx(173.66), sy(202.38),
    // Curve for rounded corner (A8,8,0,0,1,176,208)
    'C', sx(175.16), sy(204.84), sx(175.16), sy(207.16), sx(176), sy(208),
    'L', sx(176), sy(232),
    // Curve for rounded corner (a8,8,0,0,1-11,7.43)
    'C', sx(176), sy(236.42), sx(172.42), sy(240), sx(168), sy(240),
    'C', sx(165.69), sy(240), sx(163.38), sy(238.86), sx(165), sy(239.43),
    'L', sx(128), sy(224.62),
    'L', sx(91), sy(239.43),
    // Curve for rounded corner (A8,8,0,0,1,80,232)
    'C', sx(88.62), sy(238.86), sx(86.31), sy(240), sx(84), sy(240),
    'C', sx(79.58), sy(240), sx(76), sy(236.42), sx(76), sy(232),
    'L', sx(80), sy(232),
    'L', sx(80), sy(208),
    // Curve for rounded corner (a8,8,0,0,1,2.34-5.66)
    'C', sx(80.84), sy(207.16), sx(80.84), sy(204.84), sx(82.34), sy(202.34),
    'L', sx(100), sy(184.69),
    'L', sx(100), sy(161),
    'L', sx(25.57), sy(175.84),
    // Slight curve for wing tip (A7.61,7.61,0,0,1,24,176)
    'C', sx(25.05), sy(175.89), sx(24.52), sy(175.95), sx(24), sy(176),
    // Curve for rounded corner (a8,8,0,0,1-8-8)
    'C', sx(19.58), sy(176), sx(16), sy(172.42), sx(16), sy(168),
    'L', sx(16), sy(136),
    // Curve for rounded corner (a8,8,0,0,1,4.42-7.16)
    'C', sx(16), sy(131.58), sx(19.58), sy(128), sx(24), sy(128),
    'C', sx(25.57), sy(128), sx(27.14), sy(128.86), sx(20.42), sy(128.84),
    'L', sx(100), sy(89.06),
    'L', sx(100), sy(44),
    // Large curve for fuselage nose (a28,28,0,0,1,56,0)
    'C', sx(100), sy(28.54), sx(112.54), sy(16), sx(128), sy(16),
    'C', sx(143.46), sy(16), sx(156), sy(28.54), sx(156), sy(44),
    'L', sx(156), sy(89.06),
    'L', sx(235.58), sy(128.84),
    // Curve for rounded corner (A8,8,0,0,1,240,136)
    'C', sx(238.86), sy(128.86), sx(240.43), sy(128), sx(232), sy(128),
    'C', sx(236.42), sy(128), sx(240), sy(131.58), sx(240), sy(136),
    'Z'
  ];
  
  return path;
};
