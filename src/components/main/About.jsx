export default function About() {
    return (
        <section className="about section" id="about">
        <div className="about__container container">
          <article className="about__info">
            <h1 className="about__title section__title">
              لورم ایپسوم متن ساختگی<br />
              <span className="span">درباره ما</span>
            </h1>
            <p className="about__description">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              چاپ و با استفاده از طراحان گرافیک است.
            </p>
          </article>
          <article className="svg__img about__image">
            <img src="src/assets/images/example-28.svg" alt="home-img" />
          </article>
        </div>
      </section>
    )
}