import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["hexagon"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(232), sy(80.18),
    'v', dy(95.64),
    'a', dx(16), dy(16), 0, 0, 1, dx(-8.32), dy(14),
    'l', dx(-88), dy(48.17),
    'a', dx(15.88), dy(15.88), 0, 0, 1, dx(-15.36), dy(0),
    'l', dx(-88), dy(-48.17),
    'a', dx(16), dy(16), 0, 0, 1, dx(-8.32), dy(-14),
    'V', sy(80.18),
    'a', dx(16), dy(16), 0, 0, 1, dx(8.32), dy(-14),
    'l', dx(88), dy(-48.17),
    'a', dx(15.88), dy(15.88), 0, 0, 1, dx(15.36), dy(0),
    'l', dx(88), dy(48.17),
    'A', dx(16), dy(16), 0, 0, 1, sx(232), sy(80.18),
    'Z'
  ];

  return path;
};