import '../styles/Sidebar.css';

function Sidebar({handleGenreClick}) {
    return (
        <div className="Sidebar row col s12 m3 l2 brown darken-2 grey-text text-lighten-4">
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="brown darken-2 center-align">All</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="brown darken-2 center-align">Fantasy</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="brown darken-2 center-align">Romance</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="brown darken-2 center-align">Horror</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="brown darken-2 center-align">History</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="brown darken-2 center-align">Languages</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="brown darken-2 center-align">Manga</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="brown darken-2 center-align">Mystery</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="brown darken-2 center-align">Cooking Books</div>
            </div>
            <div className="divider"></div>
        </div>
    );
  }
  
  export default Sidebar;
  