function AboutMe (props) {
  return (
    <section className="aboutme" id="student">
      <h2 className="aboutme__header">Студент</h2>
      <div className="aboutme__line"></div>
      <div className="aboutme__container">
        <div className="aboutme__info-container">
          <h3 className="aboutme__name">Михаил</h3>
          <h4 className="aboutme__job">Фронтенд-разработчик, 20 лет</h4>
          <p className="aboutme__about">Я родился в Люберцах. В 4 месяца родители переехали в город Жуковский, что в Московской области. С юных лет интересовался программированием. Еще в школе начал учить C#, затем C++. Учусь в РОСНОУ на направлении "Математическое обеспечение и администрирование информационных систем". Перепробывав большое количество языков, понял, что больше всего нравится заниматься вебом на JS </p>
          <div className="aboutme__sociallinks">
            <a href="https://vk.com/mehooon" className="aboutme__link" target="_blank">Вконтакте</a>
            <a href="https://github.com/Aver1" className="aboutme__link" target="_blank">Github</a>
          </div>
        </div>
        <div className="aboutme__avatar"></div>
      </div>
    </section>
  );
}

export default AboutMe;