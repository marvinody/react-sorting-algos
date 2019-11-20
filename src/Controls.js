import React from 'react';

const Controls = (props) => {
  return (
    <div>
      <button onClick={props.start}>Start</button>
      <button onClick={props.randomize}>Randomize</button>
      <button onClick={props.unsort}>Unsort</button>

    </div>
  )
}

export default Controls
