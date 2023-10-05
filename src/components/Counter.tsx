import React, {useState} from 'react';
import s from './Counter.modules.scss';

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className={s.counterContainer}>
            <button onClick={() => {
                setCount(count + 1)
            }}>+
            </button>
            <button onClick={() => {
                setCount(count - 1)
            }}>-
            </button>
            <div className={s.result}>{count}</div>
        </div>
    );
};

export default Counter;