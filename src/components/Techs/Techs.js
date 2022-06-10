import "./Techs.css";
function Techs() {
    return (
        <section className="techs" id="techs">
            <h2 className="techs__title">Технологии</h2>
            <h2 className="techs__subtitle">7 технологий</h2>
            <h4 className="techs__text">
                На курсе веб-разработки мы освоили технологии, которые применили
                в дипломном проекте.
            </h4>
            <ul className="techs__list">
                <li className="techs__list-text">HTML</li>
                <li className="techs__list-text">CSS</li>
                <li className="techs__list-text">JS</li>
                <h4 className="techs__list-text">React</h4>
                <li className="techs__list-text">Git</li>
                <li className="techs__list-text">Express.js</li>
                <li className="techs__list-text">mongoDB</li>
            </ul>
        </section>
    );
}

export default Techs;
