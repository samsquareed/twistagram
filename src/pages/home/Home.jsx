import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Leftbar from "../../components/leftbar/Leftbar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import {GetAllPosts} from "../../actions/posts"
import { useDispatch } from 'react-redux'
import BottomBar from '../../components/bottombar/BottomBar'

const Home = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(GetAllPosts())
  },[])


  return (
    <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <Feed />
        <Rightbar />
        <BottomBar />
    </Stack>
  )
}

export default Home