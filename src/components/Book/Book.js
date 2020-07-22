import React from 'react';
import s from './Book.module.scss';
import book_1 from '../../images/book_1.png';
import shortenTitle from '../Utils/ShortenTitle';
import { uniqueId } from 'lodash';

export default (props) => {
    //   const deleteBook = (id) => {
    //       localStorage.getItem('mybook')
    //       const localData = JSON.parse(localStorage.getItem('mybook'));
    //       localData.splice(id, 1);
    //       localStorage.setItem('mybook', JSON.stringify(localData));
    //   }

    return(
        <div className={s.book_item} key = {uniqueId()}>
            <div className={s.book_img}>
                <img src={book_1} alt="Cover" />
                </div>
            <div>
                <div className={s.book_properties}>{shortenTitle(props.title)}</div>
                <div className={s.book_price}>
                    {props.price}
                    <button className={s.button_buy}>В КОРЗИНУ</button>
                    <button className={s.button_delete}>УДАЛИТЬ</button>
                </div>
            </div>
        </div>
    ) 
}
{/*onClick={() => deleteBook(id)}*/} 