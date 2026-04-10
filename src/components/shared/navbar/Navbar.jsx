import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {

  const links = <>
    <li>
      <NavLink to={"/"} className={({ isActive }) =>
        `font-semibold px-4 py-2 rounded-lg transition-all ${isActive ? "text-[#23BE0A] border border-[#23BE0A]" : "hover:text-[#23BE0A]"}`
      }>Home</NavLink>
    </li>
    <li>
      <NavLink to={"/books"} className={({ isActive }) =>
        `font-semibold px-4 py-2 rounded-lg transition-all ${isActive ? "text-[#23BE0A] border border-[#23BE0A]" : "hover:text-[#23BE0A]"}`
      }>Listed Books</NavLink>
    </li>
    <li>
      <NavLink to={"/page-to-read"} className={({ isActive }) =>
        `font-semibold px-4 py-2 rounded-lg transition-all ${isActive ? "text-[#23BE0A] border border-[#23BE0A]" : "hover:text-[#23BE0A]"}`
      }>Page to Read</NavLink>
    </li>
  </>

  return (
    <div className='bg-transparent backdrop-blur-lg sticky top-0 z-50'>
      <nav className="navbar container mx-auto py-4 px-4 lg:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 shadow-xl space-y-2">
              {links}
            </ul>
          </div>
          <a className="text-2xl md:text-3xl font-extrabold text-[#131313] cursor-pointer">Book Vibe</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-2 md:gap-4">
          <button className="btn bg-[#23BE0A] hover:bg-[#1fa308] text-white border-none min-h-0 h-10 md:h-12 px-4 md:px-7 text-sm md:text-lg rounded-lg">Sign In</button>
          <button className="btn bg-[#59C6D2] hover:bg-[#4ab5c1] text-white border-none min-h-0 h-10 md:h-12 px-4 md:px-7 text-sm md:text-lg rounded-lg">Sign Up</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar