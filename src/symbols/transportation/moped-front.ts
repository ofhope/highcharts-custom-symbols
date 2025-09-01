import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["moped-front"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(208), sy(40),
    'H', sx(167.2),
    'a', dx(40), dy(40), 0, 0, 0, dx(-78.4), dy(0),
    'H', sx(48),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(16),
    'H', sx(88.8),
    'a', dx(40), dy(40), 0, 0, 0, dx(12.58), dy(21.82),
    'A', dx(64.08), dy(64.08), 0, 0, 0, sx(64), sy(136),
    'v', dy(64),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(16),
    'H', sx(96),
    'a', dx(32), dy(32), 0, 0, 0, dx(64), dy(0),
    'h', dx(16),
    'a', dx(16), dy(16), 0, 0, 0, dx(16), dy(-16),
    'V', sy(136),
    'a', dx(64.08), dy(64.08), 0, 0, 0, dx(-37.38), dy(-58.18),
    'A', dx(40), dy(40), 0, 0, 0, sx(167.2), sy(56),
    'H', sx(208),
    'a', dx(8), dy(8), 0, 0, 0, dx(0), dy(-16),
    'Z',
    'M', sx(144), sy(216),
    'a', dx(16), dy(16), 0, 0, 1, dx(-32), dy(0),
    'V', sy(168),
    'a', dx(16), dy(16), 0, 0, 1, dx(32), dy(0),
    'Z',
    'M', sx(128), sy(72),
    'a', dx(24), dy(24), 0, 1, 1, dx(24), dy(-24),
    'A', dx(24), dy(24), 0, 0, 1, sx(128), sy(72),
    'Z'
  ];

  return path;
};