import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";

function Movies(props) {
    return (
        <section className="movies">
            <Header>
                <Navigation isLoggedIn={props.isLoggedIn} />
            </Header>
            <SearchForm
                handleSearch={props.handleSearch}
                isShortMovie={props.isShortMovie}
                handleCheckboxClick={props.handleCheckboxClick}
                showPreloader={props.showPreloader}
                checkMoviesFound={props.checkMoviesFound}
            />
            <MoviesCardList
                movies={props.movies}
                savedMovies={props.savedMovies}
                isLoading={props.isLoading}
                nothingFound={props.nothingFound}
                handleSaveMovie={props.handleSaveMovie}
                handleDeleteMovie={props.handleDeleteMovie}
                filteredSaveMovies={props.filteredSaveMovies}
            />
            <Footer />
        </section>
    );
}

export default Movies;
