import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Todos from './Todos';
import Todo from './Todo';

function Lecture11(props) {
    return (
        <Routes>

            <Route path="/" element={<Todos/>}/>
            <Route path="/todo/:id" element={<Todo/>}/>

        </Routes>
    );
}

export default Lecture11;