import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["scooter"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(244), sy(172),
    'a', dx(32), dy(32), 0, 1, 1, dx(-49.38), dy(-26.85),
    'l', dx(-9), dy(-26.89),
    'l', dx(-51.46), dy(62.81),
    'A', dx(8), dy(8), 0, 0, 1, sx(128), sy(184),
    'H', sx(73.66),
    'a', dx(32), dy(32), 0, 1, 1, dx(2.08), dy(-16),
    'h', dx(48.47),
    'l', dx(55.46), dy(-67.69),
    'L', sx(162.23), sy(48),
    'H', sx(136),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'h', dx(32),
    'a', dx(8), dy(8), 0, 0, 1, dx(7.59), dy(5.47),
    'L', sx(209.8), sy(140.08),
    'c', dx(0.72), dy(-0.05), dx(1.46), dy(-0.08), dx(2.2), dy(-0.08),
    'A', dx(32), dy(32), 0, 0, 1, sx(244), sy(172),
    'Z'
  ];

  return path;
};