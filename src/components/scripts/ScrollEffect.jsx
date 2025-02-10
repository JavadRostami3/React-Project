import { useEffect } from 'react';

function ScrollEffects() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollUp = document.getElementById("scroll-up");
      const header = document.getElementById("header");

      if (header) {
        if (scrollY >= 10) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
      }
      
      if (scrollUp) {
        if (scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}

export default ScrollEffects;
