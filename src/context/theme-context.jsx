import { createContext, useState, useContext } from "react";

// Context Kurulumu
export const ThemeContext = createContext();

// Sağlayıcı - HOC
export const ThemeProvider = ({ children }) => {
  // tema state'i
  const [isDarkMode, setIsDarkMode] = useState(true);

  // temayı değiştirecek fonksiyon
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  return <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
    {children}
    </ ThemeContext.Provider>
};

// Custom Hook
export const useTheme = () => {
    const context = useContext(ThemeContext);

    if(context === undefined) {
        throw new Error ("Provider ile App'i Sarmala")
    }

    return context;
}
