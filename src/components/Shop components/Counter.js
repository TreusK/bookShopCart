import '../styles/Counter.css';


function Counter({plusMinus, counter, handleChange}) {
    return(
            <div className='Counter'>
                <div className="center-align hoverable" onClick={plusMinus.handleCounterMinus}>-</div>
                <input className='input center-align' type='text' inputMode='numeric' value={counter} onChange={handleChange}/>
                <div className="center-align hoverable" onClick={plusMinus.handleCounterPlus}>+</div>
            </div>
    )
}

export default Counter;