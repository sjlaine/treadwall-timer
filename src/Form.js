import React, { Component } from 'react';
import RouteColor from './RouteColor';
import Interval from './Interval';
import NewTimer from './NewTimer';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      repeats: null
    };

    this.handleRepeats = this.handleRepeats.bind(this);
  }

  handleRepeats(event, repeats) {
    event.preventDefault();
    this.setState({repeats});
  }

  render() {
    return (
      <div className="form">
        <div className="form-left">
          <RouteColor />
          <Interval
            handleRepeats={this.handleRepeats}
          />
        </div>
        <div className="form-right">
          <NewTimer
            repeats={this.state.repeats}
          />
        </div>
      </div>
    )
  }
}
