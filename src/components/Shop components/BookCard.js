import Counter from './Counter';
import '../styles/BookCard.css';

function BookCard({book}) {
    return(
            <div className='col s12 m4 l3'>
                <div className='card small'>
                    <div className="cardTop">
                        <img href={book.img||'Img'}/>
                    </div>
                    <div className="cardBottom">
                        <p>{book.title||'title'}</p>
                        <p>{book.author||'genre'}</p>
                        <p>{book.price||'price'}</p>
                    </div>
                    <div className='card-action hoverable'>
                        <Counter />
                    </div>
                </div>
            </div>
    )
}

export default BookCard;