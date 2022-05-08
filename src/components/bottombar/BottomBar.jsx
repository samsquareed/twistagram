import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const BottomBar = () => {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height:"3.3rem" }} elevation={3}>
    <BottomNavigation
        sx={{color:"black"}}
    >
      <BottomNavigationAction sx={{color:"black", transform : "scale(1.2)"}} label="Homepage" icon={<HomeIcon />} />
      <BottomNavigationAction sx={{color:"black", transform : "scale(1.2)"}} label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction sx={{color:"black", transform : "scale(1.1)"}} label="Reels" icon={<OndemandVideoIcon />} />
      <BottomNavigationAction sx={{color:"black", transform : "scale(1.2)"}} label="Likes" icon={<FavoriteBorderIcon />} />
      {
        <Link to="/profile" >
          <BottomNavigationAction sx={{color:"black", transform : "scale(1.2)"}} label="Profile" icon={<AccountCircleIcon />} />
        </Link>
      }
    </BottomNavigation>
  </Paper>
  )
}

export default BottomBar