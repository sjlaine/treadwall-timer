import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event.target);
    const activeEls = [...document.getElementsByClassName('active')];
    console.log(activeEls);
    activeEls.forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
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
        </div>
      </div>
    )
  }
}
