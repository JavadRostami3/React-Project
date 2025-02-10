import { useEffect, useState } from 'react';

function ThemeToggle() {
  const darkTheme = "dark-theme";
  const iconTheme = "bi-toggle-on";
  const [theme, setTheme] = useState(localStorage.getItem("selected-theme") || "light");
  const [icon, setIcon] = useState(localStorage.getItem("selected-icon") || iconTheme);

  useEffect(() => {
    document.body.classList[theme === "dark" ? "add" : "remove"](darkTheme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setIcon(newTheme === "dark" ? "bi-toggle-off" : iconTheme);
    localStorage.setItem("selected-theme", newTheme);
  };

  return (
    <button id="theme-button" className={icon} onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;
