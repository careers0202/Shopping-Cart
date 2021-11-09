import React, { Component } from 'react'
import NavBar from './NavBar';
import Form from './Form.jsx';
import './Home.css'
import Offers from './Offers';


export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="container d-flex justify-content-center">
                    <div>
                        <Form />
                        <Offers />
                    </div>
                </div>

            </div>
        )
    }
}
