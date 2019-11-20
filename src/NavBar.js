import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div>
      <div>
        <Link to='/bubble-sort'>Bubble Sort</Link>
        <Link to='/merge-sort'>Merge Sort</Link>
      </div>
    </div>
  )
}
