import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className='flex justify-between items-center px-20 py-5 bg-black text-white'>
        <div className='font-bold text-xl'>
          <h1>Logo</h1>
        </div>

        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar