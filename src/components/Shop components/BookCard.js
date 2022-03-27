import React, {useState, setState} from 'react';
import Counter from './Counter';
import '../styles/BookCard.css';

function BookCard({book}) {
    const [counter, setCounter] = useState(0);

    function handlechange(e) {
        setCounter(+e.target.value);
    }

    function handleCounterPlus(e) {
        setCounter(counter => counter+1);
    }
    function handleCounterMinus(e) {
        if(counter == 0) {return}
        setCounter(counter => counter-1);
    }

    return(
            <div className='BookCard col s12 offset-s3 m6 l3 center-align'>
                <div className='card small'>
                    <div className="cardTop">
                        <img href={book.img||'Img'}/>
                    </div>
                    <div className="cardBottom">
                        <p>{book.title||'title'}</p>
                        <p>{book.author||'genre'}</p>
                        <p>{book.price||'price'}</p>
                    </div>
                    <div className='card-action hoverable center-align'>
                        <Counter plusMinus={{handleCounterPlus, handleCounterMinus}} counter={counter} handleChange={handlechange}/>
                        <button className='btn-small indigo'>Add to Cart</button>
                    </div>
                </div>
            </div>
    )
}

export default BookCard;