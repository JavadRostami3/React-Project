export default function Application() {
    return(
        <section className="app section" id="app">
        <div className="app__container container">
          <article className=" app__title app__info">
            <h2 className="section__title-center">
              لورم ایپسوم متن ساختگی <br /><span>برنامه ها</span>
            </h2>
            <p className="app__description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
            <div className="app__buttons">
              <a className="button button-flex" href="#">
                App Store
                <i className="app__icon bi bi-apple"></i>
              </a>

              <a className="button button-flex" href="#">
                Google Play
                <i className="app__icon bi bi-google-play"></i>
              </a>
            </div>
          </article>

          <article className="svg__img app__img">
            <img src="src/assets/images/example-20.svg" alt="app-image" />
          </article>
        </div>
      </section>
    )
}