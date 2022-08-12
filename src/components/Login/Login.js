import { Link } from 'react-router-dom';

function Login (props) {
  return (
    <section className="login">
      <Link exact to="/" className="login__logo"></Link>
      <h2 className="login__header">Рады видеть!</h2>
      <form className="login__form">
        <p className="login__field-name">E-mail</p>
        <input type="email" className="login__input" id="login-name-input" defaultValue="pochta@yandex.ru" placeholder="E-mail" required/>
        <span className="login__error login-name-input-error"></span>
        <p className="login__field-name">Пароль</p>
        <input type="password" className="login__input" id="login-name-input" defaultValue="" placeholder="Пароль" required/>
        <span className="login__error login-name-input-error"></span>
        <button className="login__button" type="submit">Зарегистрироваться</button>
      </form>
      <div className="login__signin-container">
        <p className="login__paragraph">Ещё не зарегистрированы?</p>
        <Link className="login__link" to="/signup">Регистрация</Link>
      </div>
    </section>
  );
}

export default Login;