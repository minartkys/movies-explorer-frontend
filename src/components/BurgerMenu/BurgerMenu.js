import "./BurgerMenu.css";
import React from "react";
import { Link } from "react-router-dom";
import burgerIcon from "../../images/burrger__icon.svg";
import burgerClose from "../../images/burger__close.svg";
import Account from "../../images/profileAvatar.svg";
function BurgerMenu() {
    const [isOpenHamburger, setisOpenHamburger] = React.useState(false);

    const burgerMenuOpenClassName = `burgerMenu_open ${
        isOpenHamburger ? "burgerMenu_open-active" : ""
    }`;

    function handleBurgerClick() {
        if (!isOpenHamburger) {
            setisOpenHamburger(true);
        } else setisOpenHamburger(false);
    }

    return (
        <>
            <section className="burgerMenu">
                <button className="burgerMenu__btn" onClick={handleBurgerClick}>
                    <img src={burgerIcon} alt="Кнопка бургер" />
                </button>
            </section>

            <section className={burgerMenuOpenClassName}>
                <div className="burgerMenu__overlay"></div>
                <div className="burgerMenu__container">
                    <button
                        className="burgerMenu__btn-close"
                        onClick={handleBurgerClick}
                    >
                        <img src={burgerClose} alt="Кнопка бургер" />
                    </button>
                    <div className="burgerMenu__links">
                        <Link to="/" className="burgerMenu__link">
                            Главная
                        </Link>
                        <Link to="/movies" className="burgerMenu__link">
                            Фильмы
                        </Link>
                        <Link to="/saved-movies" className="burgerMenu__link">
                            Сохранённые фильмы
                        </Link>
                    </div>
                    <button className="burgerMenu__btn-acc">
                        <img src={Account} alt="Кнопка бургер" />
                    </button>
                </div>
            </section>
        </>
    );
}

export default BurgerMenu;
