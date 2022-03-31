import './styles/Shop.css';
import React, {useState, setState} from 'react';
import Sidebar from './Shop components/Sidebar';
import Main from './Shop components/Main';



function Shop() {
  const [genre, setGenre] = useState('All');

  function handleGenreClick(e) {
    setGenre(e.target.textContent);
  }

  return (
    <div> 
      <div className='sidebar-main-container row'>
          <Sidebar handleGenreClick={handleGenreClick}/>
          <Main currentGenre={genre}/>
      </div>
    </div>
  );
}

export default Shop;
