import "./AboutMe.css";
import Avatar from "../../images/Photo.jpg";

function AboutMe() {
    return (
        <section className="aboutMe" id="aboutMe">
            <h2 className="aboutMe__title">Студент</h2>
            <div className="aboutMe__info">
                <div>
                    <h2 className="aboutMe__subtitle">Артём</h2>
                    <h3 className="aboutMe__aboutMe">
                        Фронтенд-разработчик, 23 года
                    </h3>
                    <h4 className="aboutMe__text">
                        Меня зовут Артём Романович. Я родом из прекрасного
                        города Череповца. Здесь я закончил Амтэк, это
                        общеобразовательных лицей. Затем прошёл обучение по
                        направлению веб-разработчик, потому что это очень
                        интересная и престижная профессия. В обычной жизни я
                        увлекаюсь плаваньем и различными спортивными играми. На
                        данный момент в поисках работы в данной сфере.
                    </h4>
                    <ul className="aboutMe__social">
                        <li className="aboutMe__link">
                            <a
                                target="_blank"
                                rel="noreferrer noopener"
                                className="aboutMe__link"
                                href="https://vk.com/minartkys"
                            >
                                Вконтакте
                            </a>
                        </li>
                        <li className="aboutMe__link">
                            <a
                                target="_blank"
                                rel="noreferrer noopener"
                                className="aboutMe__link"
                                href="https://github.com/minartkys"
                            >
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
                <img src={Avatar} className="aboutMe__photo" alt="Avatar" />
            </div>
        </section>
    );
}

export default AboutMe;
