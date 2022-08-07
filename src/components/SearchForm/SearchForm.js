import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm () {
  return (
    <section className="search-form">
      <form>
        <div className="search-form__container">
          <div className="search-form__icon"></div>
          <input className="search-form__search" placeholder="Фильм" type="text"/>
          <input className="search-form__search-button" value="" type="submit"/>
          <div className="search-form__line"></div>
          <FilterCheckbox className="search-form__checkbox_type-width"></FilterCheckbox>
        </div>
      </form>
      <div className="search-form__bottom-line"></div>
    </section>
  );
}

export default SearchForm;