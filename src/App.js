import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Stopwatch from './Stopwatch';
import Countdown from './Countdown';
import Form from './Form';
import Timers from './Timers';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/countdown"
                component={Countdown}
              />
              <Route path="/stopwatch" component={Stopwatch}/>
              <Route path="/form" component={Form}/>
              <Route path="/timers" component={Timers}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
