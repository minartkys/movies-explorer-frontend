import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
function SearchForm() {
    return (
        <section className="searchForm">
            <form className="searchForm__container">
                <input
                    id="searchForm"
                    name="searchForm"
                    className="searchForm__input"
                    placeholder="Фильм"
                    type="text"
                    required
                />
                <button type="submit" className="searchForm__button-search">
                    Поиск
                </button>
            </form>
            <div className="searchForm__filter">
                <FilterCheckbox />
                <h3 className="searchForm__filterText">Короткометражки</h3>
            </div>
        </section>
    );
}

export default SearchForm;
