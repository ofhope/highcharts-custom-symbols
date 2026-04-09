import Highcharts from "highcharts";

// circle symbol from SVG (preserving original path commands)
// Original SVG: <path d="M 24 128 A 104 104 0 1 0 232 128 A 104 104 0 1 0 24 128 Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["circle"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(24), sy(128),
    'A', dx(104), dy(104), 0, 1, 0, sx(232), sy(128),
    'A', dx(104), dy(104), 0, 1, 0, sx(24), sy(128),
    'Z'
  ];

  return path;
};