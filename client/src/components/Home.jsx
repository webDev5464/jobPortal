import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/thunk/authThunks'
import Navbar from './layouts/Navbar'

const Home = () => {
  let dispatch = useDispatch()


  return (
    <div>
      <Navbar />
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </div>
  )
}

export default Home
