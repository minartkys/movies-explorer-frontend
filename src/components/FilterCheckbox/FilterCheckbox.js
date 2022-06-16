import "./FilterCheckbox.css";
import React from "react";

function FilterCheckbox(props) {
    return (
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
    );
}

export default FilterCheckbox;
