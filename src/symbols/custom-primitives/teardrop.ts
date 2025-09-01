import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["teardrop"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(174), sy(47.75),
    'a', dx(254.19), dy(254.19), 0, 0, 0, dx(-41.45), dy(-38.3),
    'a', dx(8), dy(8), 0, 0, 0, dx(-9.18), dy(0),
    'A', dx(254.19), dy(254.19), 0, 0, 0, sx(82), sy(47.75),
    'C', sx(54.51), sy(79.32), sx(40), sy(112.6), sx(40), sy(144),
    'a', dx(88), dy(88), 0, 0, 0, dx(176), dy(0),
    'C', sx(216), sy(112.6), sx(201.49), sy(79.32), sx(174), sy(47.75),
    'Z'
  ];

  return path;
};