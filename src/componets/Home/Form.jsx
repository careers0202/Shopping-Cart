import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { withRouter, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

// class ReactForm extends Component {
//     constructor() {
//         super();
//         this.state = {
//             source: '',
//             destination: '',
//             errMsg: '',
//         }
//         this.count = 0;
//         this.timer = '';
//     }

//     handleSearch() {
//         // this.props.history.push('/list')
//         const { source, destination, routesList } = this.state;


//         // go to bus listing
//         axios.get(`http://localhost:8081/routecheck/${source}/${destination}`)
//             .then(resp => {
//                 console.log({ resp })
//                 if (resp.status === 200) {
//                     this.props.history.push(`/bus_search/${source}/${destination}`)
//                 } else {

//                     this.setState({
//                         errMsg: resp.data
//                     })
//                 }
//             })
//     }

//     handleChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         })

//     }

//     render() {
//         console.log('Render');
//         const { errMsg, source, destination } = this.state;
//         return (
//             <div className="d-flex flex-column align-items-center">
//                 <h4>Book Bus Tickets</h4>
//                 <div>
//                     <span className="tab">Bus</span>
//                     <span className="tab">Trains</span>
//                     <span className="tab">Hotels</span>
//                 </div>
//                 <Form className="d-flex my-4 justify-content-between">
//                     <FormGroup>
//                         <Input
//                             type="text"
//                             name="source"
//                             id="exampleEmail"
//                             placeholder="Leave from"
//                             onChange={(event) => this.handleChange(event)}
//                         />
//                     </FormGroup>
//                     <FormGroup className="mx-2">
//                         <Input
//                             type="text"
//                             name="destination"
//                             id="examplePassword"
//                             placeholder="Going to"
//                             onChange={(event) => this.handleChange(event)}
//                         />
//                     </FormGroup>
//                     <Button type="button" onClick={(event) => this.handleSearch(event)}>Search</Button>
//                 </Form>
//                 {errMsg ? <p className="err">{errMsg}</p> : ''}
//             </div>
//         )
//     }
// }

// export default withRouter(ReactForm);

// withRouter ----> HOC


function ReactForm(props) {
    const [routeSearch, setRoute] = useState({}); // { source: val, destination: val }
    const [errMsg, setMsg] = useState('');

    const history = useHistory();

    const handleChange = (event) => { // FE
        setRoute({ ...routeSearch, [event.target.name]: event.target.value })

    }

    const handleSearch = async () => {
        const { source, destination } = routeSearch;
        const resp = await axios.get(`http://localhost:8081/routecheck/${source}/${destination}`);
        console.log({ resp })

        if (resp.status === 200) {
            history.push(`/bus_search/${source}/${destination}`)
        } else {
            setMsg(resp.data)// errMsg: resp.data
        }
    }

    console.log({ routeSearch });
    return (
        <div className="d-flex flex-column align-items-center">
            <h4>Book Bus Tickets</h4>
            <div>
                <span className="tab">Bus</span>
                <span className="tab">Trains</span>
                <span className="tab">Hotels</span>
            </div>
            <Form className="d-flex my-4 justify-content-between">
                <FormGroup>
                    <Input
                        type="text"
                        name="source"
                        id="exampleEmail"
                        placeholder="Leave from"
                        onChange={(event) => handleChange(event)}
                    />
                </FormGroup>
                <FormGroup className="mx-2">
                    <Input
                        type="text"
                        name="destination"
                        id="examplePassword"
                        placeholder="Going to"
                        onChange={(event) => handleChange(event)}
                    />
                </FormGroup>
                <Button type="button" onClick={(event) => handleSearch(event)}>Search</Button>
            </Form>
            {errMsg ? <p className="err">{errMsg}</p> : ''}
        </div>
    )
}

export default ReactForm;