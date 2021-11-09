import React, { Component } from 'react';
import axios from 'axios';

export default class MyBookings extends Component {
    constructor() {
        super();
        this.state = {
            bookings: []
        }
    }
    componentDidMount() {

        axios.get(`http://localhost:8081/mybookings`)
            .then(resp => {
                console.log({ resp })
                this.setState({
                    bookings: resp.data
                })
            })




    }

    handleUpdate = async (bookingid) => {
        console.log({ bookingid })

        const deleteresp = await axios.put(`http://localhost:8081/ticketupdate/${bookingid}`, {
            number: '8500554432'
        })
        console.log({ deleteresp });
        this.setState({
            bookings: deleteresp.data.data
        })
        console.log('hello')


    }

    handleDelete = (bookingid) => {
        console.log({ bookingid })
        axios.delete(`http://localhost:8081/ticketdelete/${bookingid}`)
            .then(deleteresp => {
                console.log({ deleteresp });
                this.setState({
                    bookings: deleteresp.data.data
                })
            })

        console.log('hello')
    }

    render() {
        const { bookings } = this.state
        return (
            <div>
                {bookings.map(bus => (
                    <div className="list-item p-4 m-2">
                        <h6>Booking ID:{bus.bookingid}</h6>
                        <b>{bus.type}</b>
                        <div className="d-flex justify-content-between">
                            <div>
                                <span> Time: {bus.time}</span>
                                <span>
                                    <i class="fab fa-google-pay"></i>
                                </span>
                                <h6 className="mt-2">Price: ${bus.price}</h6>
                            </div>
                            <div className="logos">
                                <span><i class="fas fa-eye"></i></span>
                                <span className="mx-2" onClick={() => this.handleUpdate(bus.bookingid)}><i class="fas fa-pen"></i></span>
                                <span onClick={() => this.handleDelete(bus.bookingid)}><i class="far fa-trash-alt"></i></span>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        )
    }
}


