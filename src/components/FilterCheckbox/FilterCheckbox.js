import "./FilterCheckbox.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

function FilterCheckbox(props) {
    return (
        <Switch>
            <Route path="/movies">
                <label className="filterCheckbox__switch">
                    <input
                        className="filterCheckbox__input"
                        onChange={props.handleCheckboxClick}
                        checked={props.isShortMovie}
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                    />
                    <span className="filterCheckbox__slider"></span>
                </label>
            </Route>
            <Route path="/saved-movies">
                <label className="filterCheckbox__switch">
                    <input
                        className="filterCheckbox__input"
                        onChange={props.handleCheckboxClick}
                        checked={props.isShortMovie}
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                    />
                    <span className="filterCheckbox__slider"></span>
                </label>
            </Route>
        </Switch>
    );
}

export default FilterCheckbox;
