import React, { useEffect } from "react";
import "./FilterCheckbox.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function FilterCheckbox(props) {
  const { filter } = props;

  const location = useLocation();

  function handleFilter() {
    props.setFilter((filter) => !filter);
    localStorage.setItem(location.pathname, !filter);
  }

  useEffect(() => {
    const filterState = JSON.parse(localStorage.getItem(location.pathname));
    props.setFilter(filterState);
  }, [props]);

  return (
    <div className="switch-container">
      <input
        type="checkbox"
        className="switch"
        id="switch"
        onChange={handleFilter}
        checked={filter || false}
      ></input>
      <p className="switch__label">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
