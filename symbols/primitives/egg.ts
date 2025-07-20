import Highcharts from "highcharts";

// egg symbol from SVG (preserving original path commands)
// Original SVG: <path d="M216,152a88,88,0,0,1-176,0c0-30.77,10.7-64.46,29.34-92.44C87.53,32.29,109.46,16,128,16s40.47,16.29,58.66,43.56C205.3,87.54,216,121.23,216,152Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["egg"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(216), sy(152),
    'a', dx(88), dy(88), 0, 0, 1, dx(-176), dy(0),
    'c', dx(0), dy(-30.77), dx(10.7), dy(-64.46), dx(29.34), dy(-92.44),
    'C', sx(87.53), sy(32.29), sx(109.46), sy(16), sx(128), sy(16),
    's', dx(40.47), dy(16.29), dx(58.66), dy(43.56),
    'C', sx(205.3), sy(87.54), sx(216), sy(121.23), sx(216), sy(152),
    'Z'
  ];

  return path;
};