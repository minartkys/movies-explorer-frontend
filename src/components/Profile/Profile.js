import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import "./Profile.css";
import { REG_EMAIL } from "../../utils/constants";
function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState("");
    const [nameDirty, setNameDirty] = React.useState(false);
    const [nameError, setNameError] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [emailDirty, setEmailDirty] = React.useState(false);
    const [emailError, setEmailError] = React.useState("");
    const [formValid, setFormValid] = React.useState(false);

    React.useEffect(() => {
        if (emailError || nameError) {
            setFormValid(false);
        } else setFormValid(true);
    }, [nameError, emailError]);

    function handleSubmit(e) {
        e.preventDefault();
        props.handleUpdateUser({ name, email });
    }

    function blurHandler(e) {
        switch (e.target.name) {
            case "email":
                setEmailDirty(true);
                break;
            case "name":
                setNameDirty(true);
                break;
            default:
        }
    }

    function onChangeEmail(e) {
        setEmail(e.target.value);
        if (!REG_EMAIL.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некорректный email");
            if (e.target.value.length === 0) {
                setEmailError("Поле не может быть пустым");
            }
        } else setEmailError("");
    }

    function onChangeName(e) {
        setName(e.target.value);
        if (e.target.value.length < 2) {
            setNameError("Некорректное имя");
            if (e.target.value.length === 0) {
                setNameError("Поле не может быть пустым");
            }
        } else setNameError("");
    }

    return (
        <>
            <Header>
                <Navigation />
            </Header>
            <section className="profile">
                <h2 className="profile__title">Привет, {currentUser.name}!</h2>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <div className="profile__block">
                        <h2 className="profile__block-title">Имя</h2>
                        {nameDirty && nameError && (
                            <span className="profile__input-error">
                                {nameError}
                            </span>
                        )}
                        <input
                            onBlur={blurHandler}
                            onChange={onChangeName}
                            id="name"
                            name="name"
                            className="profile__block-input"
                            defaultValue={currentUser.name}
                        />
                    </div>
                    <div className="profile__block">
                        <h2 className="profile__block-title">E-mail</h2>
                        {emailDirty && emailError && (
                            <span className="profile__input-error">
                                {emailError}
                            </span>
                        )}
                        <input
                            onBlur={blurHandler}
                            id="email"
                            name="email"
                            onChange={onChangeEmail}
                            className="profile__block-input"
                            defaultValue={currentUser.email}
                        />
                    </div>
                    {props.errorProfileChange && (
                        <span className="profile__input-error">
                            При обновлении профиля произошла ошибка.
                        </span>
                    )}
                    <button disabled={!formValid} className="profile__edit-bth">
                        Редактировать
                    </button>
                    <button
                        className="profile__close-btn"
                        onClick={props.logoutProfile}
                    >
                        Выйти из аккаунта
                    </button>
                </form>
            </section>
        </>
    );
}

export default Profile;
