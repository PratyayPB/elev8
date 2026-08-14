/**
 * Moves an item up in an array by its ID.
 */
export function moveUp<T extends { id: string }>(arr: T[], id: string): T[] {
  const index = arr.findIndex((item) => item.id === id);
  if (index <= 0) return arr; // Already at top or not found
  const newArr = [...arr];
  const temp = newArr[index];
  newArr[index] = newArr[index - 1];
  newArr[index - 1] = temp;
  return newArr;
}

/**
 * Moves an item down in an array by its ID.
 */
export function moveDown<T extends { id: string }>(arr: T[], id: string): T[] {
  const index = arr.findIndex((item) => item.id === id);
  if (index === -1 || index >= arr.length - 1) return arr; // Already at bottom or not found
  const newArr = [...arr];
  const temp = newArr[index];
  newArr[index] = newArr[index + 1];
  newArr[index + 1] = temp;
  return newArr;
}

/**
 * Generates a stable entry ID with a given prefix.
 */
export function generateEntryId(prefix: string): string {
  const randomStr = Math.random().toString(36).substring(2, 10);
  const timestamp = Date.now().toString(36);
  return `${prefix}_${timestamp}_${randomStr}`;
}
