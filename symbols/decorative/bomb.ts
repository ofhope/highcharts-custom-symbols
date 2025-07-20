import Highcharts from "highcharts";

// bomb symbol from SVG (preserving original path commands)
// Original SVG: <path d="M248,32h0a8,8,0,0,0-8,8,52.66,52.66,0,0,1-3.57,17.39C232.38,67.22,225.7,72,216,72c-11.06,0-18.85-9.76-29.49-24.65C176,32.66,164.12,16,144,16c-16.39,0-29,8.89-35.43,25a66.07,66.07,0,0,0-3.9,15H88A16,16,0,0,0,72,72v9.59A88,88,0,0,0,112,248h1.59A88,88,0,0,0,152,81.59V72a16,16,0,0,0-16-16H120.88a46.76,46.76,0,0,1,2.69-9.37C127.62,36.78,134.3,32,144,32c11.06,0,18.85,9.76,29.49,24.65C184,71.34,195.88,88,216,88c16.39,0,29-8.89,35.43-25A68.69,68.69,0,0,0,256,40,8,8,0,0,0,248,32ZM111.89,209.32A8,8,0,0,1,104,216a8.52,8.52,0,0,1-1.33-.11,57.5,57.5,0,0,1-46.57-46.57,8,8,0,1,1,15.78-2.64,41.29,41.29,0,0,0,33.43,33.43A8,8,0,0,1,111.89,209.32Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["bomb"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(248), sy(32),
    'h', dx(0),
    'a', dx(8), dy(8), 0, 0, 0, dx(-8), dy(8),
    'a', dx(52.66), dy(52.66), 0, 0, 1, dx(-3.57), dy(17.39),
    'C', sx(232.38), sy(67.22), sx(225.7), sy(72), sx(216), sy(72),
    'c', dx(-11.06), dy(0), dx(-18.85), dy(-9.76), dx(-29.49), dy(-24.65),
    'C', sx(176), sy(32.66), sx(164.12), sy(16), sx(144), sy(16),
    'c', dx(-16.39), dy(0), dx(-29), dy(8.89), dx(-35.43), dy(25),
    'a', dx(66.07), dy(66.07), 0, 0, 0, dx(-3.9), dy(15),
    'H', sx(88),
    'A', dx(16), dy(16), 0, 0, 0, sx(72), sy(72),
    'v', dy(9.59),
    'A', dx(88), dy(88), 0, 0, 0, sx(112), sy(248),
    'h', dx(1.59),
    'A', dx(88), dy(88), 0, 0, 0, sx(152), sy(81.59),
    'V', sy(72),
    'a', dx(16), dy(16), 0, 0, 0, dx(-16), dy(-16),
    'H', sx(120.88),
    'a', dx(46.76), dy(46.76), 0, 0, 1, dx(2.69), dy(-9.37),
    'C', sx(127.62), sy(36.78), sx(134.3), sy(32), sx(144), sy(32),
    'c', dx(11.06), dy(0), dx(18.85), dy(9.76), dx(29.49), dy(24.65),
    'C', sx(184), sy(71.34), sx(195.88), sy(88), sx(216), sy(88),
    'c', dx(16.39), dy(0), dx(29), dy(-8.89), dx(35.43), dy(-25),
    'A', dx(68.69), dy(68.69), 0, 0, 0, sx(256), sy(40),
    'A', dx(8), dy(8), 0, 0, 0, sx(248), sy(32),
    'Z',
    'M', sx(111.89), sy(209.32),
    'A', dx(8), dy(8), 0, 0, 1, sx(104), sy(216),
    'a', dx(8.52), dy(8.52), 0, 0, 1, dx(-1.33), dy(-0.11),
    'a', dx(57.5), dy(57.5), 0, 0, 1, dx(-46.57), dy(-46.57),
    'a', dx(8), dy(8), 0, 1, 1, dx(15.78), dy(-2.64),
    'a', dx(41.29), dy(41.29), 0, 0, 0, dx(33.43), dy(33.43),
    'A', dx(8), dy(8), 0, 0, 1, sx(111.89), sy(209.32),
    'Z'
  ];

  return path;
};