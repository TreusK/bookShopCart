import '../styles/Sidebar.css';

function Sidebar({handleGenreClick}) {
    return (
        <div className="Sidebar row col s12 m3 l2 teal">
            <div className='genreContainer section hoverable'>
                <div className="teal center-align" onClick={handleGenreClick}>All</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable'>
                <div className="teal center-align" onClick={handleGenreClick}>Fantasy</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable'>
                <div className="teal center-align" onClick={handleGenreClick}>Romance</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable'>
                <div className="teal center-align" onClick={handleGenreClick}>Horror</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable'>
                <div className="teal center-align" onClick={handleGenreClick}>History</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable'>
                <div className="teal center-align" onClick={handleGenreClick}>Languages</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable'>
                <div className="teal center-align" onClick={handleGenreClick}>Manga</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable'>
                <div className="teal center-align" onClick={handleGenreClick}>Mystery</div>
            </div>
            <div className="divider"></div>
            <div className='genreContainer section hoverable'>
                <div className="teal center-align" onClick={handleGenreClick}>Cook Books</div>
            </div>
            <div className="divider"></div>
        </div>
    );
  }
  
  export default Sidebar;
  