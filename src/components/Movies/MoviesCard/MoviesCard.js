import React from "react";
import "./MoviesCard.css";
import photo from "../../../images/pic__COLOR_pic (1).png";

function MoviesCard() {

  return (
    <>
   <li className="list__item">
        <div className="list__container">
          <p className="list__name">В погоне за бенкси</p>
          <p className="list__info">27 минут</p>
        </div>
        <img className="list__image" alt="постер фильма" src={photo}></img>
        <form className="list__form">
          <button
            className="list__button list__button_inactive "
            type="submit"
            name="save"
            // value="Сохранить"
          >Сохранить</button>
        </form>
      </li>
      <li className="list__item">
        <div className="list__container">
          <p className="list__name">В погоне за бенкси</p>
          <p className="list__info">27 минут</p>
        </div>
        <img className="list__image" alt="постер фильма" src={photo}></img>
        <form className="list__form">
          <button
            className="list__button list__button_active"
            type="submit"
            name="save"
            // value="Сохранить"
          ></button>
        </form>
      </li>
      {/* <li className="list__item">
        <div className="list__container">
          <p className="list__name">В погоне за бенкси</p>
          <p className="list__info">27 минут</p>
        </div>
        <img className="list__image" alt="постер фильма" src={photo}></img>
        <form className="list__form">
          <button
            className="list__button list__button_active"
            type="submit"
            name="save"
            // value="Сохранить"
          ></button>
        </form>
      </li>
     <li className="list__item">
        <div className="list__container">
          <p className="list__name">В погоне за бенкси</p>
          <p className="list__info">27 минут</p>
        </div>
        <img className="list__image" alt="постер фильма" src={photo}></img>
        <form className="list__form">
          <button
            className="list__button list__button_inactive"
            type="submit"
            name="save"
            // value="Сохранить"
          >Сохранить</button>
        </form>
      </li>
      <li className="list__item">
        <div className="list__container">
          <p className="list__name">В погоне за бенкси</p>
          <p className="list__info">27 минут</p>
        </div>
        <img className="list__image" alt="постер фильма" src={photo}></img>
        <form className="list__form">
          <button
            className="list__button list__button_inactive"
            type="submit"
            name="save"
            // value="Сохранить"
          >Сохранить</button>
        </form>
      </li>  */}

      {/*  <li className="list__item">
        <div className="list__container">
          <p className="list__name">В погоне за бенкси</p>
          <p className="list__info">27 минут</p>
        </div>
        <img className="list__image" alt="постер фильма" src={photo}></img>
        <form className="list__form">
          <button
            className="list__button list__button_inactive"
            type="submit"
            name="save"
            // value="Сохранить"
          >Сохранить</button>
        </form>
      </li>
      <li className="list__item">
        <div className="list__container">
          <p className="list__name">В погоне за бенкси</p>
          <p className="list__info">27 минут</p>
        </div>
        <img className="list__image" alt="постер фильма" src={photo}></img>
        <form className="list__form">
          <button
            className="list__button list__button_inactive"
            type="submit"
            name="save"
            // value="Сохранить"
          >Сохранить</button>
        </form>
      </li>
      <li className="list__item">
        <div className="list__container">
          <p className="list__name">В погоне за бенкси</p>
          <p className="list__info">27 минут</p>
        </div>
        <img className="list__image" alt="постер фильма" src={photo}></img>
        <form className="list__form">
          <button
            className="list__button list__button_inactive"
            type="submit"
            name="save"
            // value="Сохранить"
          >Сохранить</button>
        </form>
      </li> */}
      {/* <li className="list__item">
        <div className="list__container">
          <p className="list__name">В погоне за бенкси</p>
          <p className="list__info">27 минут</p>
        </div>
        <img className="list__image" alt="постер фильма" src={photo}></img>
        <form className="list__form">
          <button
            className="list__button list__button_inactive"
            type="submit"
            name="save"
            // value="Сохранить"
          >Сохранить</button>
        </form>
      </li> */}
      {/* <li className="list__item">
        <div className="list__container">
          <p className="list__name">В погоне за бенкси</p>
          <p className="list__info">27 минут</p>
        </div>
        <img className="list__image" alt="постер фильма" src={photo}></img>
        <form className="list__form">
          <button
            className="list__button list__button_inactive"
            type="submit"
            name="save"
            // value="Сохранить"
          >Сохранить</button>
        </form>
      </li>
      <li className="list__item">
        <div className="list__container">
          <p className="list__name">В погоне за бенкси</p>
          <p className="list__info">27 минут</p>
        </div>
        <img className="list__image" alt="постер фильма" src={photo}></img>
        <form className="list__form">
          <button
            className="list__button list__button_inactive"
            type="submit"
            name="save"
            // value="Сохранить"
          >Сохранить</button>
        </form>
      </li>
      <li className="list__item">
        <div className="list__container">
          <p className="list__name">В погоне за бенкси</p>
          <p className="list__info">27 минут</p>
        </div>
        <img className="list__image" alt="постер фильма" src={photo}></img>
        <form className="list__form">
          <button
            className="list__button list__button_inactive"
            type="submit"
            name="save"
            // value="Сохранить"
          >Сохранить</button>
        </form>
      </li> */}
      
    </>
  );
}

export default MoviesCard;
