import React, { useState } from 'react';

import { Link, useParams, useHistory } from 'react-router-dom'

import abhilogo from '../../abhi.png'

const NavBar = () => { // funcational component
    const [isOpen, setIsOpen] = useState(false);
    let history = useHistory();

    const toggle = () => setIsOpen(!isOpen);
    const handleClick = () => {
        history.push('/')
    }
    let { id } = useParams();
    return (
        <div className="mb-4">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/home"><img src={abhilogo} alt="abhibus logo" width="100" height="50" /></Link>
                    <div>
                        <span onClick={() => handleClick()}>Trains</span>
                        <span className="mx-2"><Link to="/mybookings">Mybookings</Link></span>
                        <span className="mx-2"><Link to="/flights">Flights</Link></span>
                    </div>
                </div>
            </nav>
        </div >
    );
}

export default NavBar;