import "./Portfolio.css";
import linkIcon from "../../images/link-icon.svg";
function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__links">
                <h2 className="portfolio__linkName">Статичный сайт</h2>
                <a
                    className="portfolio__link"
                    href="https://github.com/minartkys/first-project"
                >
                    <img
                        src={linkIcon}
                        className="portfolio__link-icon"
                        alt="link-icon"
                    />
                </a>
            </div>
            <div className="portfolio__links">
                <h2 className="portfolio__linkName">Адаптивный сайт</h2>
                <a
                    className="portfolio__link"
                    href="https://minartkys.github.io/russian-travel/index.html"
                >
                    <img
                        src={linkIcon}
                        className="portfolio__link-icon"
                        alt="link-icon"
                    />
                </a>
            </div>
            <div className="portfolio__links">
                <h2 className="portfolio__linkName">
                    Одностраничное приложение
                </h2>
                <a
                    className="portfolio__link"
                    href="https://github.com/minartkys/mesto"
                >
                    <img
                        src={linkIcon}
                        className="portfolio__link-icon"
                        alt="link-icon"
                    />
                </a>
            </div>
        </section>
    );
}

export default Portfolio;
