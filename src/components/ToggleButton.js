import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function ToggleButton(props) {

    const [count, setCount] = useState(0)

    return (
        <div>
            <button className="btn btn-success" 
            onClick={() => {
                props.toggleContent();
                setCount(count + 1)}} style={{marginTop:'20px'}}>Display details</button>
                <br></br>
                <br></br>
            <h4 className="text-center">Total Button Click Count: {count}</h4>
            <hr></hr>
        </div>
    )
}

export default ToggleButton;
