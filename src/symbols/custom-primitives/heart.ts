import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["heart"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(240), sy(102),
    'c', dx(0), dy(70), dx(-103.79), dy(126.66), dx(-108.21), dy(129),
    'a', dx(8), dy(8), 0, 0, 1, dx(-7.58), dy(0),
    'C', sx(119.79), sy(228.66), sx(16), sy(172), sx(16), sy(102),
    'A', dx(62.07), dy(62.07), 0, 0, 1, sx(78), sy(40),
    'c', dx(20.65), dy(0), dx(38.73), dy(8.88), dx(50), dy(23.89),
    'C', sx(139.27), sy(48.88), sx(157.35), sy(40), sx(178), sy(40),
    'A', dx(62.07), dy(62.07), 0, 0, 1, sx(240), sy(102),
    'Z'
  ];

  return path;
};