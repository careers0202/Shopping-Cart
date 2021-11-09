import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function List() {
    const initialList = [
        {
            type: 'SRI KRISHNA TRAVELS',
            time: '8:30 - 9:30',
            price: '780'
        },
        {
            type: 'GO TOUR TRAVELS AND HOLIDAYS',
            time: '9:00 - 9:30',
            price: '1080'
        },
        {
            type: 'Orange Travels',
            time: '7:30 - 8:30',
            price: '600'
        }
    ]
    const [buslist, setList] = useState(initialList)
    const { source, destination } = useParams();
    return (
        <div className="container list">
            <h5>{`Availabe Buses From ${source} to ${destination}`}</h5>
            {buslist.map(bus => (
                <div className="list-item p-4 m-2">
                    <b>{bus.type}</b>
                    <div className="d-flex justify-content-between">
                        <div>
                            <span> Time: {bus.time}</span>
                            <span>
                                <i class="fas fa-camera"></i>
                            </span>
                            <h6 className="mt-2">Price: ${bus.price}</h6>
                        </div>
                        <button
                            type="button"
                            className="btn btn-danger h-50"
                            onClick={() => this.handleBook()}
                        >
                            Book Ticket
                        </button>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default List
