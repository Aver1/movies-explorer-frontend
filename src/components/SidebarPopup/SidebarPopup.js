import { NavLink } from 'react-router-dom';

function SidebarPopup (props) {
  return (
    <section className={`popup${props.isSideBarOpen ? ' popup_opened' : ''}`}>
      <div className={`popup__container ${props.isSideBarOpen ? ' popup__container_opened' : ''}`}>
          <div className="popup__navigation-container">
            <NavLink exact to="/" className={({ isActive }) => isActive ? 'popup__navigation-link popup__navigation-link_active' : 'popup__navigation-link'}>Главная</NavLink>
            <NavLink to="/movies" className={({ isActive }) => isActive ? 'popup__navigation-link popup__navigation-link_active' : 'popup__navigation-link'}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className={({ isActive }) => isActive ? 'popup__navigation-link popup__navigation-link_active' : 'popup__navigation-link'}>Сохранённые фильмы</NavLink>
          </div> 
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'popup__navigation-profile popup__navigation-link_active' : 'popup__navigation-profile'}>Аккаунт</NavLink>
        <button className="popup__close-btn" type="button" onClick={props.onClose}></button>
      </div>
    </section>
  );
}

export default SidebarPopup;