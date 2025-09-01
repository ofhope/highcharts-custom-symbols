import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["moon"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(235.54), sy(150.21),
    'a', dx(104.84), dy(104.84), 0, 0, 1, dx(-37), dy(52.91),
    'A', dx(104), dy(104), 0, 0, 1, sx(32), sy(120),
    'A', dx(103.09), dy(103.09), 0, 0, 1, sx(52.88), sy(57.48),
    'a', dx(104.84), dy(104.84), 0, 0, 1, dx(52.91), dy(-37),
    'a', dx(8), dy(8), 0, 0, 1, dx(10), dy(10),
    'a', dx(88.08), dy(88.08), 0, 0, 0, dx(109.8), dy(109.8),
    'a', dx(8), dy(8), 0, 0, 1, dx(10), dy(10),
    'Z'
  ];

  return path;
};