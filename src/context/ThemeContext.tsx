import useDarkMode from "@/hooks/useDarkMode";
import { createContext, PropsWithChildren, useContext } from "react";
type ContextType = {
  toggleMode: () => void;
  isDarkMode: boolean | string;
};
const ThemeContext = createContext<ContextType | null>(null);
export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { isDarkMode, toggleMode } = useDarkMode();
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
