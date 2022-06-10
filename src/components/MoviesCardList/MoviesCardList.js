import React from "react";
import { Switch, Route } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <Switch>
            <Route path="/movies">
                <section className="moviesCardList">
                    <div className="moviesCardList__block">
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                    </div>
                    <button className="moviesCardList__btn" type="button">
                        Ещё
                    </button>
                </section>
            </Route>
            <Route path="/saved-movies">
                <section className="moviesCardList">
                    <div className="moviesCardList__block">
                        <MoviesCard />
                        <MoviesCard />
                        <MoviesCard />
                    </div>
                </section>
            </Route>
        </Switch>
    );
}

export default MoviesCardList;
