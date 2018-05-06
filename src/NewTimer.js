import React from 'react';

const NewTimer = (props) => {
  const timer = props.newTimer;
  console.log('newTimer', timer);

  return (
    <div>
      <h2>New Timer Here</h2>
    </div>
  );
}

export default NewTimer;
