import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  function handleSubmit() {
    props.onAddMovie(props);
  }

  function handleDelete() {
    props.onDeleteMovie(props);
  }

  function handleButtonClick(e) {
    e.preventDefault();
    if (!props.isClicked) {
      handleSubmit();
    } else {
      handleDelete();
    }
  }

  return (
    <>
      <li className="list__item">
        <div className="list__container">
          <p className="list__name">{props.nameRU}</p>
          <p className="list__info">{props.duration}</p>
        </div>
        <a href={props.trailerLink} target="_blank" rel="noreferrer">
          <img
            className="list__image"
            alt="постер фильма"
            src={props.imageUrl}
          ></img>
        </a>
        <form className="list__form" onSubmit={handleButtonClick}>
          <button
            className={`list__button ${
              props.isClicked ? "list__button_active" : "list__button_inactive"
            } `}
            type="submit"
            name="save"
            children={`${props.isClicked ? "" : "Сохранить"}`}
          ></button>
        </form>
      </li>
    </>
  );
}

export default MoviesCard;
