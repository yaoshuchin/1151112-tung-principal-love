import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // 1. Font Size: 'sm' (小), 'md' (中 - default), 'lg' (大)
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem("site_font_size") || "md";
  });

  // 2. Background Scheme: 'light' (淺色 - default), 'dark' (深色), 'paleBlue' (淡藍)
  const [bgScheme, setBgScheme] = useState(() => {
    return localStorage.getItem("site_bg_scheme") || "light";
  });

  // 3. Style Theme: 'western' (西式 - default), 'chinese' (中式), 'japanese' (日式)
  const [styleTheme, setStyleTheme] = useState(() => {
    return localStorage.getItem("site_style_theme") || "western";
  });

  useEffect(() => {
    localStorage.setItem("site_font_size", fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem("site_bg_scheme", bgScheme);
  }, [bgScheme]);

  useEffect(() => {
    localStorage.setItem("site_style_theme", styleTheme);
  }, [styleTheme]);

  return (
    <ThemeContext.Provider
      value={{
        fontSize,
        setFontSize,
        bgScheme,
        setBgScheme,
        styleTheme,
        setStyleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
