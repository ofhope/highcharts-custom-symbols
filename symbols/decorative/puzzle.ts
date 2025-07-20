import Highcharts from "highcharts";

// puzzle symbol from SVG (preserving original path commands)
// Original SVG: <path d="M165.78,224H208a16,16,0,0,0,16-16V170.35A8,8,0,0,0,212.94,163a23.37,23.37,0,0,1-8.94,1.77c-13.23,0-24-11.1-24-24.73s10.77-24.73,24-24.73a23.37,23.37,0,0,1,8.94,1.77A8,8,0,0,0,224,109.65V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36,36,0,0,0-72,0,35.36,35.36,0,0,0,.22,4H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36,36,0,0,0,0,72,35.36,35.36,0,0,0,4-.22V208a16,16,0,0,0,16,16h42.22"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["puzzle"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(165.78), sy(224),
    'H', sx(208),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(-16),
    'V', sy(170.35),
    'A', dx(8), dy(8), 0, 0, 0, sx(212.94), sy(163),
    'a', dx(23.37), dy(23.37), 0, 0, 1, dx(-8.94), dy(1.77),
    'c', dx(-13.23), dy(0), dx(-24), dy(-11.1), dx(-24), dy(-24.73),
    's', dx(10.77), dy(-24.73), dx(24), dy(-24.73),
    'a', dx(23.37), dy(23.37), 0, 0, 1, dx(8.94), dy(1.77),
    'A', dx(8), dy(8), 0, 0, 0, sx(224), sy(109.65),
    'V', sy(72),
    'a', dx(16), dy(16), 0, 0, 0, dx(-16), dy(-16),
    'H', sx(171.78),
    'a', dx(35.36), dy(35.36), 0, 0, 0, dx(0.22), dy(-4),
    'a', dx(36), dy(36), 0, 0, 0, dx(-72), dy(0),
    'a', dx(35.36), dy(35.36), 0, 0, 0, dx(0.22), dy(4),
    'H', sx(64),
    'A', dx(16), dy(16), 0, 0, 0, sx(48), sy(72),
    'v', dy(32.22),
    'a', dx(35.36), dy(35.36), 0, 0, 0, dx(-4), dy(-0.22),
    'a', dx(36), dy(36), 0, 0, 0, dx(0), dy(72),
    'a', dx(35.36), dy(35.36), 0, 0, 0, dx(4), dy(-0.22),
    'V', sy(208),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(16),
    'h', dx(42.22)
  ];

  return path;
};