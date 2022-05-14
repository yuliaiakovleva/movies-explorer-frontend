import React from 'react';
import SignForm from '../SignForm/SignForm';
import './Login.css';

function Login() {
    return (
        <SignForm
        header="Рады видеть!"
        button="Войти"
        text="Ещё не зарегистрированы?"
        link="Регистрация"
        url="/signup"
        className="sign__button_login"
        ></SignForm>
      );
}

export default Login;