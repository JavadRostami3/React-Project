import { useEffect, useState } from 'react';

function ThemeToggle() {
  const darkTheme = "dark-theme";
  const [theme, setTheme] = useState(localStorage.getItem("selected-theme") || "light");
  const [iconTheme, setIconTheme] = useState(theme === "dark" ? "bi-toggle-on" : "bi-toggle-off");

  useEffect(() => {
    document.body.classList[theme === "dark" ? "add" : "remove"](darkTheme);
    setIconTheme(theme === "dark" ? "bi-toggle-on" : "bi-toggle-off");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("selected-theme", newTheme);
  };

  return (
    <i
      id="theme-button"
      className={`change-theme change-theme bi ${iconTheme}`}
      onClick={toggleTheme}
    ></i>
  );
}

export default ThemeToggle;
