import React, { Component } from 'react';
import RouteColor from './RouteColor';
import Interval from './Interval';
import IntervalChunk from './IntervalChunk';
import NewTimer from './NewTimer';

// import store, { addInterval, addRepeats } from './store';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      repeats: null,
      timer: [],
      newTimer: []
    };

    this.handleRepeats = this.handleRepeats.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event, duration) {
    event.preventDefault();

    const color = document.getElementsByClassName('selectedColor').length ?
    document.getElementsByClassName('selectedColor')[0].innerText : 'N/A';

    let timeArr = duration.split(':');
    timeArr = timeArr.map(el => {
      if (el.length === 1) el = '0' + el;
      return el;
    })

    let time;
    if (timeArr.length === 1) time = '00:00:' + timeArr.join('');
    if (timeArr.length === 2) time = '00:' + timeArr.join(':');
    if (timeArr.length === 3) time = timeArr.join(':');
    const interval = {time, color};

    this.setState({timer: [...this.state.timer, interval]});
  }

  render() {
    return (
      <div className="form">
        <div className="form-left">
          <RouteColor />
          <Interval
            handleRepeats={this.handleRepeats}
            handleSubmit={this.handleSubmit}
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
