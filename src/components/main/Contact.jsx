export default function Contact() {
    return(
        <section className="contact section" id="contact">
        <div className="contact__container container">
          <article>
            <h2 className="contact__title section__title-center">تماس با ما</h2>
            <p className="contact__description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </article>

          <article>
            <ul className="contact__info">
              <li className="contact__address">
                شماره تماس:
                <span className="contact__information">2882573- 937- 98+</span>
              </li>

              <li className="contact__address">
                ایمیل:
                <span className="contact__information">Rostamii1378@gmail.com</span>
              </li>

              <li className="contact__address">
                آدرس:
                <span className="contact__information">ساری مازندران</span>
              </li>
            </ul>
          </article>

          <article>
            <div className="contact__btn">
              <a className="button" href="#">تماس با ما</a>
            </div>
          </article>
        </div>
      </section>
    )
    
}