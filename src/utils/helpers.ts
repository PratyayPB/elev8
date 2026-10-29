// General helper utilities
export const truncate = (str: string, length: number): string =>
  str.length > length ? str.slice(0, length) + "..." : str;
