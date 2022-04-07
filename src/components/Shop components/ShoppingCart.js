import '../styles/ShoppingCart.css';
import * as currency from 'currency.js';

//Needs:
// arr of obj to render elements
// set function to change said arr on Remove click
function ShoppingCart({shoppingCart, hideShoppingCart, handleRemove}) {

    let allTotal = shoppingCart.reduce((prevElem, elem) => (+elem.price.slice(1) * elem.amount) + prevElem, 0);
    return(
        <div id='cartTransparentContainer' onClick={hideShoppingCart}>
            <div id='cartContainer'>
                <h2>Your Shopping Cart</h2>
                <div id='shoppingCartInnerScrollableContainer'>
                {(shoppingCart.length == 0) 
                    ? <h3>Your Cart Is Empty</h3>
                    : shoppingCart.map((elem, index) => 
                    <div className="cartItem" key={'key'+index}>
                        <div className='left'>
                            <img src={elem.img}/>
                        </div>
                        <div className='middle left-align'>
                            <div>
                                <p>{elem.title}</p>
                                {(elem.amount > 1) ? <p>{elem.amount} items</p> : <p>{elem.amount} item</p> }
                                <p>Solo Price: {elem.price}</p>
                                <p>Total Price: ${+elem.price.slice(1) * elem.amount}</p>
                            </div>
                        </div>
                        <div className='right'>
                            <button className={'remove'+index+ ' btn red lighten-1'} onClick={handleRemove}>Remove</button>
                        </div>
                    </div>    
                )}
                <div className='allBooksTotal'>
                    <h2>Total: {currency(allTotal).format() || '$0'}</h2>
                    <button className='btn'>Buy</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;