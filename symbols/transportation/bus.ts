import Highcharts from "highcharts";

// bus symbol from SVG (preserving original path commands)
// Original SVG: <path d="M248,80v24a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0ZM16,72a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V80A8,8,0,0,0,16,72Zm200-8V208a16,16,0,0,1-16,16H184a16,16,0,0,1-16-16v-8H88v8a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V64A32,32,0,0,1,72,32H184A32,32,0,0,1,216,64ZM104,148a12,12,0,1,0-12,12A12,12,0,0,0,104,148Zm72,0a12,12,0,1,0-12,12A12,12,0,0,0,176,148Zm24-76H56v40H200Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["bus"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(248), sy(80),
    'v', dy(24),
    'a', dx(8), dy(8), 0, 0, 1, dx(-16), dy(0),
    'V', sy(80),
    'a', dx(8), dy(8), 0, 0, 1, dx(16), dy(0),
    'Z',
    'M', sx(16), sy(72),
    'a', dx(8), dy(8), 0, 0, 0, dx(-8), dy(8),
    'v', dy(24),
    'a', dx(8), dy(8), 0, 0, 0, dx(16), dy(0),
    'V', sy(80),
    'A', dx(8), dy(8), 0, 0, 0, sx(16), sy(72),
    'Z',
    'm', dx(200), dy(-8),
    'V', sy(208),
    'a', dx(16), dy(16), 0, 0, 1, dx(-16), dy(16),
    'H', sx(184),
    'a', dx(16), dy(16), 0, 0, 1, dx(-16), dy(-16),
    'v', dy(-8),
    'H', sx(88),
    'v', dy(8),
    'a', dx(16), dy(16), 0, 0, 1, dx(-16), dy(16),
    'H', sx(56),
    'a', dx(16), dy(16), 0, 0, 1, dx(-16), dy(-16),
    'V', sy(64),
    'A', dx(32), dy(32), 0, 0, 1, sx(72), sy(32),
    'H', sx(184),
    'A', dx(32), dy(32), 0, 0, 1, sx(216), sy(64),
    'Z',
    'M', sx(104), sy(148),
    'a', dx(12), dy(12), 0, 1, 0, dx(-12), dy(12),
    'A', dx(12), dy(12), 0, 0, 0, sx(104), sy(148),
    'Z',
    'm', dx(72), dy(0),
    'a', dx(12), dy(12), 0, 1, 0, dx(-12), dy(12),
    'A', dx(12), dy(12), 0, 0, 0, sx(176), sy(148),
    'Z',
    'm', dx(24), dy(-76),
    'H', sx(56),
    'v', dy(40),
    'H', sx(200),
    'Z'
  ];

  return path;
};