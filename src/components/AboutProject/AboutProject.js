import "./AboutProject.css";

function AboutProject() {
    return (
        <section className="aboutProject" id="aboutProject">
            <h2 className="aboutProject__title">О проекте</h2>
            <div className="aboutProject-info">
                <div>
                    <h4 className="aboutProject-info__subtitle">
                        Дипломный проект включал 5 этапов
                    </h4>
                    <p className="aboutProject-info__text">
                        Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div>
                    <h4 className="aboutProject-info__subtitle">
                        На выполнение диплома ушло 5 недель
                    </h4>
                    <p className="aboutProject-info__text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые
                        нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <ul className="aboutProject-weeks">
                <li className="aboutProject-weeks__text">1 неделя</li>
                <li className="aboutProject-weeks__text">4 недели</li>
                <li className="aboutProject-weeks__text">Back-end</li>
                <li className="aboutProject-weeks__text">Front-end</li>
            </ul>
        </section>
    );
}

export default AboutProject;
