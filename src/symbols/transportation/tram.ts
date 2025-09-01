import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["tram"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(184), sy(48),
    'H', sx(136),
    'V', sy(24),
    'h', dx(32),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(-16),
    'H', sx(88),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(16),
    'h', dx(32),
    'V', sy(48),
    'H', sx(72),
    'A', dx(32), dy(32), 0, 0, 0, sx(40), sy(80),
    'V', sy(184),
    'a', dx(32), dy(32), 0, 0, 0, dx(32), dy(32),
    'h', dx(8),
    'L', sx(65.6), sy(235.2),
    'a', dx(8), dy(8), 0, 1, 0, dx(12.8), dy(9.6),
    'L', sx(100), sy(216),
    'h', dx(56),
    'l', dx(21.6), dy(28.8),
    'a', dx(8), dy(8), 0, 1, 0, dx(12.8), dy(-9.6),
    'L', sx(176), sy(216),
    'h', dx(8),
    'a', dx(32), dy(32), 0, 0, 0, dx(32), dy(-32),
    'V', sy(80),
    'A', dx(32), dy(32), 0, 0, 0, sx(184), sy(48),
    'Z',
    'm', dx(0), dy(152),
    'H', sx(72),
    'a', dx(16), dy(16), 0, 0, 1, dx(-16), dy(-16),
    'V', sy(128),
    'H', sx(200),
    'v', dy(56),
    'A', dx(16), dy(16), 0, 0, 1, sx(184), sy(200),
    'Z',
    'M', sx(96), sy(172),
    'a', dx(12), dy(12), 0, 1, 1, dx(-12), dy(-12),
    'A', dx(12), dy(12), 0, 0, 1, sx(96), sy(172),
    'Z',
    'm', dx(88), dy(0),
    'a', dx(12), dy(12), 0, 1, 1, dx(-12), dy(-12),
    'A', dx(12), dy(12), 0, 0, 1, sx(184), sy(172),
    'Z'
  ];

  return path;
};