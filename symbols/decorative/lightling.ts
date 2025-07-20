import Highcharts from "highcharts";

// lightling symbol from SVG (preserving original path commands)
// Original SVG: <path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["lightling"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(213.85), sy(125.46),
    'l', dx(-112), dy(120),
    'a', dx(8), dy(8), 0, 0, 1, dx(-13.69), dy(-7),
    'l', dx(14.66), dy(-73.33),
    'L', sx(45.19), sy(143.49),
    'a', dx(8), dy(8), 0, 0, 1, dx(-3), dy(-13),
    'l', dx(112), dy(-120),
    'a', dx(8), dy(8), 0, 0, 1, dx(13.69), dy(7),
    'L', sx(153.18), sy(90.9),
    'l', dx(57.63), dy(21.61),
    'a', dx(8), dy(8), 0, 0, 1, dx(3), dy(12.95),
    'Z'
  ];

  return path;
};