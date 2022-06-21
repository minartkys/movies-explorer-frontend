import React from "react";
import { Switch, Route } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
function MoviesCardList(props) {
    const [moreMovies, setMoreMovies] = React.useState([]);
    const nothingFound = `moviesCardList__span ${
        !props.nothingFound ? "moviesCardList__btn_invisible" : ""
    }`;

    const nothingFoundSaveMovies = `moviesCardList__span ${
        !props.nothingFoundSaveMovies ? "moviesCardList__btn_invisible" : ""
    }`;
    function showMoreMovies() {
        if (document.documentElement.clientWidth > 1200) {
            setMoreMovies(props.movies.slice(0, moreMovies.length + 4));
        } else if (
            document.documentElement.clientWidth > 910 &&
            document.documentElement.clientWidth <= 1200
        ) {
            setMoreMovies(props.movies.slice(0, moreMovies.length + 3));
        } else if (
            document.documentElement.clientWidth <= 910 &&
            document.documentElement.clientWidth > 720
        ) {
            setMoreMovies(props.movies.slice(0, moreMovies.length + 2));
        } else {
            setMoreMovies(props.movies.slice(0, moreMovies.length + 5));
        }
    }

    React.useEffect(() => {
        if (document.documentElement.clientWidth > 1200) {
            setMoreMovies(props.movies.slice(0, 12));
        } else if (document.documentElement.clientWidth > 910) {
            setMoreMovies(props.movies.slice(0, 9));
        } else if (document.documentElement.clientWidth > 720) {
            setMoreMovies(props.movies.slice(0, 6));
        } else setMoreMovies(props.movies.slice(0, 5));
    }, [props.movies]);

    return (
        <Switch>
            <Route path="/movies">
                <section className="moviesCardList">
                    {props.isLoading ? (
                        <Preloader />
                    ) : (
                        <div className="moviesCardList__block">
                            {moreMovies.map((item) => (
                                <MoviesCard
                                    key={item.id || item.movieId}
                                    movie={item}
                                    savedMovies={props.savedMovies}
                                    handleSaveMovie={props.handleSaveMovie}
                                    handleDeleteMovie={props.handleDeleteMovie}
                                />
                            ))}
                        </div>
                    )}

                    {!props.isLoading && (
                        <span className={nothingFound}>Ничего не найдено</span>
                    )}

                    {!props.isLoading && (
                        <button
                            className={
                                moreMovies.length >= props.movies.length
                                    ? "moviesCardList__btn_invisible"
                                    : "moviesCardList__btn"
                            }
                            type="button"
                            onClick={showMoreMovies}
                        >
                            Ещё
                        </button>
                    )}
                </section>
            </Route>
            <Route path="/saved-movies">
                <section className="moviesCardList">
                    {props.isLoading ? (
                        <Preloader />
                    ) : (
                        <>
                            <div className="moviesCardList__block">
                                {!props.isSearch &&
                                    props.filteredSaveMovies.length === 0 &&
                                    props.savedMovies.map((item) => (
                                        <MoviesCard
                                            key={item.id || item.movieId}
                                            movie={item}
                                            savedMovies={props.savedMovies}
                                            handleDeleteMovie={
                                                props.handleDeleteMovie
                                            }
                                        />
                                    ))}
                                {props.filteredSaveMovies.length > 0 &&
                                    props.filteredSaveMovies.map((item) => (
                                        <MoviesCard
                                            key={item.id || item.movieId}
                                            movie={item}
                                            savedMovies={props.savedMovies}
                                            handleDeleteMovie={
                                                props.handleDeleteMovie
                                            }
                                        />
                                    ))}
                            </div>
                            {props.isSearch &&
                                props.filteredSaveMovies.length === 0 &&
                                !props.isLoading && (
                                    <span className={nothingFoundSaveMovies}>
                                        Ничего не найдено
                                    </span>
                                )}
                        </>
                    )}
                </section>
            </Route>
        </Switch>
    );
}

export default MoviesCardList;
