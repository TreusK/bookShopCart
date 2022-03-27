import '../styles/Sidebar.css';

function Sidebar({handleGenreClick}) {
    return (
        <div className="Sidebar row col s12 m3 l2 teal">
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="teal center-align">All</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="teal center-align">Fantasy</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="teal center-align">Romance</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="teal center-align">Horror</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="teal center-align">History</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="teal center-align">Languages</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="teal center-align">Manga</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="teal center-align">Mystery</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable' onClick={handleGenreClick}>
                <div className="teal center-align">Cooking Books</div>
            </div>
            <div className="divider"></div>
        </div>
    );
  }
  
  export default Sidebar;
  