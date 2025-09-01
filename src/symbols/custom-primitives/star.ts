import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["star"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

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