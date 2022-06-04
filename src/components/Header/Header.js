import React from "react";
import "./Header.css";
// import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Link, NavLink } from 'react-router-dom';
// import headerLogo from '../../images/icon__COLOR_icon-main.png';

function Header(props) {
  return (
    <>
      {/* <Link to='/'><div className="header__logo"></div></Link> */}
      {props.loggedIn && (
        <header
          className={`header ${props.location === "/" ? "header_color" : ""}`}
        >
          <Link to="/">
            <div className="header__logo"></div>
          </Link>
          <nav className="header__navigation">
            <NavLink
              className="header__link"
              activeClassName="header__link_active"
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className="header__link"
              activeClassName="header__link_active"
              to="/saved-movies"
            >
              Сохраненные фильмы
            </NavLink>
          </nav>
          <div className="header__profile">
            <Link className="header__link" to="/profile">
              Аккаунт
            </Link>
            {props.width < 800 && (
              <button
              type="button"
              className={`header__icon ${props.location === "/" ? 'header__icon_color' : ''} `}
              onClick={props.onOpenPopup}
            ></button>
            )}
            {props.width >= 800 && (
              <div
              className={`header__icon ${props.location === "/" ? 'header__icon_color' : ''} `}
            ></div>
            )}
          </div>
        </header>
      )}
      {!props.loggedIn && props.location === '/' && (
        <header className="header header_color">
        <Link to="/">
          <div className="header__logo"></div>
        </Link>
        <div className="header__profile">
          <Link className="header__link header__link_size_small" to="/signup">
            Регистрация
          </Link>
          <div className="header__container">
            <Link
              className="header__link header__link_size_small header__link_decor"
              to="/signin"
            >
              Войти
            </Link>
          </div>
        </div>
      </header>
      )}

    </>
  );
}

export default Header;
