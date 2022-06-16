import { Route, Switch, Link } from "react-router-dom";
import React from "react";
import "./Form.css";
import { REG_EMAIL } from "../../utils/constants";

export default function Form(props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailDirty, setEmailDirty] = React.useState(false);
    const [passwordDirty, setPasswordDirty] = React.useState(false);
    const [emailError, setEmailError] = React.useState(
        "Email не может быть пустым"
    );
    const [passwordError, setPasswordError] = React.useState(
        "Пароль не может быть пустым"
    );
    const [name, setName] = React.useState("");
    const [nameDirty, setNameDirty] = React.useState(false);
    const [nameError, setNameError] = React.useState(
        "Имя не может быть пустым"
    );
    const [formRegValid, setFormRegValid] = React.useState(false);
    const [formLoginValid, setFormLoginValid] = React.useState(false);

    React.useEffect(() => {
        if (emailError || passwordError || nameError) {
            setFormRegValid(false);
        } else setFormRegValid(true);
    }, [nameError, emailError, passwordError]);

    React.useEffect(() => {
        if (emailError || passwordError) {
            setFormLoginValid(false);
        } else setFormLoginValid(true);
    }, [nameError, emailError, passwordError]);

    function blurHandler(e) {
        switch (e.target.name) {
            case "email":
                setEmailDirty(true);
                break;
            case "password":
                setPasswordDirty(true);
                break;
            case "name":
                setNameDirty(true);
                break;
            default:
        }
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
    function onChangeEmail(e) {
        setEmail(e.target.value);
        if (!REG_EMAIL.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некорректный email");
            if (e.target.value.length === 0) {
                setEmailError("Поле не может быть пустым");
            }
        } else setEmailError("");
    }
    function onChangePassword(e) {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Некорректный пароль");
            if (e.target.value.length === 0) {
                setPasswordError("Поле не может быть пустым");
            }
        } else setPasswordError("");
    }
    function handleRegister(e) {
        e.preventDefault();
        props.handleRegNewUser({ name, email, password });
    }

    function handleLogin(e) {
        e.preventDefault();
        props.handleLogin({ email, password });
    }

    return (
        <Switch>
            <Route exact path="/signup">
                <h2 className="register__title">Добро пожаловать!</h2>
                <form className="form" onSubmit={handleRegister}>
                    <p className="form__input-name">Имя</p>
                    <input
                        onBlur={blurHandler}
                        onChange={onChangeName}
                        value={name}
                        type="text"
                        name="name"
                        id="name"
                        className={`${
                            nameDirty && nameError
                                ? "form__input form__input-errorColor"
                                : "form__input"
                        }`}
                        autoComplete="off"
                        required
                    />
                    {nameDirty && nameError && (
                        <span className="form__input-error">{nameError}</span>
                    )}
                    <p className="form__input-name">E-mail</p>
                    <input
                        onBlur={blurHandler}
                        onChange={onChangeEmail}
                        value={email}
                        type="text"
                        name="email"
                        id="email"
                        className={`${
                            emailDirty && emailError
                                ? "form__input form__input-errorColor"
                                : "form__input"
                        }`}
                        autoComplete="off"
                        required
                    />
                    {emailDirty && emailError && (
                        <span className="form__input-error">{emailError}</span>
                    )}
                    <p className="form__input-name ">Пароль</p>
                    <input
                        onBlur={blurHandler}
                        onChange={onChangePassword}
                        value={password}
                        type="password"
                        name="password"
                        id="password"
                        className={`${
                            passwordDirty && passwordError
                                ? "form__input form__input-errorColor"
                                : "form__input"
                        }`}
                        autoComplete="off"
                        required
                    />
                    {passwordDirty && passwordError && (
                        <span className="form__input-error">
                            {passwordError}
                        </span>
                    )}
                    <button
                        disabled={!formRegValid}
                        type="submit"
                        className="form__button"
                    >
                        Зарегистрироваться
                    </button>
                    <div className="form__links">
                        <p className="form__text">Уже зарегистрированы?</p>
                        <Link to="/signin" className="form__link">
                            Войти
                        </Link>
                    </div>
                </form>
            </Route>
            <Route exact path="/signin">
                <h2 className="register__title">Рады видеть!</h2>
                <form className="form" onSubmit={handleLogin}>
                    <p className="form__input-name">E-mail</p>
                    <input
                        onBlur={blurHandler}
                        onChange={onChangeEmail}
                        value={email}
                        type="text"
                        name="email"
                        id="email"
                        className={`${
                            emailDirty && emailError
                                ? "form__input form__input-errorColor"
                                : "form__input"
                        }`}
                        autoComplete="off"
                        required
                    />
                    {emailDirty && emailError && (
                        <span className="form__input-error">{emailError}</span>
                    )}
                    <p className="form__input-name ">Пароль</p>
                    <input
                        onBlur={blurHandler}
                        value={password}
                        type="password"
                        name="password"
                        id="password"
                        onChange={onChangePassword}
                        className={`${
                            passwordDirty && passwordError
                                ? "form__input form__input-errorColor"
                                : "form__input"
                        }`}
                        autoComplete="off"
                        required
                    />
                    {passwordDirty && passwordError && (
                        <span className="form__input-error">
                            {passwordError}
                        </span>
                    )}
                    <button
                        disabled={!formLoginValid}
                        type="submit"
                        className="form__button form__button_login"
                    >
                        Войти
                    </button>
                    <div className="form__links">
                        <p className="form__text">Ещё не зарегистрированы?</p>
                        <Link to="/signup" className="form__link">
                            Регистрация
                        </Link>
                    </div>
                </form>
            </Route>
        </Switch>
    );
}
