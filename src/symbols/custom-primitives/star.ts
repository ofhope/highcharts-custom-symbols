import Highcharts from "highcharts";

// star symbol from SVG (preserving original path commands)
// Original SVG: <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["star"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(234.29), sy(114.85),
    'l', dx(-45), dy(38.83),
    'L', sx(203), sy(211.75),
    'a', dx(16.4), dy(16.4), 0, 0, 1, dx(-24.5), dy(17.82),
    'L', sx(128), sy(198.49),
    'L', sx(77.47), sy(229.57),
    'A', dx(16.4), dy(16.4), 0, 0, 1, sx(53), sy(211.75),
    'l', dx(13.76), dy(-58.07),
    'l', dx(-45), dy(-38.83),
    'A', dx(16.46), dy(16.46), 0, 0, 1, sx(31.08), sy(86),
    'l', dx(59), dy(-4.76),
    'l', dx(22.76), dy(-55.08),
    'a', dx(16.36), dy(16.36), 0, 0, 1, dx(30.27), dy(0),
    'l', dx(22.75), dy(55.08),
    'l', dx(59), dy(4.76),
    'a', dx(16.46), dy(16.46), 0, 0, 1, dx(9.37), dy(28.86),
    'Z'
  ];

  return path;
};