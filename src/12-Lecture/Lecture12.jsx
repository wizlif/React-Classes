import React from 'react';
import Counter from "./Counter";
import {Provider} from 'react-redux';
import store from "./redux/configureStore";

function Lecture12(props) {
    return (
        <Provider store={store}>
            <div>
                <p>Main component</p>
                <Counter/>
            </div>
        </Provider>
    );
}

export default Lecture12;