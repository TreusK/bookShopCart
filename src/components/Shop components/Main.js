import React, {useState, setState, useEffect} from 'react';
import BookCard from './BookCard';
import ShoppingCart from './ShoppingCart';
import '../styles/Main.css';
import M from 'materialize-css';

//Main toma un arr de obj de libros, filtra segun currentGenre, y los muestra cada uno como BookCard
function Main({allBooksData, currentGenre}) {

    const [shoppingCart, setShoppingCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
      var elems = document.querySelectorAll('.materialboxed');
      M.Materialbox.init(elems, {});
    });


    function helperAddToCart(book, num) {
      let isTheBookAlreadyThere = false;
      shoppingCart.map(elem => {
        if (elem.title == book.title) {isTheBookAlreadyThere = true};
      })

      if(isTheBookAlreadyThere == false && num != 0) {
        book.amount = num;
        setShoppingCart(oldCart => oldCart.concat([book]));
        alert("You've added " + num + " copies of " + book.title + " to your shopping cart.");
      } else if(isTheBookAlreadyThere  && num != 0) {
        alert("That product is already in the cart!!");
      }
    }

    function hideShoppingCart(e) {
      if(e.target.id === 'cartTransparentContainer') {
        setShowCart(false);
      }
    }

    return (
      <div className="Main col s12 m9 l10 indigo row center-align">
        {showCart && <ShoppingCart booksInCart={shoppingCart} hideShoppingCart={hideShoppingCart}/>}
        <div className='shopIconContainer indigo'>
          <i className="material-icons" onClick={() => setShowCart(true)}>shopping_cart</i>  
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
  