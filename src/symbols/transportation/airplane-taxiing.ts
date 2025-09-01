import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["airplane-taxiing"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(248), sy(136),
    'v', dy(24),
    'a', dx(8), dy(8), 0, 0, 1, dx(-8), dy(8),
    'H', sx(61.07),
    'a', dx(39.75), dy(39.75), 0, 0, 1, dx(-38.31), dy(-28.51),
    'L', sx(8.69), sy(92.6),
    'A', dx(16), dy(16), 0, 0, 1, sx(24), sy(72),
    'h', dx(8),
    'a', dx(8), dy(8), 0, 0, 1, dx(5.65), dy(2.34),
    'L', sx(59.32), sy(96),
    'H', sx(81.81),
    'l', dx(-9), dy(-26.94),
    'A', dx(16), dy(16), 0, 0, 1, sx(88), sy(48),
    'h', dx(8),
    'a', dx(8), dy(8), 0, 0, 1, dx(5.66), dy(2.34),
    'L', sx(147.32), sy(96),
    'H', sx(208),
    'A', dx(40), dy(40), 0, 0, 1, sx(248), sy(136),
    'Z',
    'm', dx(-40), dy(48),
    'a', dx(16), dy(16), 0, 1, 0, dx(16), dy(16),
    'A', dx(16), dy(16), 0, 0, 0, sx(208), sy(184),
    'Z',
    'm', dx(-96), dy(0),
    'a', dx(16), dy(16), 0, 1, 0, dx(16), dy(16),
    'A', dx(16), dy(16), 0, 0, 0, sx(112), sy(184),
    'Z'
  ];

  return path;
};