import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <h1>
          Create a Custom Timer
        </h1>
        <h3>Route Color:</h3>
        <button className="red-btn">Red</button>
        <button className="yellow-btn">Yellow</button>
        <button className="green-btn">Green</button>
        <button className="blue-btn">Blue</button>
      </div>
    )
  }
}
