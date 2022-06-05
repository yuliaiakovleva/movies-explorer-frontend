import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Login.css";
import validator from "validator";


function Login(props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });


  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const [isValid, setValidity] = useState(false);
  const [isValid, setValidity] = useState({
    email: false,
    password: false,
  })


  const isFulfiled = Object.values(values).every((item) => item !== "");
  const isEmail = validator.isEmail(values.email);
  const endOfEmailWithButton = values.email.endsWith('.')

  // делаем кнопку неактивной в любой момент времени, а не только после перезагрузки страницы
  useEffect(() => {
    const button = document.querySelector("#sign-button");
    if (!isFulfiled || !isValid || !isEmail) {
      button.setAttribute("disabled", "disabled");
      button.classList.add("sign__button_invalid");
    } else {
      button.disabled = false;
      button.classList.remove("sign__button_invalid");
    }
  });

  // 
  useEffect(() => {
    if (!isEmail && isValid.email) {
      setError({email: "Некорректный email"})
    } else if (endOfEmailWithButton) {
      setError({email: "Недопустимое положение символа '.' в адресе"})
    } else {
      return
    }
  }, [values.email])


  // метод, который будет срабатывать при каждом вводе в инпут
  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // setValidity(isFulfiled && e.target.validity.valid);
   setValidity((prevState) => ({
    ...prevState,
    [name]: e.target.validity.valid,
  }));
    if (!isValid.email || !isValid.password) {
      const { name, validationMessage } = e.target;
      setError((prevState) => ({
        ...prevState,
        [name]: validationMessage,
      }));
    } else {
      setError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    // сюда передаю данные
    props.handleLogin({ password: values.password, email: values.email });
    setValues({
      email: "",
      password: "",
    });
  }

  return (
    <section className="section-form sign">
      <form
        className="sign__form section-form__form"
        onSubmit={handleSubmit}
        noValidate
      >
        <Link to="/">
          <div className="header__logo sign__logo"></div>
        </Link>
        <h1 className="sign__header">Рады видеть!</h1>
        <label className="section-form__label sign__label">
          E-mail
          <input
            value={values.email}
            onChange={handleChange}
            className={`sign__input ${!isEmail ? "sign__input_invallid" : ""}`}
            type="email"
            name="email"
            id="login-email"
            required
          ></input>
          <span
            className={`sign__error ${
              error.email === "" || undefined ? "" : "sign__error_visible"
            }`}
          >
            {error.email}
          </span>
        </label>
        <label className="section-form__label sign__label">
          Пароль
          <input
            value={values.password}
            onChange={handleChange}
            className="sign__input"
            type="password"
            name="password"
            required
          ></input>
          <span
            className={`sign__error ${
              error.password === "" ? "" : "sign__error_visible"
            }`}
          >
            {error.password}
          </span>
        </label>
        <button
          className='sign__button sign__button_login'
          type="submit"
          id="sign-button"
        >
          Войти
        </button>
        <div className="sign__container">
          <p className="sign__text">Ещё не зарегистрированы</p>
          <Link className="sign__link" to="/signup">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}

export default withRouter(Login);
