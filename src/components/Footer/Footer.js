import "./Footer.css";
function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className="footer__info">
                <p className="footer__copyright">&copy; 2022</p>
                <ul className="footer__links">
                    <li
                        className="footer__link"
                        href="https://practicum.yandex.ru/"
                    >
                        Яндекс.Практикум
                    </li>

                    <li
                        className="footer__link"
                        href="https://github.com/minartkys"
                    >
                        Github
                    </li>

                    <li className="footer__link" href="https://vk.com/minartkys">
                        Вконтакте
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
