import React, {useState} from 'react';
import './Todo.css';
import 'bootstrap/dist/css/bootstrap.css';
import TodoItemList from './TodoItemList';

const TodoList = () => {

    const [inputList, setInputList] = useState("");
    const [item, setItem] = useState([]);
    const [count, setCount] = useState(0);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const addItem = () => {
        setItem((prevState) => {
            return [...prevState, inputList];
        });
        setInputList("");
    };

    return (
        <div className="main_div">
            <div className="center_div">
                <br></br>
                <h2>Add Item in List</h2>
                <br />
                <input type="text" placeholder="Add Item" value={inputList} onChange={itemEvent}></input>
                <button className="btnadd" onClick={() => {addItem(); setCount(count + 1)}}>ADD</button>

                <ol>
                    {item.map( (itemval, idx) => {
                       return <TodoItemList key= {idx} text={itemval} cl={idx}></TodoItemList>
                    })}
                </ol>
            </div>
        </div>
    )
}

export default TodoList
