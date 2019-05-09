import React from 'react';
import './DataHolder.css';

let biggestMax = -Infinity;

const DataHolder = props => {
  const arr = Array.from(props.values);
  const max = Math.max(...arr)
  if (max > biggestMax) {
    biggestMax = max;
  }
  return (
    <div id='data-holder'>
      {arr.map((d, idx) => {

        const H = d * 360 / biggestMax
        const height = d / biggestMax * 100
        return (
          <div className='data' key={idx} style={{ height: `${height}%`, backgroundColor: `hsl(${H}, 100%, 50%)` }}></div>
        )
      })}
    </div>
  )
}

export default DataHolder;

