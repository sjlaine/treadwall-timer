import React from 'react';

const NewTimer = (props) => {
  console.log(props)
  return (
    <h2>
      {
        props.timer[0] &&
        props.timer.map((obj, idx) => {
          return (
            <div key={idx}>
              <h3>Duration: </h3>
              <h3>{obj.time}</h3>
              <h3>Repeats: </h3>
              <h3>{obj.repeats}</h3>
            </div>
          )
        })
      }
    </h2>

  )
}

export default NewTimer;
