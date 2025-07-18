import Highcharts from "highcharts";

// scooter symbol from SVG (preserving original path commands)
// Original SVG: <path d="M244,172a32,32,0,1,1-49.38-26.85l-9-26.89-51.46,62.81A8,8,0,0,1,128,184H73.66a32,32,0,1,1,2.08-16h48.47l55.46-67.69L162.23,48H136a8,8,0,0,1,0-16h32a8,8,0,0,1,7.59,5.47L209.8,140.08c.72-.05,1.46-.08,2.2-.08A32,32,0,0,1,244,172Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["scooter"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(244), sy(172),
    'a', dx(32), dy(32), 0, 1, 1, dx(-49.38), dy(-26.85),
    'l', dx(-9), dy(-26.89),
    'l', dx(-51.46), dy(62.81),
    'A', dx(8), dy(8), 0, 0, 1, sx(128), sy(184),
    'H', sx(73.66),
    'a', dx(32), dy(32), 0, 1, 1, dx(2.08), dy(-16),
    'h', dx(48.47),
    'l', dx(55.46), dy(-67.69),
    'L', sx(162.23), sy(48),
    'H', sx(136),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'h', dx(32),
    'a', dx(8), dy(8), 0, 0, 1, dx(7.59), dy(5.47),
    'L', sx(209.8), sy(140.08),
    'c', dx(0.72), dy(-0.05), dx(1.46), dy(-0.08), dx(2.2), dy(-0.08),
    'A', dx(32), dy(32), 0, 0, 1, sx(244), sy(172),
    'Z'
  ];

  return path;
};