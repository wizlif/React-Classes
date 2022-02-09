import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

function Todo(props) {
    const [todo, setTodo] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(({data}) => setTodo(data))
            .catch((e) => console.log(e))
    }, []);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <p className="text-gray-700 text-base">
                    {todo.title}
                </p>
            </div>
        </div>
    );
}

export default Todo;