import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["sailboat"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(160), sy(140),
    'V', sy(72.85),
    'a', dx(4), dy(4), 0, 0, 1, dx(7), dy(-2.69),
    'l', dx(55), dy(60.46),
    'a', dx(8), dy(8), 0, 0, 1, dx(0.43), dy(10.26),
    'a', dx(8.24), dy(8.24), 0, 0, 1, dx(-6.58), dy(3.12),
    'H', sx(164),
    'A', dx(4), dy(4), 0, 0, 1, sx(160), sy(140),
    'Z',
    'm', dx(87.21), dy(32.53),
    'A', dx(8), dy(8), 0, 0, 0, sx(240), sy(168),
    'H', sx(144),
    'V', sy(8),
    'a', dx(8), dy(8), 0, 0, 0, dx(-14.21), dy(-5),
    'l', dx(-104), dy(128),
    'A', dx(8), dy(8), 0, 0, 0, sx(32), sy(144),
    'h', dx(96),
    'v', dy(24),
    'H', sx(16),
    'a', dx(8), dy(8), 0, 0, 0, dx(-6.25), dy(13),
    'l', dx(29.6), dy(37),
    'a', dx(15.93), dy(15.93), 0, 0, 0, dx(12.49), dy(6),
    'H', sx(204.16),
    'a', dx(15.93), dy(15.93), 0, 0, 0, dx(12.49), dy(-6),
    'l', dx(29.6), dy(-37),
    'A', dx(8), dy(8), 0, 0, 0, sx(247.21), sy(172.53),
    'Z'
  ];

  return path;
};