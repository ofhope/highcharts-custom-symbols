// tag symbol from SVG (preserving original path commands)
// Original SVG: <path d="M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63ZM84,96A12,12,0,1,1,96,84,12,12,0,0,1,84,96Z"/>
// Original viewBox: 0 0 256 256

export const tag = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(243.31), sy(136),
    'L', sx(144), sy(36.69),
    'A', dx(15.86), dy(15.86), 0, 0, 0, sx(132.69), sy(32),
    'H', sx(40),
    'a', dx(8), dy(8), 0, 0, 0, dx(-8), dy(8),
    'v', dy(92.69),
    'A', dx(15.86), dy(15.86), 0, 0, 0, sx(36.69), sy(144),
    'L', sx(136), sy(243.31),
    'a', dx(16), dy(16), 0, 0, 0, dx(22.63), dy(0),
    'l', dx(84.68), dy(-84.68),
    'a', dx(16), dy(16), 0, 0, 0, dx(0), dy(-22.63),
    'Z',
    'M', sx(84), sy(96),
    'A', dx(12), dy(12), 0, 1, 1, sx(96), sy(84),
    'A', dx(12), dy(12), 0, 0, 1, sx(84), sy(96),
    'Z'
  ];

  return path;
};