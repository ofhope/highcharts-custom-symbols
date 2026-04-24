// circle-half symbol from SVG (preserving original path commands)
// Original SVG: <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.1,88.1,0,0,1,88-88V216A88.1,88.1,0,0,1,40,128Z"/>
// Original viewBox: 0 0 256 256

export const circleHalf = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(128), sy(24),
    'A', dx(104), dy(104), 0, 1, 0, sx(232), sy(128),
    'A', dx(104.11), dy(104.11), 0, 0, 0, sx(128), sy(24),
    'Z',
    'M', sx(40), sy(128),
    'a', dx(88.1), dy(88.1), 0, 0, 1, dx(88), dy(-88),
    'V', sy(216),
    'A', dx(88.1), dy(88.1), 0, 0, 1, sx(40), sy(128),
    'Z'
  ];

  return path;
};