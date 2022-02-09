import React, {useEffect, useState} from 'react';
import axios from "axios";
import '../table.css';
import {useNavigate} from "react-router-dom";

function Todos(props) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/todos`)
            .then(({data}) => setTodos(data))
            .catch((e) => setTodos([]))
    }, []);

    function checkToggle(event) {

    }

    const navigate = useNavigate();

    /**
     *
     * @param {number} id
     */
    function gotTo(id) {
        navigate(`/todo/${id}`)
    }

    return (
        <div className="column">
            <div className="table-spacing-1">
                <div className="table-spacing-2">
                    <div className="table-bg">
                        <table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Completed</th>
                            </tr>
                            </thead>
                            <tbody>
                            {todos.map(({id, title, completed}, index) =>
                                <tr key={index} onClick={() => gotTo(id)}>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                    <td><input type="checkbox"
                                               className="checkbox"
                                               value={completed}
                                               checked={completed}
                                               onChange={checkToggle}/></td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todos;