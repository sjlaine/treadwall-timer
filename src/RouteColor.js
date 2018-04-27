import React, { Component } from 'react';

export default class RouteColor extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const selectedEls = [...document.getElementsByClassName('selectedColor')];
    selectedEls.forEach(el => el.classList.remove('selectedColor'));
    event.target.classList.add('selectedColor');
  }

  render() {
    return (
      <div>
        <h1>
          Create a Custom Timer
        </h1>
        <h3>Route Color:</h3>
        <div>
          <button
            className="red-btn"
            onClick={this.handleClick}
          >
            Red
          </button>
          <button
            className="yellow-btn"
            onClick={this.handleClick}
          >
            Yellow
          </button>
          <button
            className="green-btn"
            onClick={this.handleClick}
          >
            Green
          </button>
          <button
            className="blue-btn"
            onClick={this.handleClick}
          >
            Blue
          </button>
          <button
            className="rest-btn"
            onClick={this.handleClick}
          >
            Rest
          </button>
        </div>
      </div>
    )
  }
}
