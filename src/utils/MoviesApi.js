import { MOVIES_API_URL } from "../utils/constants";

class MoviesApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    getInitialMovies() {
        return fetch(`${this._baseUrl}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }).then(this._checkResponse);
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
}

const moviesApi = new MoviesApi({
    baseUrl: MOVIES_API_URL,
});

export default moviesApi;
