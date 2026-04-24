// parallelogram symbol from SVG (preserving original path commands)
// Original SVG: <path d="M246.58,62.57l-64.8,144A16,16,0,0,1,167.19,216H24A16,16,0,0,1,9.42,193.43l64.8-144A16,16,0,0,1,88.81,40H232a16,16,0,0,1,14.59,22.57Z"/>
// Original viewBox: 0 0 256 256

export const parallelogram = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(246.58), sy(62.57),
    'l', dx(-64.8), dy(144),
    'A', dx(16), dy(16), 0, 0, 1, sx(167.19), sy(216),
    'H', sx(24),
    'A', dx(16), dy(16), 0, 0, 1, sx(9.42), sy(193.43),
    'l', dx(64.8), dy(-144),
    'A', dx(16), dy(16), 0, 0, 1, sx(88.81), sy(40),
    'H', sx(232),
    'a', dx(16), dy(16), 0, 0, 1, dx(14.59), dy(22.57),
    'Z'
  ];

  return path;
};