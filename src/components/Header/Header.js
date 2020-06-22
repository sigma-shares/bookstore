import React from 'react';
import styles from './Header.module.scss';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    const s = styles;

    return (
        <div className={s.wrapper}>
            <div className={s.nav_home}><a href="#home">Книжный магазин</a></div>
            <ul className={s.nav_menu}>
             <li className={s.nav_link}><a href="#about">О нас</a></li>
             <li className={s.nav_link}><a href="#news">Новости</a></li>
             <li className={s.nav_link}><a href="#contacts">Контакты</a></li>            
            </ul>
            <div className={s.search}>
              <input className={s.input_search} type="search" placeholder="Поиск" />
              <button className={s.button_search}><SearchIcon color="disabled" /></button>
            </div>
        </div>
    );
}

export default Header;