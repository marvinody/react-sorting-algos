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


const complexityClasses = {
  '1': 'great',
  'log(n)': 'good',
  'n': 'ok',
  'n log(n)': 'meh',
  'n^2': 'bad',
}

const Complexities = (props) => {
  return (
    <div className='sort-complexities'>
      <div className='sort-complexities-table'>
        <div className='sort-complexities-header'>
          <span>Best</span>
          <span>Average</span>
          <span>Worst</span>
        </div>
        <div className='sort-complexities-row'>
          {['best', 'average', 'worst'].map(w => {
            const complexityCase = props[w]
            const className = `${w} ${complexityClasses[complexityCase]}`
            return <span className={className}>{complexityCase}</span>
          })}
        </div>
      </div>
    </div>
  )
}
