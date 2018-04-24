import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import Countdown from './Countdown';
import Footer from './Footer';
import logo from './logo.png';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logo} />
          <h1 className="App-title">Treadwall Timer</h1>
        </header>
        <div className="timers">
          <Timer />
          <Countdown />
        </div>
        <Footer />
      </div>
    );
  }
}
