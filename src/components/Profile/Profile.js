import React from "react";
// import SectionForm from '../SectionForm/SectionForm';
import "./Profile.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import '../SignForm/SignForm.css'

function Profile(props) {
  return (
    <section className="section-form">
      <h1 className="section-form__header">Привет, Юля!</h1>
      <form className="section-form__form">
        <label className="section-form__label section-form__label_name">Имя
          <input
            className="section-form__input"
            type="text"
            name="name"
            value={props.name}
          ></input>
        </label>
        <label className="section-form__label section-form__label_email">E-mail
          <input
            className="section-form__input"
            type="email"
            name="email"
            value={props.email}
          ></input>
        </label>
      </form>
      <button className="section-form__button" type="submit">
        Редактировать
      </button>
      <Link to="/signin" className="section-form__link">
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
