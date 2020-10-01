import React, {useState} from 'react';
import './Todo.css';
import 'bootstrap/dist/css/bootstrap.css';
import TodoItemList from './TodoItemList';

const TodoList = () => {

    const [inputText, setInputText] = useState("");
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    const itemEvent = (event) => {
        setInputText(event.target.value);
    };

    const addItem = () => {
        setList((prevState) => {
            return [...prevState, inputText];
        });
        setInputText("");
    };

    return (
        <div className="main_div">
            <div className="center_div">
                <br></br>
                <h2>Add Item in List</h2>
                <br />
                <input type="text" placeholder="Add Item" value={inputText} onChange={itemEvent}></input>
                <button className="btnadd" onClick={() => {addItem(); setCount(count + 1)}}>ADD</button>

                <ol>
                    {list.map( (listItem, idx) => {
                       return <TodoItemList key= {idx} text={listItem} cl={idx}></TodoItemList>
                    })}
                </ol>
            </div>
        </div>
    )
}

export default TodoList
