import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./redux/ducks/counter";

function Counter(props) {
    const {count} = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const handleIncrement = () => dispatch(increment())
    const handleDecrement = () => dispatch(decrement())

    return (
        <div className="bg-gray-300 p-5">
            <p className="text-3xl text-pink-700 antialiased mb-3">
                Count: {count}
            </p>
            <div className="flex flex-row ">
                <button className="bg-red-600 rounded-2xl mr-3 p-3 text-white" onClick={handleDecrement}>Decrement</button>
                <button className="bg-green-600 rounded-2xl  p-3 text-white" onClick={handleIncrement}>Increment</button>
            </div>
        </div>
    );
}

export default Counter;