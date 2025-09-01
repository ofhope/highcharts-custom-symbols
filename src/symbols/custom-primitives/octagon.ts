import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["octagon"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(227.31), sy(80.23),
    'L', sx(175.77), sy(28.69),
    'A', dx(16.13), dy(16.13), 0, 0, 0, sx(164.45), sy(24),
    'H', sx(91.55),
    'a', dx(16.13), dy(16.13), 0, 0, 0, dx(-11.32), dy(4.69),
    'L', sx(28.69), sy(80.23),
    'A', dx(16.13), dy(16.13), 0, 0, 0, sx(24), sy(91.55),
    'v', dy(72.9),
    'a', dx(16.13), dy(16.13), 0, 0, 0, dx(4.69), dy(11.32),
    'l', dx(51.54), dy(51.54),
    'A', dx(16.13), dy(16.13), 0, 0, 0, sx(91.55), sy(232),
    'h', dx(72.9),
    'a', dx(16.13), dy(16.13), 0, 0, 0, dx(11.32), dy(-4.69),
    'l', dx(51.54), dy(-51.54),
    'A', dx(16.13), dy(16.13), 0, 0, 0, sx(232), sy(164.45),
    'V', sy(91.55),
    'A', dx(16.13), dy(16.13), 0, 0, 0, sx(227.31), sy(80.23),
    'Z'
  ];

  return path;
};