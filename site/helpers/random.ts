/*
 * Randomly order an array
 */
export function random<Type>(array: Type[]): Type[] {
  return array
    .map((el) => ({ el, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ el }) => el);
}
