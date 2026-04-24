// pentagon symbol from SVG (preserving original path commands)
// Original SVG: <path d="M955.272,438.28l-133.333,448.083l-0.25,0.709c-8.761,27.491 -34.48,46.273 -63.333,46.25l-466.667,-0c-28.853,0.023 -54.572,-18.759 -63.333,-46.25l-0.25,-0.709l-133.334,-448.083c-8.488,-26.979 1.074,-56.555 23.75,-73.458l366.334,-284.625l0.75,-0.584c23.367,-17.247 55.466,-17.247 78.833,0l0.75,0.584l366.333,284.625c22.676,16.903 32.238,46.479 23.75,73.458Z"/>
// Original viewBox: 0 0 1067 1067

export const pentagon = function (x: number, y: number, w: number, h: number) {
  // Scale the original path coordinates to fit within the symbol bounds
  // Original SVG commands (M, L, C, S, Q, T, A, Z) are preserved for maximum fidelity
  const scaleX = w / 1067;
  const scaleY = h / 1067;

  // Helper functions to scale coordinates
  const sx = (coord: number) => x + coord * scaleX;  // For absolute coordinates
  const sy = (coord: number) => y + coord * scaleY;  // For absolute coordinates
  const dx = (coord: number) => coord * scaleX;       // For relative coordinates (no offset)
  const dy = (coord: number) => coord * scaleY;       // For relative coordinates (no offset)

  const path = [
    'M', sx(955.272), sy(438.28),
    'l', dx(-133.333), dy(448.083),
    'l', dx(-0.25), dy(0.709),
    'c', dx(-8.761), dy(27.491), dx(-34.48), dy(46.273), dx(-63.333), dy(46.25),
    'l', dx(-466.667), dy(0),
    'c', dx(-28.853), dy(0.023), dx(-54.572), dy(-18.759), dx(-63.333), dy(-46.25),
    'l', dx(-0.25), dy(-0.709),
    'l', dx(-133.334), dy(-448.083),
    'c', dx(-8.488), dy(-26.979), dx(1.074), dy(-56.555), dx(23.75), dy(-73.458),
    'l', dx(366.334), dy(-284.625),
    'l', dx(0.75), dy(-0.584),
    'c', dx(23.367), dy(-17.247), dx(55.466), dy(-17.247), dx(78.833), dy(0),
    'l', dx(0.75), dy(0.584),
    'l', dx(366.333), dy(284.625),
    'c', dx(22.676), dy(16.903), dx(32.238), dy(46.479), dx(23.75), dy(73.458),
    'Z'
  ];

  return path;
};