import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/thunk/authThunks'

const Home = () => {
  let dispatch = useDispatch()


  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </div>
  )
}

export default Home
