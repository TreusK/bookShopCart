import React, {useState, setState, useEffect} from 'react';
import BookCard from './BookCard';
import ShoppingCart from './ShoppingCart';
import ReactPaginate from "react-paginate";
import '../styles/Main.css';
import booksData from '../books data/booksData.js';
import M from 'materialize-css';


function Main({currentGenre}) {

  const [books, setBooks] = useState(booksData)

  const [shoppingCart, setShoppingCart] = useState([]);
            
  const [showCart, setShowCart] = useState(false);

  const [pageNumber, setPageNumber] = useState(0);

  const booksPerPage = 6;
  const pagesVisited = pageNumber * booksPerPage;


  let displayBooks = books
    .filter(elem => (elem.genre === currentGenre) || currentGenre === 'All')
    .slice(pagesVisited, pagesVisited + booksPerPage)
    .map((elem, index) => {
       return (<BookCard book={elem} key={index} helperAddToCart={helperAddToCart}/>)
    });
    
  let pageCount = Math.ceil(books.filter(elem => (elem.genre === currentGenre) || currentGenre === 'All').length / booksPerPage);
  

  useEffect(() => {
    var elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems, {});
  });

  useEffect(() => {
    setPageNumber(0);
  }, [currentGenre])


  function helperAddToCart(book, num) {
    let isTheBookAlreadyThere = false;
    shoppingCart.map(elem => {
      if (elem.title === book.title) {isTheBookAlreadyThere = true};
    })

    if(isTheBookAlreadyThere === false && num !== 0) {
      book.amount = num;
      setShoppingCart(oldCart => oldCart.concat([book]));
      alert("You've added " + num + " copies of " + book.title + " to your shopping cart.");
    } else if(isTheBookAlreadyThere  && num !== 0) {
      alert("That product is already in the cart!!");
    }
  }

  function hideShoppingCart(e) {
    if(e.target.id === 'cartTransparentContainer') {
      setShowCart(false);
    }
  }

  function changePage({selected}) {
    setPageNumber(selected);
  }

  function handleRemove(e) {
    let index = e.target.classList[0].slice(6);
    let cartCopy = [...shoppingCart];
    cartCopy.splice(+index, 1);
    setShoppingCart(cartCopy);
  }

  return (
    <div className="Main col s12 m9 l10 indigo row center-align">
      {showCart && <ShoppingCart shoppingCart={shoppingCart} handleRemove={handleRemove} hideShoppingCart={hideShoppingCart}/>}
      <div className='shopIconContainer indigo'>
        <i className="material-icons" onClick={() => setShowCart(true)}>shopping_cart</i>  
      </div> 
      {displayBooks}
      <ReactPaginate 
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBtns'}
        previousLinkClassName={'previousBtn'}
        nextLinkClassName={'nextBtn'}
      />
    </div>
  );
}
 
export default Main;
  