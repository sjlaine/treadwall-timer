import React from 'react';

const IntervalChunk = (props) => {
  console.log(props)
  return (
    <h2>
      {
        props.timer[0] &&
        props.timer.map((obj, idx) => {
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
