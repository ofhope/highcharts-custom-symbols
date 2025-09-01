import Highcharts from "highcharts";

// train-simple symbol from SVG (preserving original path commands)
// Original SVG: <path d="M184,24H72A32,32,0,0,0,40,56V184a32,32,0,0,0,32,32h8L65.6,235.2a8,8,0,1,0,12.8,9.6L100,216h56l21.6,28.8a8,8,0,1,0,12.8-9.6L176,216h8a32,32,0,0,0,32-32V56A32,32,0,0,0,184,24Zm0,176H72a16,16,0,0,1-16-16V136H200v48A16,16,0,0,1,184,200ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["train-simple"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(184), sy(24),
    'H', sx(72),
    'A', dx(32), dy(32), 0, 0, 0, sx(40), sy(56),
    'V', sy(184),
    'a', dx(32), dy(32), 0, 0, 0, dx(32), dy(32),
    'h', dx(8),
    'L', sx(65.6), sy(235.2),
    'a', dx(8), dy(8), 0, 1, 0, dx(12.8), dy(9.6),
    'L', sx(100), sy(216),
    'h', dx(56),
    'l', dx(21.6), dy(28.8),
    'a', dx(8), dy(8), 0, 1, 0, dx(12.8), dy(-9.6),
    'L', sx(176), sy(216),
    'h', dx(8),
    'a', dx(32), dy(32), 0, 0, 0, dx(32), dy(-32),
    'V', sy(56),
    'A', dx(32), dy(32), 0, 0, 0, sx(184), sy(24),
    'Z',
    'm', dx(0), dy(176),
    'H', sx(72),
    'a', dx(16), dy(16), 0, 0, 1, dx(-16), dy(-16),
    'V', sy(136),
    'H', sx(200),
    'v', dy(48),
    'A', dx(16), dy(16), 0, 0, 1, sx(184), sy(200),
    'Z',
    'M', sx(96), sy(172),
    'a', dx(12), dy(12), 0, 1, 1, dx(-12), dy(-12),
    'A', dx(12), dy(12), 0, 0, 1, sx(96), sy(172),
    'Z',
    'm', dx(88), dy(0),
    'a', dx(12), dy(12), 0, 1, 1, dx(-12), dy(-12),
    'A', dx(12), dy(12), 0, 0, 1, sx(184), sy(172),
    'Z'
  ];

  return path;
};