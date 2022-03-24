import React, {useState, setState} from 'react';
import '../styles/Counter.css';


function Counter() {
    const [counter, setCounter] = useState(0);
    return(
            <div className='Counter'>
                <div className="teal">
                    <p className='center-align'>-</p>
                </div>
                <div className="indigo center-align">+</div>
            </div>
    )
}

export default Counter;