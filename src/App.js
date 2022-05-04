import { Box } from '@mui/material'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

const App = () => {
  return (
    <Router>
      <Box>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
    </Box>
    </Router>
  )
}

export default App