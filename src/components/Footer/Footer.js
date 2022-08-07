function Footer (props) {
  return (
    <section className="footer">
      <p className="footer__paragraph">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__line"></div>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2022</p>
        <nav className="footer__navigation">
          <a className="footer__link" href="https://practicum.yandex.ru" target="_blank">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/Aver1" target="_blank">Github</a>
          <a className="footer__link" href="https://vk.com/mehooon" target="_blank">Вконтакте</a>
        </nav>
      </div>
    </section>
  );
}

export default Footer;