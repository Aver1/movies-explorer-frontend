function AboutProject () {
  return(
    <section className="aboutproject" id="aboutproject">
      <h2 className="aboutproject__header">О проекте</h2>
      <div className="aboutproject__line"></div>
      <div className="aboutproject__container">
        <div className="aboutproject__container-content">
          <h3 className="aboutproject__header-about">Дипломный проект включал 5 этапов</h3>
          <p className="aboutproject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutproject__container-content">
          <h3 className="aboutproject__header-about">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutproject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="aboutproject__sprint">
        <p className="aboutproject__sprint-time">1 неделя</p>
        <p className="aboutproject__sprint-time">4 недели</p>
      </div>
    </section>
  )
}

export default AboutProject;