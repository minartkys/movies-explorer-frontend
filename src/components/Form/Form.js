import { Route, Switch, Link } from "react-router-dom";
import "./Form.css";

export default function Form() {
    return (
        <Switch>
            <Route exact path="/signup">
                <h2 className="register__title">Добро пожаловать!</h2>
                <form className="form" novalidate>
                    <p className="form__input-name">Имя</p>
                    <input
                        type="text"
                        name="Name"
                        id="Name"
                        className="form__input"
                        autocomplete="off"
                        required
                    />
                    <span className="form__input-error"></span>
                    <p className="form__input-name">E-mail</p>
                    <input
                        type="text"
                        name="Email"
                        id="email"
                        className="form__input"
                        autocomplete="off"
                        required
                    />
                    <span className="form__input-error"></span>
                    <p className="form__input-name ">Пароль</p>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form__input form__input-error"
                        autocomplete="off"
                        required
                    />
                    <span className="form__input-error">
                        Что-то пошло не так...
                    </span>
                    <button type="submit" className="form__button">
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
                <form className="form" novalidate>
                    <p className="form__input-name">E-mail</p>
                    <input
                        type="text"
                        name="Email"
                        id="email"
                        className="form__input"
                        autocomplete="off"
                        required
                    />
                    <span className="form__input-error"></span>
                    <p className="form__input-name ">Пароль</p>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form__input"
                        autocomplete="off"
                        required
                    />
                    <button type="submit" className="form__button form__button_login">
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
