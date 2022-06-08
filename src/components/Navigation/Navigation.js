import "./Navigation.css";
import React from "react";
import { Link } from "react-router-dom";
import Account from "../../images/profileAvatar.svg";
export default function Navigation({ isLoggedIn }) {
    return (
        <div className="navigation">
            {!isLoggedIn ? (
                <>
                    <Link to="/signup" className="button__reg">
                        Регистрация
                    </Link>
                    <Link to="/signin" className="button__login">
                        Войти
                    </Link>
                </>
            ) : (
                <>
                    <div className="navigation__menu">
                        <Link
                            to="/movies"
                            className="navigation__link"
                            alt="фильмы"
                        >
                            Фильмы
                        </Link>

                        <Link
                            className="navigation__link"
                            to="/saved-movies"
                            alt="Сохранённые фильмы"
                        >
                            Сохранённые фильмы
                        </Link>
                    </div>
                    <Link to="/profile">
                        <button className="button__account">
                            <img src={Account} alt="Фото Аккаунт" />
                        </button>
                    </Link>
                </>
            )}
        </div>
    );
}
