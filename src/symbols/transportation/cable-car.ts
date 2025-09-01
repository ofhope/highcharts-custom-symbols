import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["cable-car"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(247.87), sy(30.59),
    'a', dx(8), dy(8), 0, 0, 0, dx(-9.28), dy(-6.46),
    'l', dx(-224), dy(40),
    'A', dx(8), dy(8), 0, 0, 0, sx(16), sy(80),
    'a', dx(8.6), dy(8.6), 0, 0, 0, dx(1.42), dy(-0.12),
    'L', sx(120), sy(61.56),
    'V', sy(96),
    'H', sx(64),
    'a', dx(32), dy(32), 0, 0, 0, dx(-32), dy(32),
    'v', dy(64),
    'a', dx(32), dy(32), 0, 0, 0, dx(32), dy(32),
    'H', sx(192),
    'a', dx(32), dy(32), 0, 0, 0, dx(32), dy(-32),
    'V', sy(128),
    'a', dx(32), dy(32), 0, 0, 0, dx(-32), dy(-32),
    'H', sx(136),
    'V', sy(58.7),
    'L', sx(241.4), sy(39.88),
    'A', dx(8), dy(8), 0, 0, 0, sx(247.87), sy(30.59),
    'Z',
    'M', sx(104), sy(160),
    'V', sy(112),
    'h', dx(48),
    'v', dy(48),
    'Z',
    'M', sx(64), sy(112),
    'H', sx(88),
    'v', dy(48),
    'H', sx(48),
    'V', sy(128),
    'A', dx(16), dy(16), 0, 0, 1, sx(64), sy(112),
    'Z',
    'm', dx(144), dy(16),
    'v', dy(32),
    'H', sx(168),
    'V', sy(112),
    'h', dx(24),
    'A', dx(16), dy(16), 0, 0, 1, sx(208), sy(128),
    'Z'
  ];

  return path;
};