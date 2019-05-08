import React from 'react';
import './DataHolder.css';
const DataHolder = props => {
  const arr = Array.from(props.values);
  const max = Math.max(...arr)
  return (
    <div id='data-holder'>
      {arr.map((d, idx) => {

        const H = d * 360 / max
        const height = d / max * 100
        return (
          <div className='data' key={idx} style={{ height: `${height}%`, backgroundColor: `hsl(${H}, 100%, 50%)` }}></div>
        )
      })}
    </div>
  )
}

export default DataHolder;
