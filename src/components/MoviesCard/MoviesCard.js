import "./MoviesCard.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
function MoviesCard(props) {
    const [isMovieSaved, setIsMovieSaved] = React.useState(false);

    const filmLikeButtonClassName = `moviesCard__like ${
        isMovieSaved ? "moviesCard__like-active" : ""
    }`;

    const setLikes = React.useCallback(() => {
        const isMovieLiked = props.savedMovies.find(
            (i) => i.movieId === props.movie.id
        );
        if (isMovieLiked) {
            setIsMovieSaved(true);
        } else {
            setIsMovieSaved(false);
        }
    }, [props.movie.id, props.savedMovies]);

    React.useEffect(() => {
        setLikes();
    }, [setLikes]);

    function isURL(str) {
        try {
            new URL(str);
            return true;
        } catch {
            return false;
        }
    }
    function handleSaveMovieClick() {
        if (!isMovieSaved) {
            props.handleSaveMovie({
                country: props.movie.country || "no country",
                director: props.movie.director,
                duration: props.movie.duration,
                year: props.movie.year,
                description: props.movie.description,
                image: props.movie.image.url
                    ? `${"https://api.nomoreparties.co"}${
                          props.movie.image.url
                      }`
                    : props.movie,
                trailerLink: isURL(props.movie.trailerLink)
                    ? props.movie.trailerLink
                    : "https://www.youtube.com/",
                movieId: props.movie.id || props.movieId,
                nameRU: props.movie.nameRU || "no nameRU",
                nameEN: props.movie.nameEN || "no nameEN",
                thumbnail: props.movie.image.formats.thumbnail.url
                    ? `${"https://api.nomoreparties.co"}${
                          props.movie.image.formats.thumbnail.url
                      }`
                    : "",
            });
            setIsMovieSaved(true);
        } else {
            const savedMovie = props.savedMovies.find(
                (i) => i.movieId === (props.movie.id || props.movieId)
            );
            props.handleDeleteMovie(savedMovie);
            setIsMovieSaved(false);
        }
    }
    function handleDeleteMovieClick() {
        props.handleDeleteMovie(props.movie);
    }
    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins / 60);
        let minutes = mins % 60;
        return hours + "ч : " + minutes + "мин";
    }

    return (
        <Switch>
            <Route path="/movies">
                <div className="moviesCard">
                    <a
                        className="moviecard__link"
                        href={props.movie.trailerLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={`${"https://api.nomoreparties.co"}${
                                props.movie.image.url
                            }`}
                            className="moviesCard__image"
                            alt={props.movie.nameRU}
                        />
                    </a>
                    <div className="moviesCard__block">
                        <h2 className="moviesCard__title">
                            {props.movie.nameRU}
                        </h2>
                        <button
                            onClick={handleSaveMovieClick}
                            className={filmLikeButtonClassName}
                        ></button>
                    </div>
                    <p className="moviesCard__duration">
                        {`${getTimeFromMins(props.movie.duration)}`}
                    </p>
                </div>
            </Route>
            <Route path="/saved-movies">
                <div className="moviesCard">
                    <a
                        className="moviecard__link"
                        href={props.movie.trailerLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={props.movie.image}
                            className="moviesCard__image"
                            alt={props.movie.nameRU}
                        />
                    </a>
                    <div className="moviesCard__block">
                        <h2 className="moviesCard__title">
                            {props.movie.nameRU}
                        </h2>
                        <button
                            className="moviesCard__delete"
                            onClick={handleDeleteMovieClick}
                        ></button>
                    </div>
                    <p className="moviesCard__duration">{`${getTimeFromMins(
                        props.movie.duration
                    )}`}</p>
                </div>
            </Route>
        </Switch>
    );
}

export default MoviesCard;
