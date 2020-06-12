import React from 'react';
import styles from './components/Styles.module.scss';
import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';

function App() {
  const s = styles;

  return (
    <div className="App">
      <div className = {s.bookstore}>
        <Header />
        <Preview />
        <br />
        <button className={s.button_main}>В КОРЗИНУ</button>
        <div className={s.bottom_menu}></div>
        {/*<input name="myFile" type="file"></input>*/}
        <div className={s.bottom_social_media}></div>
      </div>
    </div>
  );
}

export default App;
