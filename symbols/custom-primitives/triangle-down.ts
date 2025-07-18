import Highcharts from "highcharts";

// triangle-down symbol from SVG (preserving original path commands)
// Original SVG: <path d="M80.125,150.794c18.257,-31.695 52.299,-51.151 88.875,-50.792l728.75,0c36.576,-0.359 70.618,19.097 88.875,50.792c17.814,30.49 17.814,68.343 0,98.833l-364.292,632.792c-18.504,31.507 -52.419,50.919 -88.958,50.919c-36.539,0 -70.453,-19.412 -88.958,-50.919l-364.375,-632.792c-17.789,-30.505 -17.757,-68.358 0.083,-98.833Z"/>
// Original viewBox: 0 0 1067 1067

Highcharts.SVGRenderer.prototype.symbols["triangle-down"] = function (x: number, y: number, w: number, h: number) {
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
    'M', sx(80.125), sy(150.794),
    'c', dx(18.257), dy(-31.695), dx(52.299), dy(-51.151), dx(88.875), dy(-50.792),
    'l', dx(728.75), dy(0),
    'c', dx(36.576), dy(-0.359), dx(70.618), dy(19.097), dx(88.875), dy(50.792),
    'c', dx(17.814), dy(30.49), dx(17.814), dy(68.343), dx(0), dy(98.833),
    'l', dx(-364.292), dy(632.792),
    'c', dx(-18.504), dy(31.507), dx(-52.419), dy(50.919), dx(-88.958), dy(50.919),
    'c', dx(-36.539), dy(0), dx(-70.453), dy(-19.412), dx(-88.958), dy(-50.919),
    'l', dx(-364.375), dy(-632.792),
    'c', dx(-17.789), dy(-30.505), dx(-17.757), dy(-68.358), dx(0.083), dy(-98.833),
    'Z'
  ];

  return path;
};