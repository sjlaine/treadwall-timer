import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Treadwall Timer</h1>
        </header>
        <Timer />
        <Footer />
      </div>
    );
  }
}
