import Highcharts from "highcharts";

// airplane-tilt symbol from SVG (preserving original path commands)
// Original SVG: <path d="M215.52,197.26a8,8,0,0,1-1.86,8.39l-24,24A8,8,0,0,1,184,232a7.09,7.09,0,0,1-.79,0,8,8,0,0,1-5.87-3.52l-44.07-66.12L112,183.59V208a8,8,0,0,1-2.34,5.65s-14,14.06-15.88,15.88A7.91,7.91,0,0,1,91,231.41a8,8,0,0,1-10.41-4.35l-.06-.15-14.7-36.76L29,175.42a8,8,0,0,1-2.69-13.08l16-16A8,8,0,0,1,48,144H72.4l21.27-21.27L27.56,78.65a8,8,0,0,1-1.22-12.32l24-24a8,8,0,0,1,8.39-1.86l85.94,31.25L176.2,40.19a28,28,0,0,1,39.6,39.6l-31.53,31.53Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["airplane-tilt"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(215.52), sy(197.26),
    'a', dx(8), dy(8), 0, 0, 1, dx(-1.86), dy(8.39),
    'l', dx(-24), dy(24),
    'A', dx(8), dy(8), 0, 0, 1, sx(184), sy(232),
    'a', dx(7.09), dy(7.09), 0, 0, 1, dx(-0.79), dy(0),
    'a', dx(8), dy(8), 0, 0, 1, dx(-5.87), dy(-3.52),
    'l', dx(-44.07), dy(-66.12),
    'L', sx(112), sy(183.59),
    'V', sy(208),
    'a', dx(8), dy(8), 0, 0, 1, dx(-2.34), dy(5.65),
    's', dx(-14), dy(14.06), dx(-15.88), dy(15.88),
    'A', dx(7.91), dy(7.91), 0, 0, 1, sx(91), sy(231.41),
    'a', dx(8), dy(8), 0, 0, 1, dx(-10.41), dy(-4.35),
    'l', dx(-0.06), dy(-0.15),
    'l', dx(-14.7), dy(-36.76),
    'L', sx(29), sy(175.42),
    'a', dx(8), dy(8), 0, 0, 1, dx(-2.69), dy(-13.08),
    'l', dx(16), dy(-16),
    'A', dx(8), dy(8), 0, 0, 1, sx(48), sy(144),
    'H', sx(72.4),
    'l', dx(21.27), dy(-21.27),
    'L', sx(27.56), sy(78.65),
    'a', dx(8), dy(8), 0, 0, 1, dx(-1.22), dy(-12.32),
    'l', dx(24), dy(-24),
    'a', dx(8), dy(8), 0, 0, 1, dx(8.39), dy(-1.86),
    'l', dx(85.94), dy(31.25),
    'L', sx(176.2), sy(40.19),
    'a', dx(28), dy(28), 0, 0, 1, dx(39.6), dy(39.6),
    'l', dx(-31.53), dy(31.53),
    'Z'
  ];

  return path;
};