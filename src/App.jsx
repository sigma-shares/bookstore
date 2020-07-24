import React from 'react';
import s from './components/Styles.module.scss';
import Header from './components/Header/Header';
import Showcase from './components/Showcase/Showcase';

function App() {

  return (
      <div className="App">
        <div className = {s.bookstore}>
          <Header />
          <Showcase />
          {/*<button className={s.button_main}>В КОРЗИНУ</button>*/}
          <div className={s.bottom_menu}></div>
          {/*<input name="myFile" type="file"></input>*/}
        <div className={s.bottom_social_media}></div>
      </div>
    </div>
    
  );
}

export default App;