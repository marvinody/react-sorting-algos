import React from 'react'
import { Link } from 'react-router-dom'
import sorts from './sorts'

export default function NavBar() {
  return (
    <div>
      <div>
        {Object.values(sorts).map(({ data: sort }) => (
          <Link to={'/' + sort.slug} key={sort.slug}>{sort.name}</Link>
        ))}

      </div>
    </div>
  )
}
