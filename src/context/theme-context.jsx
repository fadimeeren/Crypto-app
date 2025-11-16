import { createContext, useState, useContext, useEffect } from "react";

// Context Kurulumu
export const ThemeContext = createContext();

// Sağlayıcı - HOC
export const ThemeProvider = ({ children }) => {
  // tema state'i
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");

  // temayı değiştirecek fonksiyon
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // tema değişince arayüzü güncelle
  useEffect(() => {
    const root = window.document.documentElement;

    if(isDarkMode) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

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
