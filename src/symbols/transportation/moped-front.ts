import Highcharts from "highcharts";

// moped-front symbol from SVG (preserving original path commands)
// Original SVG: <path d="M208,40H167.2a40,40,0,0,0-78.4,0H48a8,8,0,0,0,0,16H88.8a40,40,0,0,0,12.58,21.82A64.08,64.08,0,0,0,64,136v64a16,16,0,0,0,16,16H96a32,32,0,0,0,64,0h16a16,16,0,0,0,16-16V136a64.08,64.08,0,0,0-37.38-58.18A40,40,0,0,0,167.2,56H208a8,8,0,0,0,0-16ZM144,216a16,16,0,0,1-32,0V168a16,16,0,0,1,32,0ZM128,72a24,24,0,1,1,24-24A24,24,0,0,1,128,72Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["moped-front"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(208), sy(40),
    'H', sx(167.2),
    'a', dx(40), dy(40), 0, 0, 0, dx(-78.4), dy(0),
    'H', sx(48),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(16),
    'H', sx(88.8),
    'a', dx(40), dy(40), 0, 0, 0, dx(12.58), dy(21.82),
    'A', dx(64.08), dy(64.08), 0, 0, 0, sx(64), sy(136),
    'v', dy(64),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(16),
    'H', sx(96),
    'a', dx(32), dy(32), 0, 0, 0, dx(64), dy(0),
    'h', dx(16),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(-16),
    'V', sy(136),
    'a', dx(64.08), dy(64.08), 0, 0, 0, dx(-37.38), dy(-58.18),
    'A', dx(40), dy(40), 0, 0, 0, sx(167.2), sy(56),
    'H', sx(208),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(-16),
    'Z',
    'M', sx(144), sy(216),
    'a', dx(16), dy(16), 0, 0, 1, dx(-32), dy(0),
    'V', sy(168),
    'a', dx(16), dy(16), 0, 0, 1, dx(32), dy(0),
    'Z',
    'M', sx(128), sy(72),
    'a', dx(24), dy(24), 0, 1, 1, dx(24), dy(-24),
    'A', dx(24), dy(24), 0, 0, 1, sx(128), sy(72),
    'Z'
  ];

  return path;
};