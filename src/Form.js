import React, { Component } from 'react';
import RouteColor from './RouteColor';
import Interval from './Interval';
import IntervalChunk from './IntervalChunk';
import NewTimer from './NewTimer';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      repeats: null,
      timer: [],
      newTimer: []
    };

    this.handleRepeats = this.handleRepeats.bind(this);
  }

  handleRepeats(event, repeats) {
    event.preventDefault();
    const intervalChunk = this.state.timer;
    let newTimer = [];

    while (repeats > 0) {
      newTimer.push(...intervalChunk);
      repeats--;
    }
    this.setState({timer: []});
    this.setState({newTimer});

    document.getElementsByClassName('selectedColor')[0].classList.remove('selectedColor');
  }

  render() {
    return (
      <div className="form">
        <div className="form-left">
          <RouteColor />
          <Interval
            handleRepeats={this.handleRepeats}
          />
          <IntervalChunk timer={this.state.timer} />
        </div>
        <div className="form-right">
          <NewTimer
            newTimer={this.state.newTimer}
          />
        </div>
      </div>
    )
  }
}
