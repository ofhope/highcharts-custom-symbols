import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["van"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(254.07), sy(106.79),
    'L', sx(208.53), sy(53.73),
    'A', dx(16), dy(16), 0, 0, 0, sx(196.26), sy(48),
    'H', sx(32),
    'A', dx(16), dy(16), 0, 0, 0, sx(16), sy(64),
    'V', sy(176),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(16),
    'H', sx(49),
    'a', dx(32), dy(32), 0, 0, 0, dx(62), dy(0),
    'h', dx(50),
    'a', dx(32), dy(32), 0, 0, 0, dx(62), dy(0),
    'h', dx(17),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(-16),
    'V', sy(112),
    'A', dx(8), dy(8), 0, 0, 0, sx(254.07), sy(106.79),
    'Z',
    'M', sx(32), sy(104),
    'V', sy(64),
    'H', sx(88),
    'v', dy(40),
    'Z',
    'm', dx(48), dy(96),
    'a', dx(16), dy(16), 0, 1, 1, dx(16), dy(-16),
    'A', dx(16), dy(16), 0, 0, 1, sx(80), sy(200),
    'Z',
    'm', dx(80), dy(-96),
    'H', sx(104),
    'V', sy(64),
    'h', dx(56),
    'Z',
    'm', dx(32), dy(96),
    'a', dx(16), dy(16), 0, 1, 1, dx(16), dy(-16),
    'A', dx(16), dy(16), 0, 0, 1, sx(192), sy(200),
    'Z',
    'm', dx(-16), dy(-96),
    'V', sy(64),
    'h', dx(20.26),
    'l', dx(34.33), dy(40),
    'Z'
  ];

  return path;
};