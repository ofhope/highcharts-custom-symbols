import Highcharts from "highcharts";

// Airplane Tilt symbol from Phosphor Icons
// Original SVG: <path d="M215.52,197.26a8,8,0,0,1-1.86,8.39l-24,24A8,8,0,0,1,184,232a7.09,7.09,0,0,1-.79,0,8,8,0,0,1-5.87-3.52l-44.07-66.12L112,183.59V208a8,8,0,0,1-2.34,5.65s-14,14.06-15.88,15.88A7.91,7.91,0,0,1,91,231.41a8,8,0,0,1-10.41-4.35l-.06-.15-14.7-36.76L29,175.42a8,8,0,0,1-2.69-13.08l16-16A8,8,0,0,1,48,144H72.4l21.27-21.27L27.56,78.65a8,8,0,0,1-1.22-12.32l24-24a8,8,0,0,1,8.39-1.86l85.94,31.25L176.2,40.19a28,28,0,0,1,39.6,39.6l-31.53,31.53Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["airplane-tilt"] = function (x: number, y: number, w: number, h: number) {
  // Scale the original path coordinates to fit within the symbol bounds
  // Original SVG coordinates are based on 256x256 viewBox
  const scaleX = w / 256;
  const scaleY = h / 256;
  
  // Helper function to scale coordinates
  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  
  // This SVG contains a tilted airplane shape with complex geometry
  // Breaking down the original path into logical segments:
  
  const path = [
    // Upper right wing section
    'M', sx(215.52), sy(197.26),
    // Curve for rounded corner (a8,8,0,0,1-1.86,8.39)
    'C', sx(215.52), sy(200.1), sx(214.66), sy(202.86), sx(213.66), sy(205.65),
    'L', sx(189.66), sy(229.65),
    // Curve for rounded corner (A8,8,0,0,1,184,232)
    'C', sx(187.31), sy(231.31), sx(184.69), sy(232), sx(184), sy(232),
    // Slight adjustment (a7.09,7.09,0,0,1-.79,0)
    'C', sx(183.74), sy(232), sx(183.47), sy(231.97), sx(183.21), sy(232),
    // Curve for rounded corner (a8,8,0,0,1-5.87-3.52)
    'C', sx(180.42), sy(230.31), sx(178.31), sy(227.69), sx(177.34), sy(228.48),
    'L', sx(133.27), sy(162.36),
    'L', sx(112), sy(183.59),
    'L', sx(112), sy(208),
    // Curve for rounded corner (a8,8,0,0,1-2.34,5.65)
    'C', sx(112), sy(211.16), sx(110.84), sy(214.16), sx(109.66), sy(213.65),
    // Complex path for tail section (s-14,14.06-15.88,15.88)
    'L', sx(93.78), sy(229.53),
    // Curve for rounded corner (A7.91,7.91,0,0,1,91,231.41)
    'C', sx(92.84), sy(230.47), sx(91.96), sy(231.37), sx(91), sy(231.41),
    // Curve for rounded corner (a8,8,0,0,1-10.41-4.35)
    'C', sx(87.58), sy(229.72), sx(85.28), sy(226.42), sx(80.59), sy(227.06),
    // Small adjustment (l-.06-.15)
    'L', sx(80.53), sy(226.91),
    'L', sx(65.83), sy(190.15),
    'L', sx(29), sy(175.42),
    // Curve for rounded corner (a8,8,0,0,1-2.69-13.08)
    'C', sx(24.42), sy(173.72), sx(22.72), sy(169.58), sx(24.31), sy(162.34),
    'L', sx(40.31), sy(146.34),
    // Curve for rounded corner (A8,8,0,0,1,48,144)
    'C', sx(42.34), sy(144.69), sx(45.16), sy(144), sx(48), sy(144),
    'L', sx(72.4), sy(144),
    'L', sx(93.67), sy(122.73),
    'L', sx(27.56), sy(78.65),
    // Curve for rounded corner (a8,8,0,0,1-1.22-12.32)
    'C', sx(25.72), sy(73.58), sx(27.42), sy(67.42), sx(26.34), sy(66.33),
    'L', sx(50.34), sy(42.33),
    // Curve for rounded corner (a8,8,0,0,1,8.39-1.86)
    'C', sx(53.18), sy(40.67), sx(56.82), sy(41.53), sx(58.73), sy(40.47),
    'L', sx(144.67), sy(71.72),
    'L', sx(176.2), sy(40.19),
    // Large curve for fuselage (a28,28,0,0,1,39.6,39.6)
    'C', sx(191.64), sy(24.75), sx(216.24), sy(24.75), sx(231.68), sy(40.19),
    'C', sx(247.12), sy(55.63), sx(247.12), sy(80.23), sx(231.68), sy(95.67),
    'L', sx(200.15), sy(127.2),
    'Z'
  ];
  
  return path;
};
