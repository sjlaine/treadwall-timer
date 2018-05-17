import React, { Component } from 'react';
import Countdown from './Countdown';

export default class CustomCountdown extends Component {
  constructor() {
    super();

    this.state = {
      timeArr: [
        {time: '00:00:03', color: 'yellow'},
        {time: '00:00:01', color: 'blue'},
        {time: '00:00:04', color: 'red'}]
    }
  }

  render() {
    return (
      <Countdown timeArr={this.state.timeArr} />
    )
  }
}
