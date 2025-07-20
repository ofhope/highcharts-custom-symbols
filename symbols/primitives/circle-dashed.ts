import Highcharts from "highcharts";

// circle-dashed symbol from SVG (preserving original path commands)
// Original SVG: <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm54.59,45a8,8,0,0,1,11.29.7,88,88,0,0,1,17.6,30.47,8,8,0,0,1-15.18,5.08,71.87,71.87,0,0,0-14.4-25A8,8,0,0,1,182.59,69ZM73.41,187.05a8,8,0,0,1-11.29-.7,88,88,0,0,1-17.6-30.47A8,8,0,1,1,59.7,150.8a71.87,71.87,0,0,0,14.4,24.95A8,8,0,0,1,73.41,187.05Zm.69-106.8a71.87,71.87,0,0,0-14.4,25,8,8,0,1,1-15.18-5.08,88,88,0,0,1,17.6-30.47,8,8,0,1,1,12,10.6Zm71.49,134a87.8,87.8,0,0,1-35.18,0,8,8,0,0,1,3.18-15.68,72.08,72.08,0,0,0,28.82,0,8,8,0,0,1,3.18,15.68Zm6.25-163A8,8,0,0,1,144,57.61a7.89,7.89,0,0,1-1.6-.16,72.08,72.08,0,0,0-28.82,0,8,8,0,1,1-3.18-15.68,87.92,87.92,0,0,1,35.18,0A8,8,0,0,1,151.84,51.2Zm59.64,104.68a88,88,0,0,1-17.6,30.47,8,8,0,1,1-12-10.6,71.87,71.87,0,0,0,14.4-24.95,8,8,0,0,1,15.18,5.08Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["circle-dashed"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(128), sy(24),
    'A', dx(104), dy(104), 0, 1, 0, sx(232), sy(128),
    'A', dx(104.11), dy(104.11), 0, 0, 0, sx(128), sy(24),
    'Z',
    'm', dx(54.59), dy(45),
    'a', dx(8), dy(8), 0, 0, 1, dx(11.29), dy(88),
    'a', dx(88), dy(0), 0, 1, 17.6, dx(30.47), dy(8),
    'a', dx(8), dy(0), 0, 1, -15.18, dx(5.08), dy(71.87),
    'A', dx(8), dy(8), 0, 0, 1, sx(182.59), sy(69),
    'Z',
    'M', sx(73.41), sy(187.05),
    'a', dx(8), dy(8), 0, 0, 1, dx(-11.29), dy(-0.7),
    'a', dx(88), dy(88), 0, 0, 1, dx(-17.6), dy(-30.47),
    'A', dx(8), dy(8), 0, 1, 1, sx(59.7), sy(150.8),
    'a', dx(71.87), dy(71.87), 0, 0, 0, dx(14.4), dy(24.95),
    'A', dx(8), dy(8), 0, 0, 1, sx(73.41), sy(187.05),
    'Z',
    'm', dx(0.69), dy(-106.8),
    'a', dx(71.87), dy(71.87), 0, 0, 0, dx(-14.4), dy(25),
    'a', dx(8), dy(8), 0, 1, 1, dx(-15.18), dy(-5.08),
    'a', dx(88), dy(88), 0, 0, 1, dx(17.6), dy(-30.47),
    'a', dx(8), dy(8), 0, 1, 1, dx(12), dy(10.6),
    'Z',
    'm', dx(71.49), dy(134),
    'a', dx(87.8), dy(87.8), 0, 0, 1, dx(-35.18), dy(0),
    'a', dx(8), dy(8), 0, 0, 1, dx(3.18), dy(-15.68),
    'a', dx(72.08), dy(72.08), 0, 0, 0, dx(28.82), dy(0),
    'a', dx(8), dy(8), 0, 0, 1, dx(3.18), dy(15.68),
    'Z',
    'm', dx(6.25), dy(-163),
    'A', dx(8), dy(8), 0, 0, 1, sx(144), sy(57.61),
    'a', dx(7.89), dy(7.89), 0, 0, 1, dx(-1.6), dy(-0.16),
    'a', dx(72.08), dy(72.08), 0, 0, 0, dx(-28.82), dy(0),
    'a', dx(8), dy(8), 0, 1, 1, dx(-3.18), dy(-15.68),
    'a', dx(87.92), dy(87.92), 0, 0, 1, dx(35.18), dy(0),
    'A', dx(8), dy(8), 0, 0, 1, sx(151.84), sy(51.2),
    'Z',
    'm', dx(59.64), dy(104.68),
    'a', dx(88), dy(88), 0, 0, 1, dx(-17.6), dy(30.47),
    'a', dx(8), dy(8), 0, 1, 1, dx(-12), dy(-10.6),
    'a', dx(71.87), dy(71.87), 0, 0, 0, dx(14.4), dy(-24.95),
    'a', dx(8), dy(8), 0, 0, 1, dx(15.18), dy(5.08),
    'Z'
  ];

  return path;
};