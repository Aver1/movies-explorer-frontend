import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React from "react";

function SearchForm (props) {

  function handleSubmit(e) {
    e.preventDefault();

    props.onSearch();
  }

  function handleFilmChange(e) {
    // props.changeFilmName(e.target.value);
    props.onSetMovieName(e.target.value);

  }

  // function handleCheckBoxChange() {
  //   changeCheckBox(!checkBox);
  // }

  // onCheckBox={handleCheckBoxChange}

  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <div className="search-form__container">
          <div className="search-form__icon"></div>
          <input className="search-form__search" placeholder="Фильм" type="text" onChange={handleFilmChange} value={props.movieName}/>
          <input className="search-form__search-button" value="" type="submit"/>
          <div className="search-form__line"></div>
          <FilterCheckbox checkBox={props.checkBox} onSetCheckBox={props.onSetCheckBox} className="search-form__checkbox_type-width"></FilterCheckbox>
        </div>
      </form>
      <div className="search-form__bottom-line"></div>
    </section>
  );
}

export default SearchForm;