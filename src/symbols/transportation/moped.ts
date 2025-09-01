import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["moped"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(216), sy(128),
    'L', sx(175.49), sy(37.19),
    'A', dx(8), dy(8), 0, 0, 0, sx(168), sy(32),
    'H', sx(136),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(16),
    'h', dx(26.46),
    'l', dx(32.3), dy(86.13),
    'a', dx(40.13), dy(40.13), 0, 0, 0, dx(-18), dy(25.87),
    'H', sx(136.54),
    'l', dx(-25), dy(-66.81),
    'A', dx(8), dy(8), 0, 0, 0, sx(104), sy(88),
    'H', sx(24),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(16),
    'h', dx(8),
    'v', dy(13.39),
    'A', dx(56.12), dy(56.12), 0, 0, 0, sx(0), sy(168),
    'a', dx(8), dy(8), 0, 0, 0, dx(8), dy(8),
    'h', dx(8.8),
    'a', dx(40), dy(40), 0, 0, 0, dx(78.4), dy(0),
    'h', dx(81.6),
    'A', dx(40), dy(40), 0, 1, 0, sx(216), sy(128),
    'Z',
    'M', sx(56), sy(192),
    'a', dx(24), dy(24), 0, 0, 1, dx(-22.62), dy(-16),
    'H', sx(78.62),
    'A', dx(24), dy(24), 0, 0, 1, sx(56), sy(192),
    'Z',
    'm', dx(160), dy(0),
    'a', dx(24), dy(24), 0, 0, 1, dx(-15.43), dy(-42.36),
    'l', dx(7.94), dy(21.17),
    'a', dx(8), dy(8), 0, 0, 0, dx(15), dy(-5.62),
    'L', sx(215.55), sy(144),
    'H', sx(216),
    'a', dx(24), dy(24), 0, 0, 1, dx(0), dy(48),
    'Z'
  ];

  return path;
};