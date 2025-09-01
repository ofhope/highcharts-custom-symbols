import Highcharts from "highcharts";

// pentagon symbol from SVG (preserving original path commands)
// Original SVG: <path d="M231.26,105.19l-32,107.54-.06.17A15.94,15.94,0,0,1,184,224H72A15.94,15.94,0,0,1,56.8,212.9l-.06-.17-32-107.54a16,16,0,0,1,5.7-17.63l87.92-68.31.18-.14a15.93,15.93,0,0,1,18.92,0l.18.14,87.92,68.31A16,16,0,0,1,231.26,105.19Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["pentagon"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(231.26), sy(105.19),
    'l', dx(-32), dy(107.54),
    'A', dx(15.94), dy(15.94), 0, 0, 1, sx(184), sy(224),
    'H', sx(72),
    'A', dx(15.94), dy(15.94), 0, 0, 1, sx(56.8), sy(212.9),
    'l', dx(-0.06), dy(-0.17),
    'l', dx(-32), dy(-107.54),
    'a', dx(16), dy(16), 0, 0, 1, dx(5.7), dy(-17.63),
    'l', dx(87.92), dy(-68.31),
    'a', dx(15.93), dy(15.93), 0, 0, 1, dx(18.92), dy(0),
    'l', dx(0.18), dy(87.92),
    'A', dx(16), dy(16), 0, 0, 1, sx(231.26), sy(105.19),
    'Z'
  ];

  return path;
};