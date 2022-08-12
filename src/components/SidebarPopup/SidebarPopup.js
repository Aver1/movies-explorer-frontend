import { NavLink } from 'react-router-dom';

function SidebarPopup (props) {
  return (
    <section className={`popup${props.isSideBarOpen ? ' popup_opened' : ''}`}>
      <div className={`popup__container ${props.isSideBarOpen ? ' popup__container_opened' : ''}`}>
          <div className="popup__navigation-container">
            <NavLink exact to="/" activeClassName="popup__navigation-link_active" className="popup__navigation-link">Главная</NavLink>
            <NavLink to="/movies" activeClassName="popup__navigation-link_active" className="popup__navigation-link">Фильмы</NavLink>
            <NavLink to="/saved-movies" activeClassName="popup__navigation-link_active" className="popup__navigation-link">Сохранённые фильмы</NavLink>
          </div> 
          <NavLink to="/profile" activeClassName="popup__navigation-link_active" className="popup__navigation-profile" >Аккаунт</NavLink>
        <button className="popup__close-btn" type="button" onClick={props.onClose}></button>
      </div>
    </section>
  );
}

export default SidebarPopup;