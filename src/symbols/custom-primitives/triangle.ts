import Highcharts from "highcharts";

// triangle symbol from SVG (preserving original path commands)
// Original SVG: <path d="M236.78,211.81A24.34,24.34,0,0,1,215.45,224H40.55a24.34,24.34,0,0,1-21.33-12.19,23.51,23.51,0,0,1,0-23.72L106.65,36.22a24.76,24.76,0,0,1,42.7,0L236.8,188.09A23.51,23.51,0,0,1,236.78,211.81Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["triangle"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(236.78), sy(211.81),
    'A', dx(24.34), dy(24.34), 0, 0, 1, sx(215.45), sy(224),
    'H', sx(40.55),
    'a', dx(24.34), dy(24.34), 0, 0, 1, dx(-21.33), dy(-12.19),
    'a', dx(23.51), dy(23.51), 0, 0, 1, dx(0), dy(-23.72),
    'L', sx(106.65), sy(36.22),
    'a', dx(24.76), dy(24.76), 0, 0, 1, dx(42.7), dy(0),
    'L', sx(236.8), sy(188.09),
    'A', dx(23.51), dy(23.51), 0, 0, 1, sx(236.78), sy(211.81),
    'Z'
  ];

  return path;
};