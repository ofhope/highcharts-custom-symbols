import Highcharts from "highcharts";

// diamond symbol from SVG (preserving original path commands)
// Original SVG: <path d="M240,128a15.85,15.85,0,0,1-4.67,11.28l-96.05,96.06a16,16,0,0,1-22.56,0h0l-96-96.06a16,16,0,0,1,0-22.56l96.05-96.06a16,16,0,0,1,22.56,0l96.05,96.06A15.85,15.85,0,0,1,240,128Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["diamond"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(240), sy(128),
    'a', dx(15.85), dy(15.85), 0, 0, 1, dx(-4.67), dy(11.28),
    'l', dx(-96.05), dy(96.06),
    'a', dx(16), dy(16), 0, 0, 1, dx(-22.56), dy(0),
    'h', dx(0),
    'l', dx(-96), dy(-96.06),
    'a', dx(16), dy(16), 0, 0, 1, dx(0), dy(-22.56),
    'l', dx(96.05), dy(-96.06),
    'a', dx(16), dy(16), 0, 0, 1, dx(22.56), dy(0),
    'l', dx(96.05), dy(96.06),
    'A', dx(15.85), dy(15.85), 0, 0, 1, sx(240), sy(128),
    'Z'
  ];

  return path;
};