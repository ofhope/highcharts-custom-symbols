import Highcharts from "highcharts";

// hexagon symbol from SVG (preserving original path commands)
// Original SVG: <path d="M232,80.18v95.64a16,16,0,0,1-8.32,14l-88,48.17a15.88,15.88,0,0,1-15.36,0l-88-48.17a16,16,0,0,1-8.32-14V80.18a16,16,0,0,1,8.32-14l88-48.17a15.88,15.88,0,0,1,15.36,0l88,48.17A16,16,0,0,1,232,80.18Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["hexagon"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(232), sy(80.18),
    'v', dy(95.64),
    'a', dx(16), dy(16), 0, 0, 1, dx(-8.32), dy(14),
    'l', dx(-88), dy(48.17),
    'a', dx(15.88), dy(15.88), 0, 0, 1, dx(-15.36), dy(0),
    'l', dx(-88), dy(-48.17),
    'a', dx(16), dy(16), 0, 0, 1, dx(-8.32), dy(-14),
    'V', sy(80.18),
    'a', dx(16), dy(16), 0, 0, 1, dx(8.32), dy(-14),
    'l', dx(88), dy(-48.17),
    'a', dx(15.88), dy(15.88), 0, 0, 1, dx(15.36), dy(0),
    'l', dx(88), dy(48.17),
    'A', dx(16), dy(16), 0, 0, 1, sx(232), sy(80.18),
    'Z'
  ];

  return path;
};