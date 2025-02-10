export default function Footer() {
    const servicesLinks = [
      { href: "#", label: "قیمت ها" },
      { href: "#", label: "تخفیف ها" },
      { href: "#", label: "گزارش باگ" },
      { href: "#", label: "قوانین و مقررات" },
    ];
  
    const companyLinks = [
      { href: "#", label: "مقالات" },
      { href: "#", label: "قرارداد ها" },
      { href: "#", label: "سفارشات" },
    ];
  
    const contactLinks = [
      { href: "#", label: "پشتیبانی" },
      { href: "#", label: "پرسش و پاسخ" },
      { href: "#", label: "صدای مشتری" },
    ];
  
    const socialLinks = [
      { href: "#", iconClass: "bi bi-telegram" },
      { href: "#", iconClass: "bi bi-twitter" },
      { href: "#", iconClass: "bi bi-instagram" },
    ];
  
    const renderLinks = (links) => (
      <ul className="footer__links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="footer__link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    );
  
    return (
      <footer className="footer section">
        <div className="footer__container container">
          <article className="footer__content">
            <a href="#" className="footer__logo">
              Sassy Design
            </a>
            <p className="footer__description">لورم ایپسوم متن ساختگی</p>
          </article>
  
          <article className="footer__content">
            <h3 className="footer__title">خدمات ما</h3>
            {renderLinks(servicesLinks)}
          </article>
  
          <article className="footer__content">
            <h3 className="footer__title">شرکت ما</h3>
            {renderLinks(companyLinks)}
          </article>
  
          <article className="footer__content">
            <h3 className="footer__title">تماس با ما</h3>
            {renderLinks(contactLinks)}
          </article>
  
          <article className="footer__social">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="footer__social-link">
                <i className={link.iconClass}></i>
              </a>
            ))}
          </article>
        </div>
        <p className="footer__copy">کپی رایت محفوظ است &#169;</p>
      </footer>
    );
  }
  