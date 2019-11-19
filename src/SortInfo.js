import React from 'react'
import './SortInfo.css'
export default function SortInfo({ data }) {
  const { complexities, link, desc, name } = data
  return (
    <div className='sort-info'>
      <div className='sort-title'>
        <a href={link}>
          {name}
        </a>
      </div>
      <Complexities {...complexities} />
      <div className='sort-desc'>
        {desc}
      </div>

    </div>
  )
}

const Complexities = ({ best, average, worst }) => {
  return (
    <div className='sort-complexities'>
      <div className='sort-complexities-header'>
        <span>Best</span>
        <span>Average</span>
        <span>Worst</span>
      </div>
      <div className='sort-complexities-row'>
        <span className='best'>{best}</span>
        <span className='average'>{average}</span>
        <span className='worst'>{worst}</span>
      </div>
    </div>
  )
}
