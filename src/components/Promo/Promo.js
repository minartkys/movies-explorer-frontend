import "./Promo.css";
import PromoLogo from "../../images/landing-logo.svg";

function Promo() {
    return (
        <section className="promo">
            <h1 className="promo__title">
                Учебный проект студента факультета Веб-разработки.
            </h1>
            <img className="promo__logo" src={PromoLogo} alt="лого" />
        </section>
    );
}

export default Promo;
