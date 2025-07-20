import Highcharts from "highcharts";

// balloon symbol from SVG (preserving original path commands)
// Original SVG: <path d="M211,130.66,181.2,46.47a56,56,0,0,0-106-1.14h0l-29.51,83.5A88,88,0,1,0,211,130.66ZM128,200a40,40,0,1,1,40-40A40,40,0,0,1,128,200Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["balloon"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(211), sy(130.66),
    'L', sx(181.2), sy(46.47),
    'a', dx(56), dy(56), 0, 0, 0, dx(-106), dy(-1.14),
    'h', dx(0),
    'l', dx(-29.51), dy(83.5),
    'A', dx(88), dy(88), 0, 1, 0, sx(211), sy(130.66),
    'Z',
    'M', sx(128), sy(200),
    'a', dx(40), dy(40), 0, 1, 1, dx(40), dy(-40),
    'A', dx(40), dy(40), 0, 0, 1, sx(128), sy(200),
    'Z'
  ];

  return path;
};