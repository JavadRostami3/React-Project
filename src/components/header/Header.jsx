import ThemeToggle from "../scripts/ThemeToggle";

const navLinks = [
    { id: "home", label: "صفحه اصلی" },
    { id: "about", label: "درباره ما" },
    { id: "support", label: "پشتیبانی" },
    { id: "services", label: "خدمات" },
  ];
  
  export default function Header() {
    return (
      <header className="header" id="header">
        <nav className="nav container">
          <a className="nav__logo" href="#">Sassy Design</a>
  
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              {navLinks.map((link) => (
                <li className="nav__item" key={link.id}>
                  <a className="nav__link" href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
                <ThemeToggle />
{/*               <i className="change-theme bi bi-toggle-off" id="theme-button"></i> */}
            </ul>
          </div>
  
          
  
          <a className="button button__header" href="#">لورم ایپسوم</a>
        </nav>
      </header>
    );
  }
  
