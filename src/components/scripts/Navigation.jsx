import { useEffect } from 'react';

export default function Navigation() {
  useEffect(() => {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav__link");

    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    });

    return () => {
      if (navToggle) navToggle.removeEventListener("click", () => {});
      navLinks.forEach(link => link.removeEventListener("click", () => {}));
    };
  }, []);

  return null;
}

