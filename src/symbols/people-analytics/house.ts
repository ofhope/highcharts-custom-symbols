// house symbol from SVG (preserving original path commands)
// Original SVG: <path d="M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"/>
// Original viewBox: 0 0 256 256

export const house = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(224), sy(120),
    'v', dy(96),
    'a', dx(8), dy(8), 0, 0, 1, dx(-8), dy(8),
    'H', sx(160),
    'a', dx(8), dy(8), 0, 0, 1, dx(-8), dy(-8),
    'V', sy(164),
    'a', dx(4), dy(4), 0, 0, 0, dx(-4), dy(-4),
    'H', sx(108),
    'a', dx(4), dy(4), 0, 0, 0, dx(-4), dy(4),
    'v', dy(52),
    'a', dx(8), dy(8), 0, 0, 1, dx(-8), dy(8),
    'H', sx(40),
    'a', dx(8), dy(8), 0, 0, 1, dx(-8), dy(-8),
    'V', sy(120),
    'a', dx(16), dy(16), 0, 0, 1, dx(4.69), dy(-11.31),
    'l', dx(80), dy(-80),
    'a', dx(16), dy(16), 0, 0, 1, dx(22.62), dy(0),
    'l', dx(80), dy(80),
    'A', dx(16), dy(16), 0, 0, 1, sx(224), sy(120),
    'Z'
  ];

  return path;
};