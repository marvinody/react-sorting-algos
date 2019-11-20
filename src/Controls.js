import React from 'react';

const Controls = (props) => {
  return (
    <div>
      <button onClick={props.start}>Start</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  )
}

export default Controls
