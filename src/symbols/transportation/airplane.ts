import Highcharts from "highcharts";

// airplane symbol from SVG (preserving original path commands)
// Original SVG: <path d="M240,136v32a8,8,0,0,1-8,8,7.61,7.61,0,0,1-1.57-.16L156,161v23.73l17.66,17.65A8,8,0,0,1,176,208v24a8,8,0,0,1-11,7.43l-37-14.81L91,239.43A8,8,0,0,1,80,232V208a8,8,0,0,1,2.34-5.66L100,184.69V161L25.57,175.84A7.61,7.61,0,0,1,24,176a8,8,0,0,1-8-8V136a8,8,0,0,1,4.42-7.16L100,89.06V44a28,28,0,0,1,56,0V89.06l79.58,39.78A8,8,0,0,1,240,136Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["airplane"] = function (x: number, y: number, w: number, h: number) {
  // Scale the original path coordinates to fit within the symbol bounds
  // Original SVG commands (M, L, C, S, Q, T, A, Z) are preserved for maximum fidelity
  const scaleX = w / 256;
  const scaleY = h / 256;

  // Helper functions to scale coordinates
  const sx = (coord: number) => x + coord * scaleX;  // For absolute coordinates
  const sy = (coord: number) => y + coord * scaleY;  // For absolute coordinates
  const dx = (coord: number) => coord * scaleX;       // For relative coordinates (no offset)
  const dy = (coord: number) => coord * scaleY;       // For relative coordinates (no offset)

  const path = [
    'M', sx(240), sy(136),
    'v', dy(32),
    'a', dx(8), dy(8), 0, 0, 1, dx(-8), dy(8),
    'a', dx(7.61), dy(7.61), 0, 0, 1, dx(-1.57), dy(-0.16),
    'L', sx(156), sy(161),
    'v', dy(23.73),
    'l', dx(17.66), dy(17.65),
    'A', dx(8), dy(8), 0, 0, 1, sx(176), sy(208),
    'v', dy(24),
    'a', dx(8), dy(8), 0, 0, 1, dx(-11), dy(7.43),
    'l', dx(-37), dy(-14.81),
    'L', sx(91), sy(239.43),
    'A', dx(8), dy(8), 0, 0, 1, sx(80), sy(232),
    'V', sy(208),
    'a', dx(8), dy(8), 0, 0, 1, dx(2.34), dy(-5.66),
    'L', sx(100), sy(184.69),
    'V', sy(161),
    'L', sx(25.57), sy(175.84),
    'A', dx(7.61), dy(7.61), 0, 0, 1, sx(24), sy(176),
    'a', dx(8), dy(8), 0, 0, 1, dx(-8), dy(-8),
    'V', sy(136),
    'a', dx(8), dy(8), 0, 0, 1, dx(4.42), dy(-7.16),
    'L', sx(100), sy(89.06),
    'V', sy(44),
    'a', dx(28), dy(28), 0, 0, 1, dx(56), dy(0),
    'V', sy(89.06),
    'l', dx(79.58), dy(39.78),
    'A', dx(8), dy(8), 0, 0, 1, sx(240), sy(136),
    'Z'
  ];

  return path;
};