import React from 'react';

const NewTimer = (props) => {
  const timer = props.newTimer;
  console.log('newTimer', timer);

  return (
    <div>
      {
        timer.map((interval, idx) => (
          <div key={idx}>
            <h2>{interval.color}</h2>
            <h2>{interval.time}</h2>
          </div>
        ))
      }
    </div>
  );
}

export default NewTimer;
