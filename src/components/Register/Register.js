import React from 'react';
import { Link } from 'react-router-dom';

function Register (props) {

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onRegister( props.values.user, props.values.email, props.values.password)
  }

  return (
    <section className="register">
      <Link exact to="/" className="register__logo"></Link>
      <h2 className="register__header">Добро пожаловать!</h2>
      <form className="register__form" noValidate>
        <p className="register__field-name">Имя</p>
        <input type="text" className={`register__input ${props.errors.user !== '' ? 'register__input_type_error' : ''}`} name='user' onChange={props.handleChange} value={props.values.user || ''} placeholder="Имя" maxLength={30} required/>
        <span className="register__error register-name-input-error">{props.errors.user}</span>
        <p className="register__field-name">E-mail</p>
        <input type="email" className={`register__input ${props.errors.email !== '' ? 'register__input_type_error' : ''}`} name='email' onChange={props.handleChange} value={props.values.email || ''} placeholder="E-mail" required/>
        <span className="register__error register-name-input-error">{props.errors.email}</span>
        <p className="register__field-name">Пароль</p>
        <input type="password" className={`register__input ${props.errors.password !== '' ? 'register__input_type_error' : ''}`} name='password' onChange={props.handleChange} value={props.values.password || ''} placeholder="Пароль" required/>
        <span className="register__error register-name-input-error">{props.errors.password}</span>
        <span className="register__server-error">{props.errorMessage}</span>
        <button className="register__button" disabled={!props.isValid} onClick={handleSubmit} type="submit">Зарегистрироваться</button>
      </form>
      <div className="register__login-container">
        <p className="register__paragraph">Уже зарегистрированы?</p>
        <Link className="register__link" to="/signin">Войти</Link>
      </div>
    </section>
  )
}

export default Register;