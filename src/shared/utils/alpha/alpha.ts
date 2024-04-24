import { TAlphaFunction } from './assets/alpha.types.ts';

const alpha: TAlphaFunction = (hex, alpha) => {
  hex = hex.replace('#', '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  alpha = Math.min(1, Math.max(0, alpha));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default alpha;
