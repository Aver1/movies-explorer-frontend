import { NavLink, Link } from 'react-router-dom';


function Header (props) {
  const logedIn = false;
  return (
    <header className="header">
      <div className="header__content">
        <Link exact to="/" className="header__logo"></Link>
          <nav className={logedIn ? 'header__navigation' : 'header__navigation_disabled'}>
            <div>
              <NavLink to="/movies" className={({ isActive }) => isActive ? 'header__link header__link_active' : 'header__link'}>Фильмы</NavLink>
              <NavLink to="/saved-movies" className={({ isActive }) => isActive ? 'header__link header__link_active' : 'header__link'}>Сохранённые фильмы</NavLink>
            </div>
            <NavLink to="/profile" className={({ isActive }) => isActive ? 'header__link header__link_type_profile header__link_active' : 'header__link header__link_type_profile'}>Аккаунт</NavLink>
          </nav>
          <button className={logedIn ? 'header__sidebar-btn' : 'header__navigation_disabled'} type="button" onClick={props.onSideBarClick}></button>
        <nav className={!logedIn ? 'header__not-loggedin-container' : 'header__not-loggedin-container_disabled'}>
          <NavLink to="/signup" className={({ isActive }) => isActive ? 'header__link header__link_active' : 'header__link'}>Регистрация</NavLink>
          <NavLink to="/signin" className={({ isActive }) => isActive ? 'header__link-signin header__link-signin_active' : 'header__link-signin'}>Войти</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;