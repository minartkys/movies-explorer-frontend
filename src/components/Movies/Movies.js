import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";

function Movies() {
    return (
        <section className="movies">
            <Header>
                <Navigation />
            </Header>
            <SearchForm />
            <MoviesCardList/>
            <Footer />
        </section>
    );
}

export default Movies;
