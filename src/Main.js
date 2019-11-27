import React from 'react'
import NavBar from './NavBar'
export default function () {
  return (
    <div className='main-desc'>
      <p>Welcome to my sorting site</p>
      <p>This was initially made as an attempt to become more familiar with React but eventually I came back to it and someone said it looked cool and to flesh it out a bit more. So I spent some more time polishing up a few tiny things and here we go. The supported sorts are below</p>
      <p>For each sort, you'll have a short desc., link to wiki page, and some time complexities. Also (the main feature) is being able to see the sort occur live on a randomized dataset.</p>
      <p><a href='https://github.com/marvinody/react-sorting-algos'>If you're the kind of person who wants to look at the source, click here! All open source!</a></p>
      <NavBar></NavBar>
    </div>
  )
}
