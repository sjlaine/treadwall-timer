import React from 'react';

const NewTimer = (props) => {
  let timer = props.timer;
  console.log(timer);

  return (
    <div>
      <h2>New Timer Here</h2>
    </div>
  );
}

export default NewTimer;
