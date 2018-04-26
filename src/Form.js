import React, { Component } from 'react';
import RouteColor from './RouteColor';
import Interval from './Interval';

export default class Form extends Component {
  render() {
    return (
      <div className="form">
        <div className="form-left">
          <RouteColor />
          <Interval />
        </div>
      </div>
    )
  }
}
