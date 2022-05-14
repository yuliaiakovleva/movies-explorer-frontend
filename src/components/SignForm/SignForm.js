import React from "react";
import "./SignForm.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function SignForm(props) {
  return (
    <section className="section-form sign">
      <form className="sign__form section-form__form">
        <Link to="/">
            <div className="header__logo sign__logo"></div>
          </Link>
        <h1 className="sign__header">{props.header}</h1>
        {props.children}
        <label className="section-form__label sign__label">E-mail
          <input
            className="sign__input"
            type="email"
            name="email"
            required
          ></input>
          <span className="sign__error">Хей</span>
        </label>
        <label className="section-form__label sign__label">Пароль
          <input
            className="sign__input"
            type="password"
            name="password"
            required
          ></input>
           <span className="sign__error">Что-то пошло не так...</span>
        </label>
        <button className={`sign__button ${props.className}`} type="submit">{props.button}</button>
        <div className="sign__container">
            <p className="sign__text">{props.text}</p>
            <Link className="sign__link" to={props.url}>{props.link}</Link>
        </div>
      </form>
    </section>
  );
}

export default SignForm;
