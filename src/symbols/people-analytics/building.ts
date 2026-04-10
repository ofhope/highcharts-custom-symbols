import Highcharts from "highcharts";

// building symbol from SVG (preserving original path commands)
// Original SVG: <path d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM80,72H96a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16Zm-8,48a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm64,88H88V160h48Zm8-80H128a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-40H128a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm72,120H184V96h32Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["building"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(248), sy(208),
    'H', sx(232),
    'V', sy(96),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(-16),
    'H', sx(184),
    'V', sy(48),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(-16),
    'H', sx(40),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(16),
    'V', sy(208),
    'H', sx(24),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(16),
    'H', sx(248),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(-16),
    'Z',
    'M', sx(80), sy(72),
    'H', sx(96),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'H', sx(80),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'Z',
    'm', dx(-8), dy(48),
    'a', dx(8), dy(8), 0, 0, 1, dx(8), dy(-8),
    'H', sx(96),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'H', sx(80),
    'A', dx(8), dy(8), 0, 0, 1, sx(72), sy(120),
    'Z',
    'm', dx(64), dy(88),
    'H', sx(88),
    'V', sy(160),
    'h', dx(48),
    'Z',
    'm', dx(8), dy(-80),
    'H', sx(128),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'h', dx(16),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'Z',
    'm', dx(0), dy(-40),
    'H', sx(128),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'h', dx(16),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'Z',
    'm', dx(72), dy(120),
    'H', sx(184),
    'V', sy(96),
    'h', dx(32),
    'Z'
  ];

  return path;
};