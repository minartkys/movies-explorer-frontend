import "./FilterCheckbox.css";
import React from "react";

function FilterCheckbox() {
    return (
        <label className="filterCheckbox__switch">
            <input className="filterCheckbox__input" type="checkbox" />
            <span className="filterCheckbox__slider"></span>
        </label>
    );
}

export default FilterCheckbox;
