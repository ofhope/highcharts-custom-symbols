import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["egg"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(216), sy(152),
    'a', dx(88), dy(88), 0, 0, 1, dx(-176), dy(0),
    'c', dx(0), dy(-30.77), dx(10.7), dy(-64.46), dx(29.34), dy(-92.44),
    'C', sx(87.53), sy(32.29), sx(109.46), sy(16), sx(128), sy(16),
    's', dx(40.47), dy(16.29), dx(58.66), dy(43.56),
    'C', sx(205.3), sy(87.54), sx(216), sy(121.23), sx(216), sy(152),
    'Z'
  ];

  return path;
};