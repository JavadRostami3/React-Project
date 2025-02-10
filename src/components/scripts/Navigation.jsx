import { useEffect } from "react";

export default function Navigation() {
  useEffect(() => {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav__link");

    const handleToggleMenu = () => {
      if (navMenu) {
        navMenu.classList.toggle("show-menu");
      }
    };

    const handleCloseMenu = () => {
      if (navMenu) {
        navMenu.classList.remove("show-menu");
      }
    };

    if (navToggle) {
      navToggle.addEventListener("click", handleToggleMenu);
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", handleCloseMenu);
    });

    return () => {
      if (navToggle) {
        navToggle.removeEventListener("click", handleToggleMenu);
      }
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleCloseMenu);
      });
    };
  }, []);

  return null;
}
