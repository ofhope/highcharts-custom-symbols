// Utility for symbol coordinate transforms
export function createTransform(x: number, y: number, w: number, h: number) {
  const scaleX = w / 256;
  const scaleY = h / 256;
  const sx = (coord: number) => x + coord * scaleX;
  const sy = (coord: number) => y + coord * scaleY;
  const dx = (coord: number) => coord * scaleX;
  const dy = (coord: number) => coord * scaleY;
  return { sx, sy, dx, dy };
}
