import React from "react";
import { Switch, Route } from "react-router-dom";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
    const [movie, setMovie] = React.useState(
        JSON.parse(localStorage.getItem("movieSearchText")) || ""
    );
    const [savedMovie, setSaveMovie] = React.useState("");

    function handleSearchMovie(e) {
        setMovie(e.target.value);
    }
    function handleSearchMovieSaved(e) {
        setSaveMovie(e.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        localStorage.setItem("movieSearchText", JSON.stringify(movie));
        props.showPreloader();
        props.handleSearch(movie);
        props.checkMoviesFound();
    }

    function handleSaveMovieSubmit(evt) {
        evt.preventDefault();
        props.showPreloader();
        props.setIsSearch(true);
        props.handleSearchSavedMovie(savedMovie);
        props.checkMoviesFilteredSaveFound();
    }

    return (
        <Switch>
            <Route path="/movies">
                <section className="searchForm">
                    <form
                        className="searchForm__container"
                        onSubmit={handleSubmit}
                    >
                        <input
                            id="searchForm"
                            name="searchForm"
                            className="searchForm__input"
                            placeholder="Фильм"
                            type="text"
                            required
                            onChange={handleSearchMovie}
                            value={movie}
                        />
                        <button
                            type="submit"
                            className="searchForm__button-search"
                        >
                            Поиск
                        </button>
                    </form>
                    <div className="searchForm__filter">
                        <FilterCheckbox
                            isShortMovie={props.isShortMovie}
                            handleCheckboxClick={props.handleCheckboxClick}
                        />
                        <h3 className="searchForm__filterText">
                            Короткометражки
                        </h3>
                    </div>
                </section>
            </Route>
            <Route path="/saved-movies">
                <section className="searchForm">
                    <form
                        className="searchForm__container"
                        onSubmit={handleSaveMovieSubmit}
                    >
                        <input
                            id="searchForm"
                            name="searchForm"
                            className="searchForm__input"
                            placeholder="Фильм"
                            type="text"
                            required
                            onChange={handleSearchMovieSaved}
                            value={savedMovie}
                        />
                        <button
                            type="submit"
                            className="searchForm__button-search"
                        >
                            Поиск
                        </button>
                    </form>
                    <div className="searchForm__filter">
                        <FilterCheckbox
                            isShortMovie={props.isShortMovie}
                            handleCheckboxClick={props.handleCheckboxClick}
                        />
                        <h3 className="searchForm__filterText">
                            Короткометражки
                        </h3>
                    </div>
                </section>
            </Route>
        </Switch>
    );
}

export default SearchForm;
