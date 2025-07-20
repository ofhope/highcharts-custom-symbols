import Highcharts from "highcharts";

// building-apartment symbol from SVG (preserving original path commands)
// Original SVG: <path d="M240,208h-8V72a8,8,0,0,0-8-8H184V40a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM80,176H64a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm64,64H112V168h32Zm-8-64H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm56,96H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["building-apartment"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(240), sy(208),
    'h', dx(-8),
    'V', sy(72),
    'a', dx(8), dy(8), 0, 0, 0, dx(-8), dy(-8),
    'H', sx(184),
    'V', sy(40),
    'a', dx(8), dy(8), 0, 0, 0, dx(-8), dy(-8),
    'H', sx(80),
    'a', dx(8), dy(8), 0, 0, 0, dx(-8), dy(8),
    'V', sy(96),
    'H', sx(32),
    'a', dx(8), dy(8), 0, 0, 0, dx(-8), dy(8),
    'V', sy(208),
    'H', sx(16),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(16),
    'H', sx(240),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(-16),
    'Z',
    'M', sx(80), sy(176),
    'H', sx(64),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'H', sx(80),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'Z',
    'm', dx(0), dy(-32),
    'H', sx(64),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'H', sx(80),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'Z',
    'm', dx(64), dy(64),
    'H', sx(112),
    'V', sy(168),
    'h', dx(32),
    'Z',
    'm', dx(-8), dy(-64),
    'H', sx(120),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'h', dx(16),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'Z',
    'm', dx(0), dy(-32),
    'H', sx(120),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'h', dx(16),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'Z',
    'm', dx(0), dy(-32),
    'H', sx(120),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'h', dx(16),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'Z',
    'm', dx(56), dy(96),
    'H', sx(176),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'h', dx(16),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'Z',
    'm', dx(0), dy(-32),
    'H', sx(176),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'h', dx(16),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'Z',
    'm', dx(0), dy(-32),
    'H', sx(176),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'h', dx(16),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'Z'
  ];

  return path;
};