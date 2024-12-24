import { useEffect, useState } from "react";
const useDarkMode = () => {
  const darkMode = "darkMode";
  const media = window.matchMedia("(prefers-color-schema: dark)").matches;
  const dark = "dark";
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem(darkMode);
    return savedTheme ? JSON.parse(savedTheme) : media;
  });
  const toggleMode = () => setIsDarkMode((prev: unknown) => !prev);
  useEffect(() => {
    const root = window.document.documentElement.classList;
    localStorage.setItem(darkMode, JSON.stringify(isDarkMode));
    if (isDarkMode) {
      root.add(dark);
    } else {
      root.remove(dark);
    }
  }, [isDarkMode]);
  return { toggleMode, isDarkMode };
};
export default useDarkMode;
