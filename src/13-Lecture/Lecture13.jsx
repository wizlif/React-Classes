import React, {useEffect} from 'react';
import {Provider, useDispatch} from "react-redux";
import store from "./redux/configureStore";
import Counter from "./Counter";
import {getUser} from "./redux/ducks/user";

function Lecture13(props) {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    );
}

export default Lecture13;