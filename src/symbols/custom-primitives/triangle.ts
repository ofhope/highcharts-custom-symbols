import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["triangle"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

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