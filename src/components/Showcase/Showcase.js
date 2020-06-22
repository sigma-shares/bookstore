import React, { useState, useEffect } from 'react';
import s from '../Showcase/Showcase.module.scss';
import Book from '../Book';

function Showcase () {
    const [books, setBooks] = useState([]);

    const bookStorage = [{id: 1, 
      title : 'HOW TO BE A BAWSE', 
      writer: 'Lilly Singh', 
      pages: '220', 
      writer_email: 'singhbooks@gmail.com',
      publishing: 'mifbooks',
      price: '$ 49',
      },
      {id: 2, 
      title: 'HOW TO WRITE A BESTSELLING NONFICTION EBOOK IN 30 DAYS OR LESS',
      writer: 'Joshua Montoya, Marty Cooney',
      pages: '117',
      writer_email: 'montoyacooney@mail.com',
      publishing: 'mifbooks',
      price: '$ 19',
      },
      {id : 3,
      title: '7-DAY SELF PUBLISHING MINI COURSE',
      writer: 'Joshua Montoya, Marty Cooney',
      pages: '239',
      writer_email: 'montoyacooney@mail.com',
      publishing: 'mifbooks',
      price: '$ 49',
      },
      {id:4,
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
            const localData = JSON.parse(localStorage.getItem('mybook'));
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
            {books.map(item => Book(item))}
       </div>
       ) 
}

export default Showcase;