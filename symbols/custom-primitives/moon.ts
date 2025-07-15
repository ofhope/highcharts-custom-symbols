import Highcharts from "highcharts";

// moon symbol from SVG (preserving original path commands)
// Original SVG: <path d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["moon"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(235.54), sy(150.21),
    'a', dx(104.84), dy(104.84), 0, 0, 1, dx(-37), dy(52.91),
    'A', dx(104), dy(104), 0, 0, 1, sx(32), sy(120),
    'A', dx(103.09), dy(103.09), 0, 0, 1, sx(52.88), sy(57.48),
    'a', dx(104.84), dy(104.84), 0, 0, 1, dx(52.91), dy(-37),
    'a', dx(8), dy(8), 0, 0, 1, dx(10), dy(10),
    'a', dx(88.08), dy(88.08), 0, 0, 0, dx(109.8), dy(109.8),
    'a', dx(8), dy(8), 0, 0, 1, dx(10), dy(10),
    'Z'
  ];

  return path;
};