// Date utilities
export const formatDate = (date: Date | string): string =>
  new Date(date).toLocaleDateString();
