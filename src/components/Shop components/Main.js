import BookCard from './BookCard';
import '../styles/Main.css'

//Main toma un arr de obj de libros, filtra segun currentGenre, y los muestra cada uno como BookCard
function Main({allBooksData, currentGenre}) {
    return (
      <div className="Main col s12 m9 l10 indigo row center-align">
        <div className='shopIconContainer indigo'>
          <i className="material-icons">shopping_cart</i>  
        </div> 
        {allBooksData.map((elem, index) => {
          if(elem.genre == currentGenre || currentGenre == 'All') {
           return <BookCard book={elem} key={index}/>
          }
        }
        )}
      </div>
    );
  }
  
  export default Main;
  