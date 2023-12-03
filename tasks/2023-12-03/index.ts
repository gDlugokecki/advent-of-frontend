export type Lokalizacja = {
  x: number;
  y: number;
  z: number;
  czas: number;
};

export type MapaCzasoprzestrzenna = (
  x: number,
  y: number,
  z: number,
  czas: number
) => number;

export function znajdzWorek(
  lokalizacje: Lokalizacja[],
  mapa: MapaCzasoprzestrzenna
): Lokalizacja | null {
  const sums = lokalizacje.map(({ x, y, z, czas }) => mapa(x, y, z, czas));
  if (sums.length) {
    const maxSum = Math.max(...sums);
    const index = sums.indexOf(maxSum);
    if (maxSum) return lokalizacje[index];
  }

  return null;
}
