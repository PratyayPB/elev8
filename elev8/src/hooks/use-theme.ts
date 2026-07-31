import { useState } from "react";

export const useTheme = () => {
  const [theme, setThemeState] = useState<"light" | "dark">("light");

  const setTheme = (newTheme: "light" | "dark") => {
    setThemeState(newTheme);
  };

  return { theme, setTheme };
};
