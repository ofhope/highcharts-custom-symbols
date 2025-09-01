import Highcharts from "highcharts";

// car symbol from SVG (preserving original path commands)
// Original SVG: <path d="M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h96v8a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM80,152H56a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm120,0H176a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM44.31,104,69.2,48H186.8l24.89,56Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["car"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(240), sy(104),
    'H', sx(229.2),
    'L', sx(201.42), sy(41.5),
    'A', dx(16), dy(16), 0, 0, 0, sx(186.8), sy(32),
    'H', sx(69.2),
    'a', dx(16), dy(16), 0, 0, 0, dx(-14.62), dy(9.5),
    'L', sx(26.8), sy(104),
    'H', sx(16),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(16),
    'h', dx(8),
    'v', dy(80),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(16),
    'H', sx(64),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(-16),
    'v', dy(-8),
    'h', dx(96),
    'v', dy(8),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(16),
    'h', dx(24),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(-16),
    'V', sy(120),
    'h', dx(8),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(-16),
    'Z',
    'M', sx(80), sy(152),
    'H', sx(56),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'H', sx(80),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'Z',
    'm', dx(120), dy(0),
    'H', sx(176),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'h', dx(24),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'Z',
    'M', sx(44.31), sy(104),
    'L', sx(69.2), sy(48),
    'H', sx(186.8),
    'l', dx(24.89), dy(56),
    'Z'
  ];

  return path;
};