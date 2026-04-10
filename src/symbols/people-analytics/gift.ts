import Highcharts from "highcharts";

// gift symbol from SVG (preserving original path commands)
// Original SVG: <path d="M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16h60a4,4,0,0,0,4-4V120H40V88h80v32h16V88h80v32H136v92a4,4,0,0,0,4,4h60a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM84.51,59a13.69,13.69,0,0,1-4.5-10A16.62,16.62,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92C109.71,70.39,94,67.43,84.51,59Zm87,0c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08,13.69,13.69,0,0,1,171.49,59Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["gift"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(216), sy(72),
    'H', sx(180.92),
    'A', dx(29.53), dy(29.53), 0, 0, 0, sx(192), sy(49.57),
    'A', dx(32.62), dy(32.62), 0, 0, 0, sx(158.44), sy(16),
    'A', dx(29.53), dy(29.53), 0, 0, 0, sx(137), sy(25.91),
    'a', dx(54.94), dy(54.94), 0, 0, 0, dx(-9), dy(14.48),
    'a', dx(54.94), dy(54.94), 0, 0, 0, dx(-9), dy(-14.48),
    'A', dx(29.53), dy(29.53), 0, 0, 0, sx(97.56), sy(16),
    'A', dx(32.62), dy(32.62), 0, 0, 0, sx(64), sy(49.57),
    'A', dx(29.53), dy(29.53), 0, 0, 0, sx(73.91), sy(71),
    'H', sx(40),
    'A', dx(16), dy(16), 0, 0, 0, sx(24), sy(88),
    'v', dy(32),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(16),
    'v', dy(64),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(16),
    'h', dx(60),
    'a', dx(4), dy(4), 0, 0, 0, dx(4), dy(-4),
    'V', sy(120),
    'H', sx(40),
    'V', sy(88),
    'h', dx(80),
    'v', dy(32),
    'h', dx(16),
    'V', sy(88),
    'h', dx(80),
    'v', dy(32),
    'H', sx(136),
    'v', dy(92),
    'a', dx(4), dy(4), 0, 0, 0, dx(4), dy(4),
    'h', dx(60),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(-16),
    'V', sy(136),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(-16),
    'V', sy(88),
    'A', dx(16), dy(16), 0, 0, 0, sx(216), sy(72),
    'Z',
    'M', sx(84.51), sy(59),
    'a', dx(13.69), dy(13.69), 0, 0, 1, dx(-4.5), dy(-10),
    'A', dx(16.62), dy(16.62), 0, 0, 1, sx(96.59), sy(32),
    'h', dx(0.49),
    'a', dx(13.69), dy(13.69), 0, 0, 1, dx(10), dy(4.5),
    'c', dx(8.39), dy(9.48), dx(11.35), dy(25.2), dx(12.39), dy(34.92),
    'C', sx(109.71), sy(70.39), sx(94), sy(67.43), sx(84.51), sy(59),
    'Z',
    'm', dx(87), dy(0),
    'c', dx(-9.49), dy(8.4), dx(-25.24), dy(11.36), dx(-35), dy(12.4),
    'C', sx(137.7), sy(60.89), sx(141), sy(45.5), sx(149), sy(36.51),
    'a', dx(13.69), dy(13.69), 0, 0, 1, dx(10), dy(-4.5),
    'h', dx(0.49),
    'A', dx(16.62), dy(16.62), 0, 0, 1, sx(176), sy(49.08),
    'A', dx(13.69), dy(13.69), 0, 0, 1, sx(171.49), sy(59),
    'Z'
  ];

  return path;
};