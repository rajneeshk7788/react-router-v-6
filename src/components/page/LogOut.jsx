import React from 'react'
import { useLocation } from 'react-router-dom'

const LogOut = () => {
    let location = useLocation();
    console.log(location);
  return (
    <div>
        <h1>LogOut</h1>
        <h2>{location.state.name} Loged Out</h2>
    </div>
  )
}

export default LogOut