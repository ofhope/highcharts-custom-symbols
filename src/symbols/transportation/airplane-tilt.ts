import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["airplane-tilt"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(215.52), sy(197.26),
    'a', dx(8), dy(8), 0, 0, 1, dx(-1.86), dy(8.39),
    'l', dx(-24), dy(24),
    'A', dx(8), dy(8), 0, 0, 1, sx(184), sy(232),
    'a', dx(7.09), dy(7.09), 0, 0, 1, dx(-0.79), dy(0),
    'a', dx(8), dy(8), 0, 0, 1, dx(-5.87), dy(-3.52),
    'l', dx(-44.07), dy(-66.12),
    'L', sx(112), sy(183.59),
    'V', sy(208),
    'a', dx(8), dy(8), 0, 0, 1, dx(-2.34), dy(5.65),
    's', dx(-14), dy(14.06), dx(-15.88), dy(15.88),
    'A', dx(7.91), dy(7.91), 0, 0, 1, sx(91), sy(231.41),
    'a', dx(8), dy(8), 0, 0, 1, dx(-10.41), dy(-4.35),
    'l', dx(-0.06), dy(-0.15),
    'l', dx(-14.7), dy(-36.76),
    'L', sx(29), sy(175.42),
    'a', dx(8), dy(8), 0, 0, 1, dx(-2.69), dy(-13.08),
    'l', dx(16), dy(-16),
    'A', dx(8), dy(8), 0, 0, 1, sx(48), sy(144),
    'H', sx(72.4),
    'l', dx(21.27), dy(-21.27),
    'L', sx(27.56), sy(78.65),
    'a', dx(8), dy(8), 0, 0, 1, dx(-1.22), dy(-12.32),
    'l', dx(24), dy(-24),
    'a', dx(8), dy(8), 0, 0, 1, dx(8.39), dy(-1.86),
    'l', dx(85.94), dy(31.25),
    'L', sx(176.2), sy(40.19),
    'a', dx(28), dy(28), 0, 0, 1, dx(39.6), dy(39.6),
    'l', dx(-31.53), dy(31.53),
    'Z'
  ];

  return path;
};