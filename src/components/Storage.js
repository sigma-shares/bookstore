import React, { useState, useEffect } from 'react';
import styles from './Preview/Preview.module.scss';
import ShortenTitle from './Utils/ShortenTitle';
import book_1 from '../images/book_1.png';

function Storage () {
    const s = styles;
    const short = ShortenTitle;

    const [books, setBooks] = useState([]);

    const bookStorage = [{book: 1, 
      title : 'HOW TO BE A BAWSE', 
      writer: 'Lilly Singh', 
      pages: '220', 
      writer_email: 'singhbooks@gmail.com',
      publishing: 'mifbooks',
      price: '$ 49',
      },
      {book: 2, 
      title: 'HOW TO WRITE A BESTSELLING NONFICTION EBOOK IN 30 DAYS OR LESS',
      writer: 'Joshua Montoya, Marty Cooney',
      pages: '117',
      writer_email: 'montoyacooney@mail.com',
      publishing: 'mifbooks',
      price: '$ 19',
      },
      {book : 3,
      title: '7-DAY SELF PUBLISHING MINI COURSE',
      writer: 'Joshua Montoya, Marty Cooney',
      pages: '239',
      writer_email: 'montoyacooney@mail.com',
      publishing: 'mifbooks',
      price: '$ 49',
      },
      {book:4,
      title: 'THE RING OF TRUTH',
      writer: 'Wendy Doniger',
      pages: '362',
      writer_email: 'theringoftruth@yahoo.com',
      publishing: 'mifbooks',
      price: '$ 49',
      },
    ];

    function storageHasBook() {
        if (localStorage.getItem('mybook')) {
            let localData = JSON.parse(localStorage.getItem('mybook'));
            setBooks(localData);
        } else {
            localStorage.setItem('mybook', JSON.stringify(bookStorage));
            setBooks(bookStorage);
        } 
    };

    useEffect(() => { 
      storageHasBook();
    }, []);    

  

    return(
        <div className={s.main}>
            {books.map(item => 
                <div className={s.book_item} key = {item.book}>
                <div className={s.book_img}>
                  <img src={book_1} alt="Cover" />
                </div>
                <div>
                  <div className={s.book_properties}>{short(item.title)}</div>
                  <div className={s.book_price}>
                    {item.price}
                    <button className={s.button_buy}>В КОРЗИНУ</button>
                  </div>
                </div>
              </div>
       )}
       </div>
       ) 
}

export default Storage;
