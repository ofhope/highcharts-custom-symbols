import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["motorcycle"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(216), sy(120),
    'l', dx(-5.82), dy(-15.14),
    'A', dx(55.64), dy(55.64), 0, 0, 1, sx(216), sy(104),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(-16),
    'H', sx(196.88),
    'L', sx(183.47), sy(53.13),
    'A', dx(8), dy(8), 0, 0, 0, sx(176), sy(48),
    'H', sx(144),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(16),
    'h', dx(26.51),
    'l', dx(9.23), dy(24),
    'H', sx(152),
    'c', dx(-18.5), dy(0), dx(-33.5), dy(4.31), dx(-43.37), dy(12.46),
    'a', dx(16), dy(16), 0, 0, 1, dx(-16.76), dy(2.07),
    'c', dx(-10.58), dy(-4.81), dx(-73.29), dy(-30.12), dx(-73.8), dy(-30.26),
    'a', dx(8), dy(8), 0, 0, 0, dx(-5), dy(15.19),
    'S', sx(68.57), sy(109.4), sx(79.6), sy(120.4),
    'A', dx(55.67), dy(55.67), 0, 0, 1, sx(95.43), sy(152),
    'H', sx(79.2),
    'a', dx(40), dy(40), 0, 1, 0, dx(0), dy(16),
    'h', dx(52.12),
    'a', dx(31.91), dy(31.91), 0, 0, 0, dx(30.74), dy(-23.1),
    'a', dx(56), dy(56), 0, 0, 1, dx(26.59), dy(-33.72),
    'l', dx(5.82), dy(15.13),
    'A', dx(40), dy(40), 0, 1, 0, sx(216), sy(120),
    'Z',
    'M', sx(40), sy(168),
    'H', sx(62.62),
    'a', dx(24), dy(24), 0, 1, 1, dx(0), dy(-16),
    'H', sx(40),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(16),
    'Z',
    'm', dx(176), dy(16),
    'a', dx(24), dy(24), 0, 0, 1, dx(-15.58), dy(-42.23),
    'l', dx(8.11), dy(21.1),
    'a', dx(8), dy(8), 0, 1, 0, dx(14.94), dy(-5.74),
    'L', sx(215.35), sy(136),
    'l', dx(0.65), dy(0),
    'a', dx(24), dy(24), 0, 0, 1, dx(0), dy(48),
    'Z'
  ];

  return path;
};