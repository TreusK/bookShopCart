import React, {useState, setState} from 'react';
import BookCard from './BookCard';
import '../styles/Main.css'

//Main toma un arr de obj de libros, filtra segun currentGenre, y los muestra cada uno como BookCard
function Main({allBooksData, currentGenre}) {
    const [shoppingCart, setShoppingCart] = useState([]);

    function helperAddToCart(book, num) {
      let isTheBookAlreadyThere = false;
      shoppingCart.map(elem => {
        if (elem.title == book.title) {isTheBookAlreadyThere = true};
      })

      if(isTheBookAlreadyThere == false && num != 0) {
        book.amount = num;
        setShoppingCart(oldCart => oldCart.concat([book]));
        alert("You've added " + num + " copies of " + book.title + " to your shopping cart.");
      }
    }

    return (
      <div className="Main col s12 m9 l10 indigo row center-align">
        <div className='shopIconContainer indigo'>
          <i className="material-icons">shopping_cart</i>  
        </div> 
        {allBooksData.map((elem, index) => {
          if(elem.genre == currentGenre || currentGenre == 'All') {
           return <BookCard book={elem} key={index} helperAddToCart={helperAddToCart}/>
          }
        }
        )}
      </div>
    );
  }
  
  export default Main;
  