import React from 'react';

const Controls = (props) => {
  return (
    <div>
      <button onClick={props.start}>Start</button>
      <button onClick={props.reset}>Reset</button>
      <select value={props.sort} onChange={e => props.changeSort(e.target.value)}>
        {props.sorts.map((s, idx) => <option value={idx} key={s.name}>{s.name}</option>)}
      </select>
    </div>
  )
}

export default Controls
