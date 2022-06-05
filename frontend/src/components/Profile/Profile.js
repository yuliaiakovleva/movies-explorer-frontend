import React, { useState, useEffect } from "react";
import "./Profile.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import validator from 'validator';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [disabled, setDisabled] = React.useState(false);

  const [values, setValues] = useState({
    email: "",
    name: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
  });

  const [isValid, setValidity] = useState(false);
  const isEmail = validator.isEmail(values.email);
  const endOfEmailWithButton = values.email.endsWith('.')


// нельзя изменять имя на то же самое
  useEffect(() => {
    if(currentUser.name === values.name) {
      // console.log("получилось")
      setDisabled(true)
    } else return 
  }, [values.name])

// нельзя изменять почту на ту же самую
  useEffect(() => {
    if(currentUser.email === values.email) {
      // console.log("получилось")
      setDisabled(true)
    } else return 
  }, [values.email])

  function handleChange(e) {
    const { name, value } = e.target;
    setDisabled(false);
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setValidity(e.target.validity.valid);

    if (!isValid) {
      const { name, validationMessage } = e.target;
      setError((prevState) => ({
        ...prevState,
        [name]: validationMessage,
      }));
    } else {
      setError("");
    }
  }

  useEffect(() => {
    if (!isEmail && isValid) {
      setError({email: "Некорректный email"})
      setDisabled(true)
    } else if (endOfEmailWithButton) {
      setError({email: "Недопустимое положение символа '.' в адресе"})
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [values.email])



  // отправляем данные в запрос к апи
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(values);
  }

  // вставляем значения в инпуты
  React.useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
    // выключаем кнопку, как только обновили информацию
    setDisabled(true);
  }, [currentUser]);


  return (
    <section className="section-form">
      <h1 className="section-form__header">Привет, {currentUser.name}!</h1>
      <form
        className="section-form__form"
        onSubmit={handleSubmit}
        id="submitForm"
        noValidate
      >
        <label className="section-form__label section-form__label_name">
          Имя
          <div className="container-label">
            <input
              className="section-form__input"
              type="text"
              name="name"
              value={values.name}
              minLength={2}
              maxLength={30}
              onChange={handleChange}
              pattern="[a-zA-Zа-яёА-ЯЁ\-\s]{1,}"
              required
            ></input>
            <span className={`container-label__span sign__error_visible`}>
              {error.name}
            </span>
          </div>
        </label>

        <label className="section-form__label section-form__label_email">
          E-mail
          <div className="container-label">
            <input
              className={`section-form__input ${!isEmail ? "section-form__input_invallid" : ""}`}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            ></input>
            <span
              className={`container-label__span sign__error sign__error_visible`}
            >
              {error.email}
            </span>
          </div>
        </label>

        <button
          className="section-form__button"
          type="submit"
          form="submitForm"
          disabled={disabled}
          id="edit-button"
        >
          Редактировать
        </button>
      </form>

      <Link
        to="/signin"
        className="section-form__link"
        onClick={props.onLogout}
      >
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
