import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Stopwatch from './Stopwatch';
import Countdown from './Countdown';
import Form from './Form';
import CustomCountdown from './CustomCountdown';
import Footer from './Footer';

import { Icon } from 'react-icons-kit'
import { home2 } from 'react-icons-kit/icomoon';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/countdown" component={Countdown}/>
              <Route path="/stopwatch" component={Stopwatch}/>
              <Route path="/form" component={Form}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
