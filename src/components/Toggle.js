import React, { Component } from 'react'
import ToggleButton from './ToggleButton';
import Text from './Text';
import 'bootstrap/dist/css/bootstrap.css';

class Toggle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             on : false,
        }
    }

    toggle = () => {
        this.setState({
            on : !this.state.on
        })
    }
    

    render() {
        return (
            <div>
                {this.state.on && (
                    <div>
                        <h1 className="text-center">Gemini Solutions Pvt. Ltd.</h1>
                        <Text></Text>
                    </div>
                )}
                <ToggleButton toggleContent={this.toggle}></ToggleButton>
            </div>
        )
    }
}

export default Toggle;
