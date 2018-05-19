import React, { Component } from 'react';
import store, { addInterval } from './store';

export default class Interval extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: '',
      repeats: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    const color = document.getElementsByClassName('selectedColor').length ?
      document.getElementsByClassName('selectedColor').innerText : 'interval';

    store.dispatch(addInterval({
      duration: this.state.duration,
      color
    }));


  }

  render() {
    const repeats = this.state.repeats;

    return (
      <div>
        <div className="form-left">
          <form
            onSubmit={this.handleSubmit}
          >
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
          <form
            onSubmit={(e) => {
              this.setState({repeats: ''})
              return this.props.handleRepeats(e, repeats)
            }}
          >
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
