import React from 'react';
import './DataHolder.css';
const DataHolder = props => {

  console.log(props.values)
  return (
    <div id='data-holder'>
      {Array.from(props.values).map((d, idx) => {
        const height = d * 100;
        return (
          <div className='data' key={idx} style={{ height: `${height}%` }}></div>
        )
      })}
    </div>
  )
}

export default DataHolder;
