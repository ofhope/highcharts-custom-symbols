import Highcharts from "highcharts";

// square symbol from SVG (preserving original path commands)
// Original SVG: <path d="M 48 32 L 208 32 A 16 16 0 0 1 224 48 L 224 208 A 16 16 0 0 1 208 224 L 48 224 A 16 16 0 0 1 32 208 L 32 48 A 16 16 0 0 1 48 32 Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["square"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(48), sy(32),
    'L', sx(208), sy(32),
    'A', dx(16), dy(16), 0, 0, 1, sx(224), sy(48),
    'L', sx(224), sy(208),
    'A', dx(16), dy(16), 0, 0, 1, sx(208), sy(224),
    'L', sx(48), sy(224),
    'A', dx(16), dy(16), 0, 0, 1, sx(32), sy(208),
    'L', sx(32), sy(48),
    'A', dx(16), dy(16), 0, 0, 1, sx(48), sy(32),
    'Z'
  ];

  return path;
};