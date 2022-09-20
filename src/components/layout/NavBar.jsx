import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {



  return (
    <>
      <nav className='nav'>
        <div>
          <NavLink to='/' style={({ isActive }) => { return { color: isActive ? '' : '' } }}>Home</NavLink>
        </div>
        <div>
          <NavLink to='/about' style={({ isActive }) => { return { color: isActive ? 'red' : '' } }}>About</NavLink>
        </div>
        <div>
          <NavLink to='/contact' style={({ isActive }) => { return { color: isActive ? 'red' : '' } }}>Contact</NavLink>
        </div>
        <div>
          <NavLink to='/profile' style={({ isActive }) => { return { color: isActive ? 'red' : '' } }}>Profile</NavLink>
        </div>
        <div>
          <NavLink to='/post/mobile' style={({ isActive }) => { return { color: isActive ? 'red' : '' } }}>Post</NavLink>
        </div>
        <div>
          <NavLink to='/login' style={({ isActive }) => { return { color: isActive ? 'red' : '' } }}>LogIn</NavLink>
        </div>

      </nav>
      <Outlet />
    </>

  )
}

export default NavBar