import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import "./Profile.css";

function Profile() {
    return (
        <>
            <Header>
                <Navigation />
            </Header>
            <section className="profile">
                <h2 className="profile__title">Привет, Артём!</h2>
                <form className="profile__form">
                    <div className="profile__block">
                        <h2 className="profile__block-title">Имя</h2>
                        <input className="profile__block-input" value="Артём" />
                    </div>
                    <div className="profile__block">
                        <h2 className="profile__block-title">E-mail</h2>
                        <input
                            className="profile__block-input"
                            value="pochta@yandex.ru"
                        />
                    </div>
                    <button className="profile__edit-bth">Редактировать</button>
                    <button className="profile__close-btn">
                        Выйти из аккаунта
                    </button>
                </form>
            </section>
        </>
    );
}

export default Profile;
