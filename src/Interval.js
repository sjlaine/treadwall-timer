import React, { Component } from 'react';

export default class Interval extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: '',
      repeats: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    const repeats = this.state.repeats;
    const duration = this.state.duration;

    return (
      <div>
        <div className="form-left">
          <form onSubmit={(e) => this.props.handleSubmit(e, duration)}>
            <label>
              Duration
              (hours:minutes:seconds):
            </label>
            <br />
            <input
              type="text"
              placeholder="00:00:00"
              onChange={this.handleChange}
              value={this.state.duration}
              name="duration"
              required
            >
            </input>
            <button
              className="submit-btn"
              type="submit"
            >
              Add
            </button>
          </form>
          <br />
          <form onSubmit={(e) => this.props.handleRepeats(e, repeats)}>
            <label> Repeats: </label>
            <br />
            <input
              type="text"
              placeholder="0"
              onChange={this.handleChange}
              value={this.state.repeats}
              name="repeats"
              required
            >
            </input>
            <button
              className="submit-btn"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}
