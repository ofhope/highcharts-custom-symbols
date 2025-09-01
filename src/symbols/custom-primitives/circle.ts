import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["circle"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'M', sx(24), sy(128),
    'A', dx(104), dy(104), 0, 1, 0, sx(232), sy(128),
    'A', dx(104), dy(104), 0, 1, 0, sx(24), sy(128),
    'Z'
  ];

  return path;
};