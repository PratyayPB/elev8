// Storage utilities
export const getStorageItem = (key: string): string | null => {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const setStorageItem = (key: string, value: string): void => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(key, value);
    } catch (err) {
      console.error(err);
    }
  }
};
