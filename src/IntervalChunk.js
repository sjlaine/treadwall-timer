import React from 'react';
import { connect } from 'react-redux';

const IntervalChunk = (props) => {
  const intervals = props.intervals;

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
                Duration: {obj.duration}
              </h3>
            </div>
          )
        })
      }
    </h2>

  )
}

const mapStateToProps = function (state) {
  return {
    intervals: state.intervals
  };
};

const IntervalChunkContainer = connect(mapStateToProps)(IntervalChunk);

export default IntervalChunkContainer;
