import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// export default class BusList extends Component {
//     constructor() {
//         super();
//         this.state = {
//             buslist: [],
//             msg: ''
//         }
//     }

//     componentDidMount() {
//         const { source, destination } = this.props.match.params;
//         axios.get(`http://localhost:8081/list/${source}/${destination}`)
//             .then(resp => {
//                 console.log({ resp })
//                 this.setState({
//                     buslist: resp.data
//                 })
//             })


//     }

//     handleBook(busdata) {
//         axios.post('http://localhost:8081/book', {
//             busdata
//         }).then((response) => {
//             console.log({ response });
//             this.setState({
//                 msg: response.data
//             })
//             // if (response.status === 200) {
//             //     this.props.history.push('/home')
//             // }
//         })
//     }

//     render() {
//         const { buslist, msg } = this.state;
//         console.log(this.props.match.params)
//         const { source, destination } = this.props.match.params;
//         return (
//             <div className="container list">
//                 <h5>{`Availabe Buses From ${source} to ${destination}`}</h5>
//                 <p className="text-success font-weight-bold">{msg}</p>
//                 {buslist.map(bus => (
//                     <div className="list-item p-4 m-2">
//                         <b>{bus.type}</b>
//                         <div className="d-flex justify-content-between">
//                             <div>
//                                 <span> Time: {bus.time}</span>
//                                 <span>
//                                     <i class="fab fa-google-pay"></i>
//                                 </span>
//                                 <h6 className="mt-2">Price: ${bus.price}</h6>
//                             </div>
//                             <button
//                                 type="button"
//                                 className="btn btn-danger h-50"
//                                 onClick={() => this.handleBook(bus)}
//                             >
//                                 Book Ticket
//                             </button>
//                         </div>

//                     </div>
//                 ))}
//             </div>
//         )
//     }
// }


function BusList(props) {
    const [buslist, setBusList] = useState([]);
    const [msg, setMsg] = useState('');
    const { source, destination } = useParams();

    useEffect(() => { // componentDidMount

        axios.get(`http://localhost:8081/list/${source}/${destination}`)
            .then(resp => {
                console.log({ resp })
                setBusList(resp.data)
            })

    }, [])

    return (
        <div className="container list">
            <h5>{`Availabe Buses From ${source} to ${destination}`}</h5>
            <p className="text-success font-weight-bold">{msg}</p>
            {buslist.map(bus => (
                <div className="list-item p-4 m-2">
                    <b>{bus.type}</b>
                    <div className="d-flex justify-content-between">
                        <div>
                            <span> Time: {bus.time}</span>
                            <span>
                                <i class="fab fa-google-pay"></i>
                            </span>
                            <h6 className="mt-2">Price: ${bus.price}</h6>
                        </div>
                        <button
                            type="button"
                            className="btn btn-danger h-50"
                            onClick={() => this.handleBook(bus)}
                        >
                            Book Ticket
                        </button>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default BusList;


        // API         Queries
// FE -----------> BE ------------> DataBase (DB)

//     <--------- BE URL ---> End point or API