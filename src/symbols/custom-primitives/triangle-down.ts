import Highcharts from "highcharts";

// triangle-down symbol from SVG (preserving original path commands)
// Original SVG: <path d="m236.78,211.81a24.34,24.34 0 0 1 -21.33,12.19l-174.9,0a24.34,24.34 0 0 1 -21.33,-12.19a23.51,23.51 0 0 1 0,-23.72l87.43,-151.87a24.76,24.76 0 0 1 42.7,0l87.45,151.87a23.51,23.51 0 0 1 -0.02,23.72z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["triangle-down"] = function (x: number, y: number, w: number, h: number) {
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
    'm', dx(236.78), dy(211.81),
    'a', dx(24.34), dy(24.34), 0, 0, 1, dx(-21.33), dy(12.19),
    'l', dx(-174.9), dy(0),
    'a', dx(24.34), dy(24.34), 0, 0, 1, dx(-21.33), dy(-12.19),
    'a', dx(23.51), dy(23.51), 0, 0, 1, dx(0), dy(-23.72),
    'l', dx(87.43), dy(-151.87),
    'a', dx(24.76), dy(24.76), 0, 0, 1, dx(42.7), dy(0),
    'l', dx(87.45), dy(151.87),
    'a', dx(23.51), dy(23.51), 0, 0, 1, dx(-0.02), dy(23.72),
    'Z'
  ];

  return path;
};