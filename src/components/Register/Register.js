import { Link } from 'react-router-dom';

function Register (props) {
  return (
    <section className="register">
      <Link exact to="/" className="register__logo"></Link>
      <h2 className="register__header">Добро пожаловать!</h2>
      <form className="register__form">
        <p className="register__field-name">Имя</p>
        <input type="text" className="register__input" id="register-name-input" defaultValue="Виталий" placeholder="Имя" minLength="2" maxLength="30" required/>
        <span className="register__error register-name-input-error"></span>
        <p className="register__field-name">E-mail</p>
        <input type="email" className="register__input" id="register-name-input" defaultValue="pochta@yandex.ru" placeholder="E-mail" required/>
        <span className="register__error register-name-input-error"></span>
        <p className="register__field-name">Пароль</p>
        <input type="password" className="register__input register__input_type_error" id="register-name-input" defaultValue="Пароль123456" placeholder="Пароль" required/>
        <span className="register__error register-name-input-error">Что-то пошло не так...</span>
        <button className="register__button" type="submit">Зарегистрироваться</button>
      </form>
      <div className="register__login-container">
        <p className="register__paragraph">Уже зарегистрированы?</p>
        <Link className="register__link" to="/signin">Войти</Link>
      </div>
    </section>
  )
}

export default Register;