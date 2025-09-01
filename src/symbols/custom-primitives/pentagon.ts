import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["pentagon"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

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