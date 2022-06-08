import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies() {
    return (
        <section className="savedMovies">
            <Header>
                <Navigation />
            </Header>
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </section>
    );
}

export default SavedMovies;
