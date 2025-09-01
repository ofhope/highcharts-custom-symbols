import Highcharts from "highcharts";

// cable-car symbol from SVG (preserving original path commands)
// Original SVG: <path d="M247.87,30.59a8,8,0,0,0-9.28-6.46l-224,40A8,8,0,0,0,16,80a8.6,8.6,0,0,0,1.42-.12L120,61.56V96H64a32,32,0,0,0-32,32v64a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V128a32,32,0,0,0-32-32H136V58.7L241.4,39.88A8,8,0,0,0,247.87,30.59ZM104,160V112h48v48ZM64,112H88v48H48V128A16,16,0,0,1,64,112Zm144,16v32H168V112h24A16,16,0,0,1,208,128Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["cable-car"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(247.87), sy(30.59),
    'a', dx(8), dy(8), 0, 0, 0, dx(-9.28), dy(-6.46),
    'l', dx(-224), dy(40),
    'A', dx(8), dy(8), 0, 0, 0, sx(16), sy(80),
    'a', dx(8.6), dy(8.6), 0, 0, 0, dx(1.42), dy(-0.12),
    'L', sx(120), sy(61.56),
    'V', sy(96),
    'H', sx(64),
    'a', dx(32), dy(32), 0, 0, 0, dx(-32), dy(32),
    'v', dy(64),
    'a', dx(32), dy(32), 0, 0, 0, dx(32), dy(32),
    'H', sx(192),
    'a', dx(32), dy(32), 0, 0, 0, dx(32), dy(-32),
    'V', sy(128),
    'a', dx(32), dy(32), 0, 0, 0, dx(-32), dy(-32),
    'H', sx(136),
    'V', sy(58.7),
    'L', sx(241.4), sy(39.88),
    'A', dx(8), dy(8), 0, 0, 0, sx(247.87), sy(30.59),
    'Z',
    'M', sx(104), sy(160),
    'V', sy(112),
    'h', dx(48),
    'v', dy(48),
    'Z',
    'M', sx(64), sy(112),
    'H', sx(88),
    'v', dy(48),
    'H', sx(48),
    'V', sy(128),
    'A', dx(16), dy(16), 0, 0, 1, sx(64), sy(112),
    'Z',
    'm', dx(144), dy(16),
    'v', dy(32),
    'H', sx(168),
    'V', sy(112),
    'h', dx(24),
    'A', dx(16), dy(16), 0, 0, 1, sx(208), sy(128),
    'Z'
  ];

  return path;
};