export default function Home() {
    return (
      <section className="home section" id="home">
        <div className="home__container container">
          <article className="svg__img home__image">
            <img src="src/assets/images/example-2.svg" alt="تصویر خانه" loading="lazy" />
          </article>
  
          <article className="home__info">
            <h1 className="home__title">
              لورم ایپسوم متن ساختگی<br />
              <span className="span">لورم ایپسوم</span>
            </h1>
            <p className="home__description">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
  
            <a href="#" className="button">لورم ایپسوم</a>
          </article>
        </div>
      </section>
    );
  }
  