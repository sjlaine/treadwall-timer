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
      <div className="route-color">
        <h1>
          Create a Custom Timer
        </h1>
        <h3>Route Color:</h3>
        <div>
          <button
            className="red-btn"
            onClick={this.handleClick}
          >
            RED
          </button>
          <button
            className="yellow-btn"
            onClick={this.handleClick}
          >
            YELLOW
          </button>
          <button
            className="green-btn"
            onClick={this.handleClick}
          >
            GREEN
          </button>
          <button
            className="blue-btn"
            onClick={this.handleClick}
          >
            BLUE
          </button>
          <button
            className="purple-btn"
            onClick={this.handleClick}
          >
            PURPLE
          </button>
          <button
            className="black-btn"
            onClick={this.handleClick}
          >
            BLACK
          </button>
          <button
            className="white-btn"
            onClick={this.handleClick}
          >
            WHITE
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
