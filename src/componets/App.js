
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './Home/Home'
// import Offers from './Home/Offers';
import Trains from './Trains';
import Hotels from './Hotels';
import '../App.css'
import NavBar from './Home/NavBar';
import PageNotFound from './PageNotFound';
import Order from './order';
import BusList from './BusList';
import Login from './Login/Login';
import MyBookings from './MyBookings';
// import List from './List'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route path="/trains" component={Trains} />
            <Route path="/hotels" component={Hotels} />
            <Route path="/404" component={PageNotFound} />
            <Route path="/order/:bookingID" component={Order} />
            <Route path="/mybookings" component={MyBookings} />
            <Route path="/bus_search/:source/:destination" component={BusList} />
            <Route path="/navbar/:id" component={NavBar} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;