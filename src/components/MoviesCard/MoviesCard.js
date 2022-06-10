import "./MoviesCard.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Photo from "../../images/Photo1.svg";
function MoviesCard() {
    const [isLiked, setIsLiked] = React.useState(false);

    const filmLikeButtonClassName = `moviesCard__like ${
        isLiked ? "moviesCard__like-active" : ""
    }`;

    function handleLikeClick() {
        if (!isLiked) {
            setIsLiked(true);
        } else setIsLiked(false);
    }

    return (
        <Switch>
            <Route path="/movies">
                <div className="moviesCard">
                    <img
                        src={Photo}
                        className="moviesCard__image"
                        alt="moviesPhoto"
                    />
                    <div className="moviesCard__block">
                        <h2 className="moviesCard__title">
                            33 слова о дизайне
                        </h2>
                        <button
                            onClick={handleLikeClick}
                            className={filmLikeButtonClassName}
                        ></button>
                    </div>
                    <p className="moviesCard__duration">1ч42м</p>
                </div>
            </Route>
            <Route path="/saved-movies">
                <div className="moviesCard">
                    <img
                        src={Photo}
                        className="moviesCard__image"
                        alt="moviesPhoto"
                    />
                    <div className="moviesCard__block">
                        <h2 className="moviesCard__title">
                            33 слова о дизайне
                        </h2>
                        <button className="moviesCard__delete"></button>
                    </div>
                    <p className="moviesCard__duration">1ч42м</p>
                </div>
            </Route>
        </Switch>
    );
}

export default MoviesCard;
