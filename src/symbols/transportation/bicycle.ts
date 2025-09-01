import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["bicycle"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(54.46), sy(164.71),
    'L', sx(82.33), sy(126.5),
    'a', dx(48), dy(48), 0, 1, 1, dx(-12.92), dy(-9.44),
    'L', sx(41.54), sy(155.29),
    'a', dx(8), dy(8), 0, 1, 0, dx(12.92), dy(9.42),
    'Z',
    'M', sx(208), sy(112),
    'a', dx(47.81), dy(47.81), 0, 0, 0, dx(-16.93), dy(3.09),
    'L', sx(214.91), sy(156),
    'A', dx(8), dy(8), 0, 1, 1, sx(201.09), sy(164),
    'l', dx(-23.83), dy(-40.86),
    'A', dx(48), dy(48), 0, 1, 0, sx(208), sy(112),
    'Z',
    'M', sx(165.93), sy(72),
    'H', sx(192),
    'a', dx(8), dy(8), 0, 0, 1, dx(8), dy(8),
    'a', dx(8), dy(8), 0, 0, 0, dx(16), dy(0),
    'a', dx(24), dy(24), 0, 0, 0, dx(-24), dy(-24),
    'H', sx(152),
    'a', dx(8), dy(8), 0, 0, 0, dx(-6.91), dy(12),
    'l', dx(11.65), dy(20),
    'H', sx(99.26),
    'L', sx(82.91), sy(60),
    'A', dx(8), dy(8), 0, 0, 0, sx(76), sy(56),
    'H', sx(48),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(16),
    'H', sx(71.41),
    'L', sx(85.12), sy(95.51),
    'L', sx(69.41), sy(117.06),
    'a', dx(47.87), dy(47.87), 0, 0, 1, dx(12.92), dy(9.44),
    'l', dx(11.59), dy(-15.9),
    'L', sx(125.09), sy(164),
    'A', dx(8), dy(8), 0, 1, 0, sx(138.91), sy(156),
    'l', dx(-30.32), dy(-52),
    'h', dx(57.48),
    'l', dx(11.19), dy(19.17),
    'a', dx(48.11), dy(48.11), 0, 0, 1, dx(13.81), dy(-8.08),
    'Z'
  ];

  return path;
};