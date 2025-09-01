import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["diamond"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(240), sy(128),
    'a', dx(15.85), dy(15.85), 0, 0, 1, dx(-4.67), dy(11.28),
    'l', dx(-96.05), dy(96.06),
    'a', dx(16), dy(16), 0, 0, 1, dx(-22.56), dy(0),
    'h', dx(0),
    'l', dx(-96), dy(-96.06),
    'a', dx(16), dy(16), 0, 0, 1, dx(0), dy(-22.56),
    'l', dx(96.05), dy(-96.06),
    'a', dx(16), dy(16), 0, 0, 1, dx(22.56), dy(0),
    'l', dx(96.05), dy(96.06),
    'A', dx(15.85), dy(15.85), 0, 0, 1, sx(240), sy(128),
    'Z'
  ];

  return path;
};