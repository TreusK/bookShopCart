import './styles/Shop.css';
import React, {useState, setState} from 'react';
import Sidebar from './Shop components/Sidebar';
import Main from './Shop components/Main';
import booksData from './books data/booksData'


function Shop() {
  const [genre, setGenre] = useState('All');

  function handleGenreClick(e) {
    setGenre(e.target.textContent);
  }

  return (
    <div>
      <h3>Hi Im Shopping cart</h3>  
      <div className='sidebar-main-container row'>
          <Sidebar handleGenreClick={handleGenreClick}/>
          <Main allBooksData={booksData} currentGenre={genre}/>
      </div>
    </div>
  );
}

export default Shop;
