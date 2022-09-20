import React from 'react'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
  const navigate = useNavigate();
  let data = { 'name': 'raj' }
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={() => navigate('/logout', { state: data })}>LogOut</button>
    </div>

  )
}

export default Profile