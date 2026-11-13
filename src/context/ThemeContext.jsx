import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // 1. 字體大小標籤: 'lg' (大), 'md' (中 - default), 'sm' (小)
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem("site_font_size") || "md";
  });

  // 2. 背景標籤: 'light' (淺 - default), 'dark' (深), 'blue' (藍), 'green' (綠)
  const [bgScheme, setBgScheme] = useState(() => {
    const saved = localStorage.getItem("site_bg_scheme");
    if (saved === "paleBlue") return "blue";
    return saved || "light";
  });

  // 3. 風格布景標籤: 'western' (西式 - default), 'chinese' (中式), 'japanese' (日式)
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
