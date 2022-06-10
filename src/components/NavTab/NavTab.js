import "./NavTab.css";
function NavTab() {
    return (
        <section className="navTab">
            <nav className="navTab__links">
                <a
                    href="#aboutProject"
                    className="navTab__button"
                    alt="О проекте"
                >
                    О проекте
                </a>
                <a href="#techs" className="navTab__button" alt="Технологии">
                    Технологии
                </a>
                <a href="#aboutMe" className="navTab__button" alt="Студент">
                    Студент
                </a>
            </nav>
        </section>
    );
}

export default NavTab;
