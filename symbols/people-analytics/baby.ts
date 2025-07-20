import Highcharts from "highcharts";

// baby symbol from SVG (preserving original path commands)
// Original SVG: <path d="M134.16,24.1a4,4,0,0,0-3.56,1.81C120.3,41.48,120,55.79,120,56a8,8,0,0,0,9.68,7.79A8.24,8.24,0,0,0,136,55.68,8,8,0,0,1,144.8,48a8.14,8.14,0,0,1,7.2,8.23,24,24,0,0,1-48-.27c0-.63.09-10.78,5.44-24a4,4,0,0,0-4.59-5.39A104.16,104.16,0,0,0,24.07,131.66C26,186.72,71.23,231,126.32,231.9a104,104,0,0,0,7.84-207.8ZM80,127.91a12,12,0,1,1,12,12A12,12,0,0,1,80,127.91Zm80.27,54.77a61,61,0,0,1-64.54,0,8,8,0,0,1,8.54-13.54,45,45,0,0,0,47.46,0,8,8,0,0,1,8.54,13.54ZM164,139.91a12,12,0,1,1,12-12A12,12,0,0,1,164,139.91Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["baby"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(134.16), sy(24.1),
    'a', dx(4), dy(4), 0, 0, 0, dx(-3.56), dy(1.81),
    'C', sx(120.3), sy(41.48), sx(120), sy(55.79), sx(120), sy(56),
    'a', dx(8), dy(8), 0, 0, 0, dx(9.68), dy(7.79),
    'A', dx(8.24), dy(8.24), 0, 0, 0, sx(136), sy(55.68),
    'A', dx(8), dy(8), 0, 0, 1, sx(144.8), sy(48),
    'a', dx(8.14), dy(8.14), 0, 0, 1, dx(7.2), dy(8.23),
    'a', dx(24), dy(24), 0, 0, 1, dx(-48), dy(-0.27),
    'a', dx(4), dy(4), 0, 0, 0, dx(-4.59), dy(-5.39),
    'A', dx(104.16), dy(104.16), 0, 0, 0, sx(24.07), sy(131.66),
    'C', sx(26), sy(186.72), sx(71.23), sy(231), sx(126.32), sy(231.9),
    'a', dx(104), dy(104), 0, 0, 0, dx(7.84), dy(-207.8),
    'Z',
    'M', sx(80), sy(127.91),
    'a', dx(12), dy(12), 0, 1, 1, dx(12), dy(12),
    'A', dx(12), dy(12), 0, 0, 1, sx(80), sy(127.91),
    'Z',
    'm', dx(80.27), dy(54.77),
    'a', dx(61), dy(61), 0, 0, 1, dx(-64.54), dy(0),
    'a', dx(8), dy(8), 0, 0, 1, dx(8.54), dy(-13.54),
    'a', dx(45), dy(45), 0, 0, 0, dx(47.46), dy(0),
    'a', dx(8), dy(8), 0, 0, 1, dx(8.54), dy(13.54),
    'Z',
    'M', sx(164), sy(139.91),
    'a', dx(12), dy(12), 0, 1, 1, dx(12), dy(-12),
    'A', dx(12), dy(12), 0, 0, 1, sx(164), sy(139.91),
    'Z'
  ];

  return path;
};