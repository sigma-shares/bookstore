import React from 'react';
import styles from './Preview.module.scss';
import book_1 from '../../images/book_1.png';
import book_2 from '../../images/book_2.png';
import book_3 from '../../images/book_3.png';
import book_4 from '../../images/book_4.png';
import ShortenTitle from '../Utils/ShortenTitle';

function Preview() {
    const s = styles;
    const short = ShortenTitle; //shorten title оставить
    const book1 = {
      title: 'HOW TO BE A BAWSE',
      writer: 'Lilly Singh',
      pages: '220',
      writer_email: 'singhbooks@gmail.com',
      publishing: 'mifbooks',
      price: '$ 49',
    }

    const book2 = {
      title: 'HOW TO WRITE A BESTSELLING NONFICTION EBOOK IN 30 DAYS OR LESS',
      writer: 'Joshua Montoya, Marty Cooney',
      pages: '117',
      writer_email: 'montoyacooney@mail.com',
      publishing: 'mifbooks',
      price: '$ 19',
    }

    const book3 = {
      title: '7-DAY SELF PUBLISHING MINI COURSE',
      writer: 'Joshua Montoya, Marty Cooney',
      pages: '239',
      writer_email: 'montoyacooney@mail.com',
      publishing: 'mifbooks',
      price: '$ 49',
    }

    const book4 = {
      title: 'THE RING OF TRUTH',
      writer: 'Wendy Doniger',
      pages: '362',
      writer_email: 'theringoftruth@yahoo.com',
      publishing: 'mifbooks',
      price: '$ 49',
    }

    
    return (

      <div className={s.main}>
        <div className={s.book_item}>
          <div className={s.book_img}>
            <img src={book_1} alt="Cover" />
          </div>
          <div>
            <div className={s.book_properties}>{short(book1.title)}</div>
            <div className={s.book_price}>
              {book1.price}
              <button className={s.button_buy}>В КОРЗИНУ</button>
            </div>
          </div>
        </div>
        <div className={s.book_item}>
          <div className={s.book_img}>
            <img src={book_2} alt="Cover" />
          </div>
          <div>
            <div className={s.book_properties}>{short(book2.title)}</div>
            <div className={s.book_price}>
              {book2.price}
              <button className={s.button_buy}>В КОРЗИНУ</button>
              </div>
          </div>
        </div>
        <div className={s.book_item}>
          <div className={s.book_img}>
            <img src={book_3} alt="Cover" />
          </div>
          <div>
            <div className={s.book_properties}>{short(book3.title)}</div>
            <div className={s.book_price}>
              {book3.price}
              <button className={s.button_buy}>В КОРЗИНУ</button></div>
          </div>
        </div>
        <div className={s.book_item}>
          <div className={s.book_img}>
            <img src={book_4} alt="Cover" />
          </div>
          <div>
            <div className={s.book_properties}>{short(book4.title)}</div>
            <div className={s.book_price}>
              {book4.price}
              <button className={s.button_buy}>В КОРЗИНУ</button>
              </div>
          </div>
        </div>
          <div className={s.book_item}>
          </div>
      </div>
    )
}

export default Preview;