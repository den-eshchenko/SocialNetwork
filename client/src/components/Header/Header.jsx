import React, { useEffect, useState } from 'react';
import logo_photo from '../../assets/images/male.jpg';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';


function Header(props) {
  let authMenu = React.createRef();
  let [openAuthSttings, setAuthSettings] = useState(false);

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside, false);
  })

  const handleClickOutside = (e) => {
    if (!e.path.includes(authMenu.current)) { // есть ли в списке родительских или дочерних элементов, нужный элемент
      disableAuthSttings();
    }
  }

  const enableAuthSttings = (e) => {
    setAuthSettings(true);
  }

  const disableAuthSttings = () => {
    setAuthSettings(false);
    window.removeEventListener('mousedown', handleClickOutside, false);
  }
  return (
    //   шапка сайта
    <header className={s.header}>
      <div className={ classNames({ [s.modal_menu_overlay_open]: openAuthSttings, [s.modal_menu_overlay_close]: !openAuthSttings }) }>
        <div className={s.auth}>
          <div className={s.user} onClick={enableAuthSttings}>
            <div className={s.user_photo}>
              <div><img src={props.auth.logo_user === null || undefined ? logo_photo : props.auth.logo_user} alt="logo_photo" className={s.logo_photo} /></div>
              <div className={s.user_name}>{props.auth.isAuth[1] === "null" ? "guest" : props.auth.isAuth[1]}</div>
            </div>
            <br className={s.clear}></br>
          </div>

          <div className={classNames(s.auth_menu, { [s.auth_menu_visible]: openAuthSttings }, { [s.auth_menu_hidden]: !openAuthSttings })} ref={authMenu}>
            {props.auth.isAuth[0]
              ? // если авторизован 
              <>
                <NavLink to='/profile' className={s.user_photo_menu}>
                  <div className={s.logo_photo_container}><img src={props.auth.logo_user === null || undefined ? logo_photo : props.auth.logo_user} alt="logo_photo" className={s.logo_photo} /></div>
                  <div className={s.user_name}>{props.auth.isAuth[1]}</div>
                </NavLink>
                <div className={s.items_menu}>
                  <div><NavLink to="/profile">Мой профиль</NavLink></div>
                  <div><NavLink to="/settings">Настройки</NavLink></div>
                  <div><NavLink to='/registration'>Зарегистрироваться</NavLink></div>
                  <button onClick={() => { props.onLogout() }}>Выйти</button>
                </div>
              </>
              : // если не авторизован
              <div className={s.items_menu}>
                <div><NavLink to='/login'>Войти</NavLink></div>
                <div><NavLink to='/registration'>Зарегистрироваться</NavLink></div>
              </div>
            }
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;