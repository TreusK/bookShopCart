import './styles/Header.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='Header'>
         <nav className='red darken-4'>
            <div className="nav-wrapper left-align">
            <a href="#" className="brand-logo left" id='logo'>BookShop</a>
            <ul id="nav-mobile" className="right">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
            </ul>
            </div>
        </nav>
    </div>
  );
}

export default Header;
