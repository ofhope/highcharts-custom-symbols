// cross symbol from SVG (preserving original path commands)
// Original SVG: <path d="M216,92v24a16,16,0,0,1-16,16H156v92a16,16,0,0,1-16,16H116a16,16,0,0,1-16-16V132H56a16,16,0,0,1-16-16V92A16,16,0,0,1,56,76h44V32a16,16,0,0,1,16-16h24a16,16,0,0,1,16,16V76h44A16,16,0,0,1,216,92Z"/>
// Original viewBox: 0 0 256 256

export const cross = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(216), sy(92),
    'v', dy(24),
    'a', dx(16), dy(16), 0, 0, 1, dx(-16), dy(16),
    'H', sx(156),
    'v', dy(92),
    'a', dx(16), dy(16), 0, 0, 1, dx(-16), dy(16),
    'H', sx(116),
    'a', dx(16), dy(16), 0, 0, 1, dx(-16), dy(-16),
    'V', sy(132),
    'H', sx(56),
    'a', dx(16), dy(16), 0, 0, 1, dx(-16), dy(-16),
    'V', sy(92),
    'A', dx(16), dy(16), 0, 0, 1, sx(56), sy(76),
    'h', dx(44),
    'V', sy(32),
    'a', dx(16), dy(16), 0, 0, 1, dx(16), dy(-16),
    'h', dx(24),
    'a', dx(16), dy(16), 0, 0, 1, dx(16), dy(16),
    'V', sy(76),
    'h', dx(44),
    'A', dx(16), dy(16), 0, 0, 1, sx(216), sy(92),
    'Z'
  ];

  return path;
};