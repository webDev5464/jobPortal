import React from 'react'
import './index.css'
import Navigation from './modules/Navigation'
import Loging from './Component/Loging'
import { Route, Routes } from 'react-router-dom'
import Register from './Component/Register'
import Jobs from './Component/Jobs'


const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='jobs' element={<Jobs/>}></Route>
        <Route path='login' element={<Loging />}> </Route>
        <Route path='register' element={<Register/>}></Route>
      </Routes>
    </>
  )
}

export default App
