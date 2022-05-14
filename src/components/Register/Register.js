import React from 'react';
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SignForm from '../SignForm/SignForm';
import '../SignForm/SignForm.css'

function Register(props) {
    return (
        <SignForm
        children={
            <label className="section-form__label sign__label">Имя
            <input
              className="sign__input"
              type="text"
              name="name"
              required
              minLength={2}
              maxLength={30}
            ></input>
            <span className="sign__error">Хей</span>
          </label>
        }
        header="Добро пожаловать!"
        button="Зарегистрироваться"
        text="Уже зарегистрировались?"
        link="Войти"
        url="/signin"
        >   
        </SignForm>
    );
}

export default Register;