function FilterCheckbox (props) {
  return (
    <div className="filter-checkbox">
      <input className="filter-checkbox__checkbox" id="short-movies" type="checkbox" />
      <label htmlFor="short-movies" className="filter-checkbox__text">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;