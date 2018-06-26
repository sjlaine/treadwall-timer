import React, { Component } from 'react';
import db from './firestore';
import { addTimer } from './store';
import Footer from './Footer';

export default class Timers extends Component {
  constructor() {
    super();
    this.state = {};

    this.selectTimer = this.selectTimer.bind(this);
  }

  async componentDidMount() {
    let timers = [];
    // console.log(timerTitles);

    await db.collection('Timers')
      .get()
      .then(querySnapshot => querySnapshot.docs.map(doc => timers.push(doc.data())));

    this.setState({timers});
  }

  selectTimer(idx) {
    addTimer(this.state.timers[idx]);
  }

  render() {
    return (
      <div>
        {
          this.state.timers &&
          this.state.timers.map((timer, idx) => (
            <h1 key={idx} onClick={() => this.selectTimer(idx)}>{timer.title}</h1>
          ))
        }
        <Footer />
      </div>
    )
  }
}
