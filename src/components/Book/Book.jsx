import React from 'react';
import s from './Book.module.scss';
import book_1 from '../../images/book_1.png';
import shortenTitle from '../Utils/ShortenTitle';


 const Book = ({id, item, action}) => {    

    return(
        <div className={s.book_item}>
            <div className={s.book_img}>
                <img src={book_1} alt="Cover" />
            </div>
            <div>
                <div className={s.book_properties}>{shortenTitle(item.title)}</div>
                <div className={s.book_price}>
                    {item.price}
                    <button className={s.button_buy}>В КОРЗИНУ</button>
                    <button className={s.button_delete} onClick={() => action(id)}>УДАЛИТЬ</button>
                </div>
            </div>
        </div>
    ) 
}
export default Book;