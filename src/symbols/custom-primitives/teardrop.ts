import Highcharts from "highcharts";

// teardrop symbol from SVG (preserving original path commands)
// Original SVG: <path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["teardrop"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(174), sy(47.75),
    'a', dx(254.19), dy(254.19), 0, 0, 0, dx(-41.45), dy(-38.3),
    'a', dx(8), dy(8), 0, 0, 0, dx(-9.18), dy(0),
    'A', dx(254.19), dy(254.19), 0, 0, 0, sx(82), sy(47.75),
    'C', sx(54.51), sy(79.32), sx(40), sy(112.6), sx(40), sy(144),
    'a', dx(88), dy(88), 0, 0, 0, dx(176), dy(0),
    'C', sx(216), sy(112.6), sx(201.49), sy(79.32), sx(174), sy(47.75),
    'Z'
  ];

  return path;
};