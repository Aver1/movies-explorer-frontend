function Techs (props) {

  return (
    <section className="techs" id="tech">
      <h2 className="techs__header">Технологии</h2>
      <div className="techs__line"></div>
      <h3 className="techs__header-about">7 технологий</h3>
      <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs__tech-container">
        <h4 className="techs__tech">HTML</h4>
        <h4 className="techs__tech">CSS</h4>
        <h4 className="techs__tech">JS</h4>
        <h4 className="techs__tech">React</h4>
        <h4 className="techs__tech">Git</h4>
        <h4 className="techs__tech">Express.js</h4>
        <h4 className="techs__tech">mongoDB</h4>
      </div>
    </section>
  )
}

export default Techs;