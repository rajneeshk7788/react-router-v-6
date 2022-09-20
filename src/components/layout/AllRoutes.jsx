import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Contact from '../page/Contact'
import Home from '../page/Home'
import About from '../page/About'
import Profile from '../page/Profile'
import Post from '../page/Post'
import Login from '../page/Login'
import LogOut from '../page/LogOut'

const AllRoutes = () => {
  let isLogged = false;
  return (
    <>
      <Routes>
        <Route path='/' element={isLogged ? <Home /> : <Navigate to='/login' replace />} />
        <Route path='/about' element={isLogged ? <About /> : <Navigate to='/login' replace />} />
        <Route path='/contact' element={isLogged ? <Contact /> : <Navigate to='/login' replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<LogOut />} />
        <Route path='/profile' element={isLogged ? <Profile /> : <Navigate to='/login' replace />} />
        <Route path='/post' element={isLogged ? <Post /> : <Navigate to='/login' replace />} >
          <Route path=':category' element={<Post /> } />
          <Route index element={<Post /> } />
        </Route>
        <Route path='*' element={<h1>Error 404 Page not found !!</h1>} />
      </Routes>
    </>
  )
}

export default AllRoutes