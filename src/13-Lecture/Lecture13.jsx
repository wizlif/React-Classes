import React from 'react';
import {Provider} from "react-redux";
import store from "./redux/configureStore";
import Counter from "./Counter";

function Lecture13(props) {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    );
}

export default Lecture13;