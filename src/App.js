import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './Header';
import Timer from './Timer';
import Countdown from './Countdown';
import Custom from './Form';
import CustomCountdown from './CustomCountdown';

// document.body.style.overflow = "hidden"

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="App-body">
            <Switch>
              <Route exact path="/" component={CustomCountdown} />
              <Route exact path="/timers" component={Countdown}/>
              <Route path="/stopwatch" component={Timer}/>
              <Route path="/custom" component={Custom}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
