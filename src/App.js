import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import NewPost from './pages/newpost/NewPost'
import Profile from './pages/profile/Profile'
import OthersProfile from './pages/profile/OthersProfile'

const LogicalLoginHome = () =>{
  const nevigate = useNavigate()

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(!user)
      nevigate("/login")
  }, [])
  
  return (
    <Routes>
      <Route exact path='/' element={ <Home /> } />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/newpost' element={<NewPost />} />
      <Route exact path='/profile' element={<Profile />} />
      <Route exact path='/profile/:id' element={<OthersProfile />} />
    </Routes>
  )
}


const App = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  
  return (
    <Router>
      <Box>
        <Navbar />
        <LogicalLoginHome />
    </Box>
    </Router>
  )
}

export default App