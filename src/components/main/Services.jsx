const servicesData = [
    {
      title: "لورم ایپسوم",
      icon: "bi-browser-chrome",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      link: "#",
    },
    {
      title: "لورم ایپسوم",
      icon: "bi-browser-edge",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      link: "#",
    },
    {
      title: "لورم ایپسوم",
      icon: "bi-browser-firefox",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      link: "#",
    },
  ];
  
  export default function Services() {
    return (
      <section className="services" id="services">
        <h2 className="section__title-center">لورم ایپسوم متن ساختگی</h2>
        <div className="services_container container">
          {servicesData.map((service, index) => (
            <article className="services__info" key={index}>
              <h3 className="services__title">{service.title}</h3>
              <i className={`services__icon ${service.icon}`}></i>
              <p className="services__description">{service.description}</p>
              <a href={service.link} className="button button-link">مشاهده بیشتر</a>
            </article>
          ))}
        </div>
      </section>
    );
  }
  