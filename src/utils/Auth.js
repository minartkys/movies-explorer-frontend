import { AUTH_URL } from "../utils/constants";
class Auth {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    regNewUser(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        }).then((res) => this._checkResponse(res));
    }

    loginUser(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ email, password }),
        }).then((res) => this._checkResponse(res));
    }

    checkJWT() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        }).then((res) => this._checkResponse(res));
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
}

const auth = new Auth({
    baseUrl: AUTH_URL,
});

export default auth;
