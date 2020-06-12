import React from 'react';
import styles from './Preview.module.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import book_1 from '../../images/book_1.png';
import book_2 from '../../images/book_2.png';
import book_3 from '../../images/book_3.png';

function Main() {
    const s = styles;
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

    
    return (

      <div className={s.main}>
        <div className={s.book_item}>
          <div className={s.book_img}>
            <img src={book_1} allt="Logo" />
          </div>
          <div>
            <div className={s.book_properties}>{book1.title}</div>
            <div className={s.book_properties}>{book1.publishing}</div>
            <div className={s.book_price}>{book1.price}</div>
            <button className={s.button_main}><ShoppingCartIcon /></button>
          </div>
        </div>
        <div className={s.book_item}>
          <div className={s.book_img}>
            <img src={book_2} allt="Logo" />
          </div>
          <div>
            <div className={s.book_properties}>{book2.title}</div>
            <div className={s.book_properties}>{book2.writer}</div>
            <div className={s.book_properties}>{book2.pages}</div>
            <div className={s.book_properties}>{book2.writer_email}</div>
            <div className={s.book_properties}>{book2.publishing}</div>
            <div className={s.book_price}>{book2.price}</div>
            <button className={s.button_main}><ShoppingCartIcon /></button>
          </div>
        </div>
        <div className={s.book_item}>
          <div className={s.book_img}>
            <img src={book_3} allt="Logo" />
          </div>
          <div>
            <div className={s.book_properties}>{book3.title}</div>
            <div className={s.book_properties}>{book3.writer}</div>
            <div className={s.book_properties}>{book3.pages}</div>
            <div className={s.book_properties}>{book3.writer_email}</div>
            <div className={s.book_properties}>{book3.publishing}</div>
            <div className={s.book_price}>{book3.price}</div>
            <button className={s.button_main}><ShoppingCartIcon /></button>
          </div>
        </div>
          <div className={s.book_item}>
          </div>
          <div className={s.book_item}>
          </div>
      </div>
    )
}

export default Main;