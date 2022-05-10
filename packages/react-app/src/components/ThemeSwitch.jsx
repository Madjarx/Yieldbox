import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";

const DEFAULT_THEME='dark'

// function get_theme(theme) {
//   return theme || DEFAULT_THEME
// }

// function get_isDarkMode(theme) {
//   return 
// }

export default function ThemeSwitcher() {
  // const theme = DEFAULT_THEME;
  const theme = window.localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(!(!theme || theme === DEFAULT_THEME));
  const { switcher, currentTheme, themes } = useThemeSwitcher();

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = isChecked => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  return (
    <div className="main fade-in" style={{ position: "fixed", right: 8, bottom: 8 }}>
      <span style={{ padding: 8 }}>{currentTheme === "light" ? "☀️" : "🌜"}</span>
      {/* <Switch checked={false} onChange={toggleTheme} /> */}
      <Switch checked={isDarkMode} onChange={toggleTheme} />
    </div>
  );
}
