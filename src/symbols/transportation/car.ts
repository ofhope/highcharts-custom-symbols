import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["car"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(240), sy(104),
    'H', sx(229.2),
    'L', sx(201.42), sy(41.5),
    'A', dx(16), dy(16), 0, 0, 0, sx(186.8), sy(32),
    'H', sx(69.2),
    'a', dx(16), dy(16), 0, 0, 0, dx(-14.62), dy(9.5),
    'L', sx(26.8), sy(104),
    'H', sx(16),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(16),
    'h', dx(8),
    'v', dy(80),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(16),
    'H', sx(64),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(-16),
    'v', dy(-8),
    'h', dx(96),
    'v', dy(8),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(16),
    'h', dx(24),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(-16),
    'V', sy(120),
    'h', dx(8),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(-16),
    'Z',
    'M', sx(80), sy(152),
    'H', sx(56),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'H', sx(80),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'Z',
    'm', dx(120), dy(0),
    'H', sx(176),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(-16),
    'h', dx(24),
    'a', dx(8), dy(8), 0, 0, 1, dx(0), dy(16),
    'Z',
    'M', sx(44.31), sy(104),
    'L', sx(69.2), sy(48),
    'H', sx(186.8),
    'l', dx(24.89), dy(56),
    'Z'
  ];

  return path;
};