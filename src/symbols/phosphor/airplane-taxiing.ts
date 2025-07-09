import Highcharts from "highcharts";

// Airplane Taxiing symbol from Phosphor Icons
// Original SVG: <path d="M248,136v24a8,8,0,0,1-8,8H61.07a39.75,39.75,0,0,1-38.31-28.51L8.69,92.6A16,16,0,0,1,24,72h8a8,8,0,0,1,5.65,2.34L59.32,96H81.81l-9-26.94A16,16,0,0,1,88,48h8a8,8,0,0,1,5.66,2.34L147.32,96H208A40,40,0,0,1,248,136Zm-40,48a16,16,0,1,0,16,16A16,16,0,0,0,208,184Zm-96,0a16,16,0,1,0,16,16A16,16,0,0,0,112,184Z"/>
// Original viewBox: 0 0 256 256

Highcharts.SVGRenderer.prototype.symbols["airplane-taxiing"] = function (x: number, y: number, w: number, h: number) {
  // Scale the original path coordinates to fit within the symbol bounds
  // Original SVG coordinates are based on 256x256 viewBox
  const scaleX = w / 256;
  const scaleY = h / 256;
  
  // Helper function to scale coordinates
  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  
  // This SVG contains an airplane in side view, perfect for taxiing representation
  // Breaking down the original path into logical segments:
  
  const path = [
    // Main fuselage and wing structure
    'M', sx(248), sy(136),
    'L', sx(248), sy(160),
    // Curve for rounded corner (a8,8,0,0,1-8,8)
    'C', sx(248), sy(164.42), sx(244.42), sy(168), sx(240), sy(168),
    'L', sx(61.07), sy(168),
    // Complex curve for fuselage nose (a39.75,39.75,0,0,1-38.31-28.51)
    'C', sx(39.19), sy(154.17), sx(20.85), sy(139.49), sx(22.76), sy(139.49),
    'L', sx(8.69), sy(92.6),
    // Curve for nose section (A16,16,0,0,1,24,72)
    'C', sx(8.69), sy(84.84), sx(15.16), sy(72), sx(24), sy(72),
    'L', sx(32), sy(72),
    // Curve for rounded corner (a8,8,0,0,1,5.65,2.34)
    'C', sx(35.16), sy(72), sx(38.1), sy(73.16), sx(37.65), sy(74.34),
    'L', sx(59.32), sy(96),
    'L', sx(81.81), sy(96),
    // Wing strut section (l-9-26.94)
    'L', sx(72.81), sy(69.06),
    // Curve for wing mount (A16,16,0,0,1,88,48)
    'C', sx(72.81), sy(60.31), sx(79.25), sy(48), sx(88), sy(48),
    'L', sx(96), sy(48),
    // Curve for rounded corner (a8,8,0,0,1,5.66,2.34)
    'C', sx(99.16), sy(48), sx(102.1), sy(49.16), sx(101.66), sy(50.34),
    'L', sx(147.32), sy(96),
    'L', sx(208), sy(96),
    // Large curve for main wing (A40,40,0,0,1,248,136)
    'C', sx(230.09), sy(96), sx(248), sy(113.91), sx(248), sy(136),
    'Z',
    
    // Landing gear - rear wheel
    'M', sx(208), sy(184),
    // Circle for wheel (a16,16,0,1,0,16,16)
    'C', sx(208), sy(192.84), sx(215.16), sy(200), sx(224), sy(200),
    'C', sx(232.84), sy(200), sx(240), sy(192.84), sx(240), sy(184),
    'C', sx(240), sy(175.16), sx(232.84), sy(168), sx(224), sy(168),
    'C', sx(215.16), sy(168), sx(208), sy(175.16), sx(208), sy(184),
    'Z',
    
    // Landing gear - front wheel
    'M', sx(112), sy(184),
    // Circle for wheel (a16,16,0,1,0,16,16)
    'C', sx(112), sy(192.84), sx(119.16), sy(200), sx(128), sy(200),
    'C', sx(136.84), sy(200), sx(144), sy(192.84), sx(144), sy(184),
    'C', sx(144), sy(175.16), sx(136.84), sy(168), sx(128), sy(168),
    'C', sx(119.16), sy(168), sx(112), sy(175.16), sx(112), sy(184),
    'Z'
  ];
  
  return path;
};
