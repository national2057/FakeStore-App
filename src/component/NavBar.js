import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {

  const [navi, setNavi] = useState(false)
  const handleclick = () => setNavi(!navi)

  return (
    <>
      <div className='flex justify-between items-center px-20 py-4 bg-orange-400 text-black space-y-4 sticky top-0 z-10'>
        <div className='font-bold text-xl flex justify-evenly space-x-5'>
          <h1>NF</h1>
          <ul className='flex justify-center items-center space-x-5 text-lg'>
            <li><NavLink to='/'>Dashboard</NavLink></li>
          </ul>
        </div>

        <div className='flex space-x-5'>


          {/* MENU */}

          <ul className='hidden md:flex justify-evenly space-x-5 text-lg font-semibold'>
            <li className="relative group">
              <NavLink>Category</NavLink>
              <ul className="absolute z-50 opacity-0 pointer-events-none transition duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto w-max bg-slate-600 left-1">
                <li> <NavLink to='/cate/jewelery' className='hover:bg-pink-500 px-3'>Jewelery</NavLink></li>
                <li> <NavLink to='/cate/electronics' className='hover:bg-pink-500 px-3'>Electronics</NavLink></li>
                <li>  <NavLink to="/cate/men's-clothing" className="hover:bg-pink-500 px-3">Men's Clothing</NavLink></li>
                <li><NavLink to="/cate/women's-clothing" className='hover:bg-pink-500 px-3'>Women's Clothing</NavLink></li>
              </ul>
            </li>

            <li><NavLink to='/'>Login</NavLink></li>

          </ul>


          {/* ICONS */}
          <div onClick={handleclick} className='md:hidden z-10'>
            {!navi ? <FaBars /> : <FaTimes />}
          </div>


          {/* MOBILE MENU */}
          <ul className={
            !navi
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-2 text-[25px]'><NavLink onClick={handleclick} to='/'>Home</NavLink></li>

            <li className='py-2 text-[25px]'><NavLink onClick={handleclick} to=''>Latest</NavLink></li>
            <li className='py-2 text-[25px]'><NavLink onClick={handleclick} to=''>People</NavLink></li>

          </ul>

        </div>

      </div>
    </>
  )
}

export default NavBar