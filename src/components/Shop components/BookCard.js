import React, {useState, setState} from 'react';
import Counter from './Counter';
import '../styles/BookCard.css';

function BookCard({book, helperAddToCart}) {
    const [counter, setCounter] = useState(0);

    function handleChange(e) {
        //Check if it's NaN, in case the user enters a letter for example
        if(+e.target.value !== +e.target.value) {return};
        setCounter(+e.target.value);
    }

    function handleCounterPlus(e) {
        setCounter(counter => counter+1);
    }
    function handleCounterMinus(e) {
        if(counter == 0) {return}
        setCounter(counter => counter-1);
    }

    function handleAddToCart() {
        let currentCounter = counter;
        helperAddToCart(book, currentCounter);
        setCounter(0);
    }


    return(
            <div className='BookCard col s12 offset-s3 m6 l3 center-align'>
                <div className='card small'>
                    <div className="cardTop">
                        {<img src={book.img} /> || <></>}
                    </div>
                    <div className="cardBottom">
                        <p className='bookTitle'>{book.title||'title'}</p>
                        <em>by {book.author||'author'}</em>
                        <p>{book.price||'price'}</p>
                    </div>
                    <div className='card-action hoverable center-align'>
                        <Counter plusMinus={{handleCounterPlus, handleCounterMinus}} counter={counter} handleChange={handleChange}/>
                        <button className='btn-small indigo' onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
    )
}

export default BookCard;