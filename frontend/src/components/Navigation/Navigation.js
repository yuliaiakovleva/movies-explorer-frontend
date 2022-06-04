import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./Navigation.css";

function Navigation(props) {
  return (
    <section className={`popup ${props.isOpen ? "popup_is-opened" : ""}`}>
      <div className="popup__background">
        <button
          className="popup__button-close"
          type="reset"
          onClick={props.onClose}
        ></button>
        <nav className="menu">
          <NavLink exact to="/" className="menu__link">
            Главная
          </NavLink>
          <NavLink to="/movies" className="menu__link">
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className="menu__link">
            Сохраненные фильмы
          </NavLink>
          <div className="menu__container">
            <NavLink to="/profile" className="menu__link menu__link_size_small">
              Аккаунт
            </NavLink>
            <div className="menu__icon"></div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navigation;