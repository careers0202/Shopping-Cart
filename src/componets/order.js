import React, { Component } from 'react'

export default class order extends Component {
    render() {
        console.log(this.props.match)
        return (
            <div>
                Order view
            </div>
        )
    }
}
