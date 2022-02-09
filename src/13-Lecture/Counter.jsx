import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./redux/ducks/counter";
import {getUser} from "./redux/ducks/user";

function Counter(props) {

    const {count} = useSelector(state => state.counter)
    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
    }, [])

    console.log(user)


    const handleIncrement = () => dispatch(increment())
    const handleDecrement = () => dispatch(decrement())

    return (
        <div className="bg-gray-300 p-5">
            <p className="text-3xl text-pink-700 antialiased mb-3">
                {user && user.name} {user && user.email}: {count}
            </p>
            <div className="flex flex-row ">
                <button className="bg-red-600 rounded-2xl mr-3 p-3 text-white" onClick={handleDecrement}>Decrement
                </button>
                <button className="bg-green-600 rounded-2xl  p-3 text-white" onClick={handleIncrement}>Increment
                </button>
            </div>
        </div>
    );
}

export default Counter;