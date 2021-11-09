import React, { Component } from 'react'

export default class todo extends Component {
    constructor() {
        super();
        this.state = {
            inputVal: '',
            list: ['wak up early', 'go to ofc']
        }
    }

    handleAdd() {
        this.state.list.push(this.state.inputVal)
        this.setState({
            list: this.state.list
        })
    }

    render() {
        return (
            <div>
                <input /> <button>add</button>

            </div>
        )
    }
}
