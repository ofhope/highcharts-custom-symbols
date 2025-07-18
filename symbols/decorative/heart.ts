import Highcharts from "highcharts";

// heart symbol from SVG (preserving original path commands)
// Original SVG: <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["heart"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(240), sy(102),
    'c', dx(0), dy(70), dx(-103.79), dy(126.66), dx(-108.21), dy(129),
    'a', dx(8), dy(8), 0, 0, 1, dx(-7.58), dy(0),
    'C', sx(119.79), sy(228.66), sx(16), sy(172), sx(16), sy(102),
    'A', dx(62.07), dy(62.07), 0, 0, 1, sx(78), sy(40),
    'c', dx(20.65), dy(0), dx(38.73), dy(8.88), dx(50), dy(23.89),
    'C', sx(139.27), sy(48.88), sx(157.35), sy(40), sx(178), sy(40),
    'A', dx(62.07), dy(62.07), 0, 0, 1, sx(240), sy(102),
    'Z'
  ];

  return path;
};