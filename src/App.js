import { Box, Stack } from '@mui/material'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Feed from './components/feed/Feed'
import Leftbar from './components/leftbar/Leftbar'
import Rightbar from './components/rightbar/Rightbar'

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Leftbar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App