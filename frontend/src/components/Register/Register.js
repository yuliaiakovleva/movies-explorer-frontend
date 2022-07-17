import React, { useState, useEffect } from 'react';
import '../Register/Register.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import validator from 'validator';

function Register(props) {

  const [values, setValues] = useState({
    password: "",
    email: "",
    name: "",
  })

  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isValid, setValidity] = useState({
    name: false,
    email: false,
    password: false,
  })

  // const [isValid, setValidity] = useState(false);
  const isFulfiled = Object.values(values).every((item) => item !== '')
  const isEmail = validator.isEmail(values.email)
  const endOfEmailWithButton = values.email.endsWith('.')
  


    // делаем кнопку неактивной в любой момент времени, а не только после перезагрузки страницы
    useEffect(() => {
      const button = document.querySelector("#signup-button");
      if (!isFulfiled || !isValid || !isEmail) {
        button.setAttribute("disabled", "disabled");
        button.classList.add("sign__button_invalid");
      } else {
        button.disabled = false;
        button.classList.remove("sign__button_invalid");
      }
    });

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
    setValues(prevState => ({
      ...prevState,
      [name]: value
    }));
    // console.log(e.target.name)
    setValidity((prevState) => ({
      ...prevState,
      [name]: e.target.validity.valid,
    }));
    if (!isValid.email || !isValid.password || !isValid.name) {
      const {name, validationMessage} = e.target
      // console.log(validationMessage)
      setError(prevState => ({
        ...prevState,
        [name] : validationMessage
    }));
      // console.log(error)
    } else {
      setError('');  
    }

  }


  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister({password: values.password, email: values.email, name: values.name })
  
  }


    return (
      <section className="section-form sign">
        <form className="sign__form section-form__form" onSubmit={handleSubmit} noValidate>
          <Link to="/">
              <div className="header__logo sign__logo"></div>
            </Link>
          <h1 className="sign__header">Добро пожаловать</h1>
          <label className="section-form__label sign__label">Имя
            <input
              value={values.name} 
              onChange={handleChange}
              className="sign__input"
              type="text"
              name="name"
              required
              minLength={2}
              maxLength={30}
              pattern="[a-zA-Zа-яёА-ЯЁ\-\s]{1,}"
            ></input>
            <span className={`sign__error ${error.name === '' ? '' : 'sign__error_visible'}`}>{error.name}</span>
          </label>
          <label className="section-form__label sign__label">E-mail
            <input
              value={values.email} 
              onChange={handleChange}
              className={`sign__input ${!isEmail ? "sign__input_invallid" : ""}`}
              type="email"
              name="email"
              required
            ></input>
            <span className={`sign__error ${error.email === '' ? '' : 'sign__error_visible'}`}>{error.email}</span>
          </label>
          <label className="section-form__label sign__label">Пароль
            <input
              value={values.password} 
              onChange={handleChange}
              className="sign__input"
              type="password"
              name="password"
              required
            ></input>
             <span className={`sign__error ${error.password === '' ? '' : 'sign__error_visible'}`}>{error.password}</span>
          </label>
          <button className='sign__button' type="submit" id='signup-button'>Зарегистрироваться</button>
          <div className="sign__container">
              <p className="sign__text">Уже зарегистрировались?</p>
              <Link className="sign__link" to="/signin">Войти</Link>
          </div>
        </form>
      </section>
    );
}

export default Register;