import React from 'react';
import store from './store';

const IntervalChunk = () => {
  const intervals = store.getState().intervals;
  console.log('intervals from chunk', intervals);

  return (
    <h2>
      {
        intervals[0] &&
        intervals.map((obj, idx) => {
          return (
            <div key={idx}>
              <h3>
                Interval: {obj.color}
                <br />
                Duration: {obj.time}
              </h3>
            </div>
          )
        })
      }
    </h2>

  )
}

export default IntervalChunk;
