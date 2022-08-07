import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import SidebarPopup from '../SidebarPopup/SidebarPopup';


function Header (props) {
  //Переключатель шапки авторизированного пользователя
  const logedIn = false;
  const [isSideBarOpen, setSideBarState] = React.useState(false);

  function isOpen() {
    isSideBarOpen ? setSideBarState(false) : setSideBarState(true);
  }

  return (
    <header className="header">
      <div className="header__content">
        <Link exact to="/" className="header__logo"></Link>
          <nav className={logedIn ? 'header__navigation' : 'header__navigation_disabled'}>
            <div>
              <NavLink to="/movies" activeClassName='header__link_active' className="header__link">Фильмы</NavLink>
              <NavLink to="/saved-movies" activeClassName='header__link_active' className="header__link">Сохранённые фильмы</NavLink>
            </div>
            <NavLink to="/profile" activeClassName='header__link_active' className="header__link header__link_type_profile">Аккаунт</NavLink>
          </nav>
          <button className={logedIn ? 'header__sidebar-btn' : 'header__navigation_disabled'} type="button" onClick={isOpen}></button>
        <nav className={!logedIn ? 'header__not-loggedin-container' : 'header__not-loggedin-container_disabled'}>
          <NavLink to="/signup" activeClassName='header__link_active' className="header__link">Регистрация</NavLink>
          <NavLink to="/signin" activeClassName='header__link-signin_active' className="header__link-signin">Войти</NavLink>
        </nav>
      </div>
      <SidebarPopup onClose={isOpen} isSideBarOpen={isSideBarOpen}></SidebarPopup>
    </header>
  );
}

export default Header;