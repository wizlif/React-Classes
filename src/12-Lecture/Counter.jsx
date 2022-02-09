import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./redux/ducks/counter";

function Counter(props) {
    const count = useSelector((state) => state.counter.count)

    const dispatch = useDispatch();
    const handleIncrement = () => dispatch(increment())

    const handleDecrement = () => dispatch(decrement())

    return (
        <div className="bg-gray-200 p-5">
            <p className="text-md antialiased text-bold">Count {count}</p>
            <div className="py-3 flex flex-row space-between">
                <button onClick={handleIncrement}
                        className="btn rounded-lg px-4 py-2 bg-indigo-500 text-white mr-4">Increment
                </button>
                <button onClick={handleDecrement} className="btn rounded-lg px-4 py-2 bg-red-500 text-white">Decrement
                </button>
            </div>
        </div>
    );
}

export default Counter;