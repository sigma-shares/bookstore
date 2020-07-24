import React, { useState, useEffect } from 'react';
import s from '../Showcase/Showcase.module.scss';
import Book from '../Book/Book';
import AddIcon from '@material-ui/icons/Add';
import Loader from '../Loader/Loader';
import { uniqueId } from 'lodash';

function Showcase () {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const bookStorage = [{id: 0, 
      title : 'HOW TO BE A BAWSE', 
      writer: 'Lilly Singh', 
      pages: '220', 
      writer_email: 'singhbooks@gmail.com',
      publishing: 'mifbooks',
      price: '$ 49',
      },
      {id: 1, 
      title: 'HOW TO WRITE A BESTSELLING NONFICTION EBOOK IN 30 DAYS OR LESS',
      writer: 'Joshua Montoya, Marty Cooney',
      pages: '117',
      writer_email: 'montoyacooney@mail.com',
      publishing: 'mifbooks',
      price: '$ 19',
      },
      {id : 2,
      title: '7-DAY SELF PUBLISHING MINI COURSE',
      writer: 'Joshua Montoya, Marty Cooney',
      pages: '239',
      writer_email: 'montoyacooney@mail.com',
      publishing: 'mifbooks',
      price: '$ 49',
      },
      {id: 3,
      title: 'THE RING OF TRUTH',
      writer: 'Wendy Doniger',
      pages: '362',
      writer_email: 'theringoftruth@yahoo.com',
      publishing: 'mifbooks',
      price: '$ 49',
      },
    ];


    const storageHasBook = () => {
        if (localStorage.getItem('mybook')) {
            const localData = JSON.parse(localStorage.getItem('mybook'));
            setBooks(localData);
        } else {
            localStorage.setItem('mybook', JSON.stringify(bookStorage));
            setBooks(bookStorage);
        } 
    };

    const addBook = () => {
        const newBook = [{
            id: (books.length),
            title: 'BRAND-NEW BOOK',
            writer: 'Wendy Doniger',
            pages: '389',
            writer_email: 'theringoftruth@yahoo.com',
            publishing: 'mifbooks',
            price: '$ 55',
        }];

        const localDataBefore = JSON.parse(localStorage.getItem('mybook'));
        const localDataAfter = localDataBefore.concat(newBook);
        localStorage.setItem('mybook', JSON.stringify(localDataAfter));
        setLoading(true)
        //функция отложена специально для визуализации лоадера
        setTimeout(() => {                 
            setBooks(localDataAfter)       
            setLoading(false)
            console.log('addBook pressed')
        }, 2000) 
    }

    const deleteBook = (id) => {
        console.log(id)
        localStorage.getItem('mybook'); //достаем книги
        const localData = JSON.parse(localStorage.getItem('mybook')); //парсим книги 
        const filteredData = localData.filter((book) => book.id !== id); //фильтр по id нужны все кроме той на которую нажали
        console.log(filteredData)
        filteredData.forEach((book, i) => {
            book.id = i;
          }); //ищу по массиву ту на которую нажала по id
        localStorage.setItem('mybook', JSON.stringify(filteredData)); 
        setBooks(filteredData)
    }

    useEffect(() => { 
      storageHasBook();
    }, []);    

  

    return(
    <div className={s.main}>
        {books.map((item) => 
        <Book 
           key = {uniqueId()}
           id = {item.id} 
           item={item}  
           action={deleteBook}/>)
        }
        <button className={s.button} onClick={addBook}>
            <AddIcon color='disabled' fontSize='large' />
        </button>
        {loading && <Loader />}
       </div> 
       ) 
}

export default Showcase;