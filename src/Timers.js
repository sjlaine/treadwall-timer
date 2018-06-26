import React, { Component } from 'react';
import db from './firestore';
import Footer from './Footer';

export default class Timers extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    let timers = [];
    // console.log(timerTitles);

    await db.collection('Timers')
      .get()
      .then(querySnapshot => querySnapshot.docs.map(doc => timers.push(doc.data())));

    this.setState({timers});
  }

  render() {
    return (
      <div>
        {
          this.state.timers &&
          this.state.timers.map((timer, idx) => (
            <h1 key={idx}>{timer.title}</h1>
          ))
        }
        <Footer />
      </div>
    )
  }
}
