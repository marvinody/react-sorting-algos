import React from 'react';
import './DataHolder.css';
const DataHolder = props => {
  return (
    <div id='data-holder'>
      {Array.from(props.values).map((d, idx) => {

        const H = d * 360 / 100
        return (
          <div className='data' key={idx} style={{ height: `${d}%`, backgroundColor: `hsl(${H}, 100%, 50%)` }}></div>
        )
      })}
    </div>
  )
}

export default DataHolder;
