import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies(props) {
    return (
        <section className="savedMovies">
            <Header>
                <Navigation isLoggedIn={props.isLoggedIn} />
            </Header>
            <SearchForm
                isShortMovie={props.isShortMovie}
                handleCheckboxClick={props.handleCheckboxClick}
                showPreloader={props.showPreloader}
                checkMoviesFilteredSaveFound={
                    props.checkMoviesFilteredSaveFound
                }
                handleSearchSavedMovie={props.handleSearchSavedMovie}
                setIsSearch={props.setIsSearch}
            />
            <MoviesCardList
                movies={props.movies}
                savedMovies={props.savedMovies}
                nothingFoundSaveMovies={props.nothingFoundSaveMovies}
                filteredSaveMovies={props.filteredSaveMovies}
                handleDeleteMovie={props.handleDeleteMovie}
                isLoading={props.isLoading}
                isSearch={props.isSearch}
            />
            <Footer />
        </section>
    );
}

export default SavedMovies;
