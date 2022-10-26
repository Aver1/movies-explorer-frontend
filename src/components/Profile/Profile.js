import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Profile (props) {
  const [isDataChange, setIsDataChange] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (props.values.user && props.values.user !== currentUser.name) {
      setIsDataChange(true);
    }
    else if (props.values.email && props.values.email !== currentUser.email) {
      setIsDataChange(true);
    }
    else {
      setIsDataChange(false);
    }
  } , [props.values.user, props.values.email])

  function onEditButton () {
    props.setIsEditBtnOpen(true);
  }

  function handleSubmit (e) {
    debugger;
    e.preventDefault();

    props.onEditProfile(props.values.user || currentUser.name, props.values.email || currentUser.email);
    setIsDataChange(false);
  }

  return (
    <section className="profile">
      <h2 className="profile__header">{`Привет, ${currentUser.name}!`}</h2>
      <form className="profile__form" noValidate>
        <div className="profile__container">
          <span className="profile__input-name">Имя</span>
          <input className="profile__input" type="text" minLength="2" maxLength="30" placeholder="Имя" name="user" disabled={!props.isEditBtnOpen} onChange={props.handleChange} value={props.values.user || currentUser.name || ''} required/>
        </div>
        <span className="profile__input-error">{props.errors.user}</span>
        <div className="profile__line"></div>
        <div className="profile__container">
          <span className="profile__input-name">E-mail</span>
          <input className="profile__input" type="email" minLength="2" placeholder="E-mail" disabled={!props.isEditBtnOpen} name="email" onChange={props.handleChange} value={props.values.email || currentUser.email || ''} required/>
        </div>
        <span className="profile__input-error">{props.errors.email}</span>
        <span className={props.isEditBtnOpen ? 'profile__error' : 'profile__error_type_hidden'}>{props.errorMessage}</span>
        <input className={`profile__submit ${props.isEditBtnOpen ? '' : 'profile__submit_type_hidden'}`} disabled={!props.isValid || !isDataChange} onClick={handleSubmit} type="submit" value="Сохранить"/>
        <span className="profile__successful-submit">{props.errorMessage}</span>
      </form>
      <button className={`ptofile__btn ${props.isEditBtnOpen ? 'ptofile__btn_type_disabled' : ''}`} type="button" onClick={onEditButton}>Редактировать</button>
      <button className={`ptofile__btn ${props.isEditBtnOpen ? 'ptofile__btn_type_disabled' : ''}`} onClick={props.onSignOut} type="button">Выйти из аккаунта</button>
    </section>
  )
}
export default Profile;