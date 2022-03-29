import '../styles/ShoppingCart.css';

//Needs:
// arr of obj to render elements
// set function to change said arr on Remove click
function ShoppingCart({booksInCart, hideShoppingCart, handleRemove}) {
    return(
        <div id='cartTransparentContainer' onClick={hideShoppingCart}>
            <div id='cartContainer'>
                <h2>Your Shopping Cart</h2>
                {(booksInCart.length == 0) 
                    ? <h3>Your Cart Is Empty</h3>
                    : booksInCart.map((elem, index) => 
                    <div className="cartItem" key={'key'+index}>
                        <div className='left'>
                            <img/>
                        </div>
                        <div className='middle'>
                            <div>
                                <p>{elem.title}</p>
                                <p>Individual Price: {elem.soloPrice}</p>
                                <p>Total Price: {elem.soloPrice * elem.amount}</p>
                            </div>
                        </div>
                        <div className='right'>
                            <button className={'remove'+index} onClick={handleRemove}>Remove</button>
                        </div>
                    </div>    
                )}
            </div>
        </div>
    )
}

export default ShoppingCart;