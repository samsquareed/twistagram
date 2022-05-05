import { Stack } from '@mui/material'
import React, { useEffect } from 'react'
import Leftbar from "../../components/leftbar/Leftbar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import {GetAllPosts} from "../../actions/posts"
import { useDispatch } from 'react-redux'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(GetAllPosts())
  },[dispatch])


  return (
    <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <Feed />
        <Rightbar />
    </Stack>
  )
}

export default Home