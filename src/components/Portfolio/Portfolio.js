function Portfolio (props) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <a href="https://aver1.github.io/how-to-learn/" className="portfolio__link" target="_blank">Статичный сайт</a>
      <div className="portfolio__line"></div>
      <a href="https://aver1.github.io/russian-travel/index.html" className="portfolio__link" target="_blank">Адаптивный сайт</a>
      <div className="portfolio__line"></div>
      <a href="https://aver.nomoreparties.sbs/" className="portfolio__link" target="_blank">Одностраничное приложение</a>
    </section>
  );
}

export default Portfolio;