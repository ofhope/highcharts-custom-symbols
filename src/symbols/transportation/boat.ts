import Highcharts from "highcharts";

// boat symbol from SVG (preserving original path commands)
// Original SVG: <path d="M54.46,164.71,82.33,126.5a48,48,0,1,1-12.92-9.44L41.54,155.29a8,8,0,1,0,12.92,9.42ZM208,112a47.81,47.81,0,0,0-16.93,3.09L214.91,156A8,8,0,1,1,201.09,164l-23.83-40.86A48,48,0,1,0,208,112ZM165.93,72H192a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24,24,0,0,0-24-24H152a8,8,0,0,0-6.91,12l11.65,20H99.26L82.91,60A8,8,0,0,0,76,56H48a8,8,0,0,0,0,16H71.41L85.12,95.51,69.41,117.06a47.87,47.87,0,0,1,12.92,9.44l11.59-15.9L125.09,164A8,8,0,1,0,138.91,156l-30.32-52h57.48l11.19,19.17a48.11,48.11,0,0,1,13.81-8.08Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["boat"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(54.46), sy(164.71),
    'L', sx(82.33), sy(126.5),
    'a', dx(48), dy(48), 0, 1, 1, dx(-12.92), dy(-9.44),
    'L', sx(41.54), sy(155.29),
    'a', dx(8), dy(8), 0, 1, 0, dx(12.92), dy(9.42),
    'Z',
    'M', sx(208), sy(112),
    'a', dx(47.81), dy(47.81), 0, 0, 0, dx(-16.93), dy(3.09),
    'L', sx(214.91), sy(156),
    'A', dx(8), dy(8), 0, 1, 1, sx(201.09), sy(164),
    'l', dx(-23.83), dy(-40.86),
    'A', dx(48), dy(48), 0, 1, 0, sx(208), sy(112),
    'Z',
    'M', sx(165.93), sy(72),
    'H', sx(192),
    'a', dx(8), dy(8), 0, 0, 1, dx(8), dy(8),
    'a', dx(8), dy(8), 0, 0, 0, dx(16), dy(0),
    'a', dx(24), dy(24), 0, 0, 0, dx(-24), dy(-24),
    'H', sx(152),
    'a', dx(8), dy(8), 0, 0, 0, dx(-6.91), dy(12),
    'l', dx(11.65), dy(20),
    'H', sx(99.26),
    'L', sx(82.91), sy(60),
    'A', dx(8), dy(8), 0, 0, 0, sx(76), sy(56),
    'H', sx(48),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(16),
    'H', sx(71.41),
    'L', sx(85.12), sy(95.51),
    'L', sx(69.41), sy(117.06),
    'a', dx(47.87), dy(47.87), 0, 0, 1, dx(12.92), dy(9.44),
    'l', dx(11.59), dy(-15.9),
    'L', sx(125.09), sy(164),
    'A', dx(8), dy(8), 0, 1, 0, sx(138.91), sy(156),
    'l', dx(-30.32), dy(-52),
    'h', dx(57.48),
    'l', dx(11.19), dy(19.17),
    'a', dx(48.11), dy(48.11), 0, 0, 1, dx(13.81), dy(-8.08),
    'Z'
  ];

  return path;
};