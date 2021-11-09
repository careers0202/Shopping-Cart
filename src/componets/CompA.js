import React, { Component } from 'react';
import OutPut from './OutPut';

class CompA extends Component {
    constructor() {
        super();
        this.state = { // initial state
            name: 'SignOut'
        }
    }



    handleChange() {
        this.setState({
            name: 'Bye'
        })
    }

    render() {
        return (
            <div>
                <OutPut
                    displayText={this.state.name}
                    toggleText={() => this.handleChange()}
                />
            </div>
        )
    }
}

export default CompA;
