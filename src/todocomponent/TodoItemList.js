import React from 'react';
import './Todo.css';

function TodoItemList(props) {
    return (
        <div>
            <li className={(props.cl+1) % 5 === 0 ? 'background-blue' : 'background-red'}>{props.text}</li>
        </div>
    )
}

export default TodoItemList;
