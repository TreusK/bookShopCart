import './styles/Home.css';
import {Link} from 'react-router-dom';


function Home() {
  return (
    <div className='Home grey lighten-2'>
      <div id='topContainer' className='grey darken-4'>
        <div id='topImage'>
          <div id='empty'>
          </div>
          <div id='specialOffer'>
            <p className='blue-text text-lighten-2'>READ MORE</p>
            <p>SPECIAL <span className='blue-text text-lighten-2'>30% OFF</span></p>
            <p>for the students</p>
            <button className='btn blue'><Link to='/shop'>GET THE DEAL</Link></button>
          </div>
        </div>
      </div>
      <div id='whyUsCards'>
        <div className='whyUsSingle'>
          <div className='whyUsIconContainer'>
            <i className="material-icons">airport_shuttle</i>
          </div>
          <div>
            <h6>Quick Delivery</h6>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        <div className='whyUsSingle'>
          <div className='whyUsIconContainer'>
            <i className="material-icons">credit_card</i>
          </div>
          <div>
            <h6>Pay with Ease</h6>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        <div className='whyUsSingle'>
          <div className='whyUsIconContainer'>
            <i className="material-icons">euro_symbol</i>
          </div>
          <div>
            <h6>Best Prices</h6>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        <div className='whyUsSingle'>
          <div className='whyUsIconContainer'>
            <i className="material-icons">security</i>
          </div>
          <div>
            <h6>Secure Payment</h6>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
