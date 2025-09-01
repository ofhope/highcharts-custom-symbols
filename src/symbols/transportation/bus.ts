import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["bus"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(248), sy(80),
    'v', dy(24),
    'a', dx(8), dy(8), 0, 0, 1, dx(-16), dy(0),
    'V', sy(80),
    'a', dx(8), dy(8), 0, 0, 1, dx(16), dy(0),
    'Z',
    'M', sx(16), sy(72),
    'a', dx(8), dy(8), 0, 0, 0, dx(-8), dy(8),
    'v', dy(24),
    'a', dx(8), dy(8), 0, 0, 0, dx(16), dy(0),
    'V', sy(80),
    'A', dx(8), dy(8), 0, 0, 0, sx(16), sy(72),
    'Z',
    'm', dx(200), dy(-8),
    'V', sy(208),
    'a', dx(16), dy(16), 0, 0, 1, dx(-16), dy(16),
    'H', sx(184),
    'a', dx(16), dy(16), 0, 0, 1, dx(-16), dy(-16),
    'v', dy(-8),
    'H', sx(88),
    'v', dy(8),
    'a', dx(16), dy(16), 0, 0, 1, dx(-16), dy(16),
    'H', sx(56),
    'a', dx(16), dy(16), 0, 0, 1, dx(-16), dy(-16),
    'V', sy(64),
    'A', dx(32), dy(32), 0, 0, 1, sx(72), sy(32),
    'H', sx(184),
    'A', dx(32), dy(32), 0, 0, 1, sx(216), sy(64),
    'Z',
    'M', sx(104), sy(148),
    'a', dx(12), dy(12), 0, 1, 0, dx(-12), dy(12),
    'A', dx(12), dy(12), 0, 0, 0, sx(104), sy(148),
    'Z',
    'm', dx(72), dy(0),
    'a', dx(12), dy(12), 0, 1, 0, dx(-12), dy(12),
    'A', dx(12), dy(12), 0, 0, 0, sx(176), sy(148),
    'Z',
    'm', dx(24), dy(-76),
    'H', sx(56),
    'v', dy(40),
    'H', sx(200),
    'Z'
  ];

  return path;
};