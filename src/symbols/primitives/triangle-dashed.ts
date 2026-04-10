import Highcharts from "highcharts";

// triangle-dashed symbol from SVG (preserving original path commands)
// Original SVG: <path d="M236.8,188.09,149.35,36.22a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.34,24.34,0,0,0,40.55,224h174.9a24.34,24.34,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM108,200H60.79A12,12,0,0,1,50.4,182l24.18-42a8,8,0,0,1,13.87,8L67.71,184H108a8,8,0,0,1,0,16Zm-1.12-84A8,8,0,0,1,93,108l24.59-42.7a12,12,0,0,1,20.8,0L163,108a8,8,0,0,1-13.87,8L128,79.31Zm98.72,78a12.05,12.05,0,0,1-10.39,6H148a8,8,0,0,1,0-16h40.29l-20.74-36a8,8,0,0,1,13.87-8l24.18,42A12,12,0,0,1,205.6,194Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["triangle-dashed"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(236.8), sy(188.09),
    'L', sx(149.35), sy(36.22),
    'a', dx(24.76), dy(24.76), 0, 0, 0, dx(-42.7), dy(0),
    'L', sx(19.2), sy(188.09),
    'a', dx(23.51), dy(23.51), 0, 0, 0, dx(0), dy(23.72),
    'A', dx(24.34), dy(24.34), 0, 0, 0, sx(40.55), sy(224),
    'h', dx(174.9),
    'a', dx(24.34), dy(24.34), 0, 0, 0, dx(21.33), dy(-12.19),
    'A', dx(23.51), dy(23.51), 0, 0, 0, sx(236.8), sy(188.09),
    'Z',
    'M', sx(108), sy(200),
    'H', sx(60.79),
    'A', dx(12), dy(12), 0, 0, 1, sx(50.4), sy(182),
    'l', dx(24.18), dy(-42),
    'a', dx(8), dy(8), 0, 0, 1, dx(13.87), dy(8),
    'L', sx(67.71), sy(184),
    'H', sx(108),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'Z',
    'm', dx(-1.12), dy(-84),
    'A', dx(8), dy(8), 0, 0, 1, sx(93), sy(108),
    'l', dx(24.59), dy(-42.7),
    'a', dx(12), dy(12), 0, 0, 1, dx(20.8), dy(0),
    'L', sx(163), sy(108),
    'a', dx(8), dy(8), 0, 0, 1, dx(-13.87), dy(8),
    'L', sx(128), sy(79.31),
    'Z',
    'm', dx(98.72), dy(78),
    'a', dx(12.05), dy(12.05), 0, 0, 1, dx(-10.39), dy(6),
    'H', sx(148),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'h', dx(40.29),
    'l', dx(-20.74), dy(-36),
    'a', dx(8), dy(8), 0, 0, 1, dx(13.87), dy(-8),
    'l', dx(24.18), dy(42),
    'A', dx(12), dy(12), 0, 0, 1, sx(205.6), sy(194),
    'Z'
  ];

  return path;
};