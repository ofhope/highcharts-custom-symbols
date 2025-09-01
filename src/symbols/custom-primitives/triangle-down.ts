import Highcharts from "highcharts";

Highcharts.SVGRenderer.prototype.symbols["triangle-down"] = function (x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;

  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;

  const path = [
    'm', dx(236.78), dy(211.81),
    'a', dx(24.34), dy(24.34), 0, 0, 1, dx(-21.33), dy(12.19),
    'l', dx(-174.9), dy(0),
    'a', dx(24.34), dy(24.34), 0, 0, 1, dx(-21.33), dy(-12.19),
    'a', dx(23.51), dy(23.51), 0, 0, 1, dx(0), dy(-23.72),
    'l', dx(87.43), dy(-151.87),
    'a', dx(24.76), dy(24.76), 0, 0, 1, dx(42.7), dy(0),
    'l', dx(87.45), dy(151.87),
    'a', dx(23.51), dy(23.51), 0, 0, 1, dx(-0.02), dy(23.72),
    'Z'
  ];

  return path;
};