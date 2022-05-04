import { Stack } from '@mui/material'
import React from 'react'
import Leftbar from "../../components/leftbar/Leftbar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

const Home = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-between">
        <Leftbar />
        <Feed />
        <Rightbar />
    </Stack>
  )
}

export default Home