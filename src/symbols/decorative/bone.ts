import Highcharts from "highcharts";

// bone symbol from SVG (preserving original path commands)
// Original SVG: <path d="M231.12,107.72a35.91,35.91,0,0,1-46.19,6.8.14.14,0,0,0-.1,0l-70.35,70.36s0,0,0,.08a36,36,0,1,1-66.37,22.92,36,36,0,1,1,22.92-66.37.14.14,0,0,0,.1,0l70.35-70.36s0,0,0-.08a36,36,0,1,1,66.37-22.92,36,36,0,0,1,23.27,59.57Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["bone"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(231.12), sy(107.72),
    'a', dx(35.91), dy(35.91), 0, 0, 1, dx(-46.19), dy(6.8),
    'l', dx(-70.35), dy(70.36),
    's', dx(0), dy(0), dx(0), dy(0.08),
    'a', dx(36), dy(36), 0, 1, 1, dx(-66.37), dy(22.92),
    'a', dx(36), dy(36), 0, 1, 1, dx(22.92), dy(-66.37),
    'l', dx(70.35), dy(-70.36),
    's', dx(0), dy(0), dx(0), dy(-0.08),
    'a', dx(36), dy(36), 0, 1, 1, dx(66.37), dy(-22.92),
    'a', dx(36), dy(36), 0, 0, 1, dx(23.27), dy(59.57),
    'Z'
  ];

  return path;
};