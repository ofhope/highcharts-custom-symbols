import Highcharts from "highcharts";

// octagon symbol from SVG (preserving original path commands)
// Original SVG: <path d="M227.31,80.23,175.77,28.69A16.13,16.13,0,0,0,164.45,24H91.55a16.13,16.13,0,0,0-11.32,4.69L28.69,80.23A16.13,16.13,0,0,0,24,91.55v72.9a16.13,16.13,0,0,0,4.69,11.32l51.54,51.54A16.13,16.13,0,0,0,91.55,232h72.9a16.13,16.13,0,0,0,11.32-4.69l51.54-51.54A16.13,16.13,0,0,0,232,164.45V91.55A16.13,16.13,0,0,0,227.31,80.23Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["octagon"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(227.31), sy(80.23),
    'L', sx(175.77), sy(28.69),
    'A', dx(16.13), dy(16.13), 0, 0, 0, sx(164.45), sy(24),
    'H', sx(91.55),
    'a', dx(16.13), dy(16.13), 0, 0, 0, dx(-11.32), dy(4.69),
    'L', sx(28.69), sy(80.23),
    'A', dx(16.13), dy(16.13), 0, 0, 0, sx(24), sy(91.55),
    'v', dy(72.9),
    'a', dx(16.13), dy(16.13), 0, 0, 0, dx(4.69), dy(11.32),
    'l', dx(51.54), dy(51.54),
    'A', dx(16.13), dy(16.13), 0, 0, 0, sx(91.55), sy(232),
    'h', dx(72.9),
    'a', dx(16.13), dy(16.13), 0, 0, 0, dx(11.32), dy(-4.69),
    'l', dx(51.54), dy(-51.54),
    'A', dx(16.13), dy(16.13), 0, 0, 0, sx(232), sy(164.45),
    'V', sy(91.55),
    'A', dx(16.13), dy(16.13), 0, 0, 0, sx(227.31), sy(80.23),
    'Z'
  ];

  return path;
};