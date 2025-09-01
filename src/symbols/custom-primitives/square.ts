import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["square"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(48), sy(32),
    'L', sx(208), sy(32),
    'A', dx(16), dy(16), 0, 0, 1, sx(224), sy(48),
    'L', sx(224), sy(208),
    'A', dx(16), dy(16), 0, 0, 1, sx(208), sy(224),
    'L', sx(48), sy(224),
    'A', dx(16), dy(16), 0, 0, 1, sx(32), sy(208),
    'L', sx(32), sy(48),
    'A', dx(16), dy(16), 0, 0, 1, sx(48), sy(32),
    'Z'
  ];

  return path;
};