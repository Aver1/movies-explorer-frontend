function FilterCheckbox (props) {
  // debugger;

  return (
    <div className="filter-checkbox">
      <input className="filter-checkbox__checkbox" id="short-movies" type="checkbox" checked={props.checkBox} onChange={() => props.onSetCheckBox(!props.checkBox)}/>
      <label htmlFor="short-movies" className="filter-checkbox__text">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;