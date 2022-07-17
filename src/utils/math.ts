export const scale = (
  number: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
