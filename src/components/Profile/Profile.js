import React from "react";

function Profile (props) {
  const [isEditOpen, setEditState] = React.useState(false);

  function onEditButton () {
    setEditState(true);
  }

  return (
    <section className="profile">
      <h2 className="profile__header">{`Привет, ${props.name}!`}</h2>
      <form className="profile__form">
        <div className="profile__container">
          <span className="profile__input-name">Имя</span>
          <input className="profile__input" type="text" minLength="2" maxLength="30" placeholder="Имя" disabled={!isEditOpen}/>
        </div>
        <div className="profile__line"></div>
        <div className="profile__container">
          <span className="profile__input-name">E-mail</span>
          <input className="profile__input" type="text" minLength="2" placeholder="E-mail" disabled={!isEditOpen}/>
        </div>
        <span className={isEditOpen ? 'profile__error' : 'profile__error_type_hidden'}>Тут будут ошибки</span>
        <input className={`profile__submit ${isEditOpen ? '' : 'profile__submit_type_hidden'}`} type="submit" value="Сохранить"/>
      </form>
      <button className={`ptofile__btn ${isEditOpen ? 'ptofile__btn_type_disabled' : ''}`} type="button" onClick={onEditButton}>Редактировать</button>
      <button className={`ptofile__btn ${isEditOpen ? 'ptofile__btn_type_disabled' : ''}`} type="button">Выйти из аккаунта</button>
    </section>
  )
}
export default Profile;