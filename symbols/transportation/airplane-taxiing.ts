import Highcharts from "highcharts";

// airplane-taxiing symbol from SVG (preserving original path commands)
// Original SVG: <path d="M248,136v24a8,8,0,0,1-8,8H61.07a39.75,39.75,0,0,1-38.31-28.51L8.69,92.6A16,16,0,0,1,24,72h8a8,8,0,0,1,5.65,2.34L59.32,96H81.81l-9-26.94A16,16,0,0,1,88,48h8a8,8,0,0,1,5.66,2.34L147.32,96H208A40,40,0,0,1,248,136Zm-40,48a16,16,0,1,0,16,16A16,16,0,0,0,208,184Zm-96,0a16,16,0,1,0,16,16A16,16,0,0,0,112,184Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["airplane-taxiing"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(248), sy(136),
    'v', dy(24),
    'a', dx(8), dy(8), 0, 0, 1, dx(-8), dy(8),
    'H', sx(61.07),
    'a', dx(39.75), dy(39.75), 0, 0, 1, dx(-38.31), dy(-28.51),
    'L', sx(8.69), sy(92.6),
    'A', dx(16), dy(16), 0, 0, 1, sx(24), sy(72),
    'h', dx(8),
    'a', dx(8), dy(8), 0, 0, 1, dx(5.65), dy(2.34),
    'L', sx(59.32), sy(96),
    'H', sx(81.81),
    'l', dx(-9), dy(-26.94),
    'A', dx(16), dy(16), 0, 0, 1, sx(88), sy(48),
    'h', dx(8),
    'a', dx(8), dy(8), 0, 0, 1, dx(5.66), dy(2.34),
    'L', sx(147.32), sy(96),
    'H', sx(208),
    'A', dx(40), dy(40), 0, 0, 1, sx(248), sy(136),
    'Z',
    'm', dx(-40), dy(48),
    'a', dx(16), dy(16), 0, 1, 0, dx(16), dy(16),
    'A', dx(16), dy(16), 0, 0, 0, sx(208), sy(184),
    'Z',
    'm', dx(-96), dy(0),
    'a', dx(16), dy(16), 0, 1, 0, dx(16), dy(16),
    'A', dx(16), dy(16), 0, 0, 0, sx(112), sy(184),
    'Z'
  ];

  return path;
};