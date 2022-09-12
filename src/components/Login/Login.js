import { Link } from 'react-router-dom';

function Login (props) {

  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleLogin(props.values.email , props.values.password)

  }

  return (
    <section className="login">
      <Link exact to="/" className="login__logo"></Link>
      <h2 className="login__header">Рады видеть!</h2>
      <form className="login__form" noValidate>
        <p className="login__field-name">E-mail</p>
        <input type="email" className={`login__input ${props.errors.email !== '' ? 'login__input_type_error' : ''}`} name="email" onChange={props.handleChange} value={props.values.email || ''} placeholder="E-mail" required/>
        <span className="login__error login-name-input-error">{props.errors.email}</span>
        <p className="login__field-name">Пароль</p>
        <input type="password" className={`login__input ${props.errors.password !== '' ? 'login__input_type_error' : ''}`} name="password" onChange={props.handleChange} value={props.values.password || ''} placeholder="Пароль" required/>
        <span className="login__error login-name-input-error">{props.errors.password}</span>
        <span className="login__server-error">{props.errorMessage}</span>
        <button className="login__button" disabled={!props.isValid} onClick={handleSubmit} type="submit">Войти</button>
      </form>
      <div className="login__signin-container">
        <p className="login__paragraph">Ещё не зарегистрированы?</p>
        <Link className="login__link" to="/signup">Регистрация</Link>
      </div>
    </section>
  );
}

export default Login;