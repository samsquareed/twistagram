import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <Router>
      <Box>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ user ? <Home /> : <Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
    </Box>
    </Router>
  )
}

export default App