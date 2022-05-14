import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Button, IconButton, InputBase, Paper, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
// import CropFreeIcon from '@mui/icons-material/CropFree';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Box } from '@mui/system';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

const StyledToolbar = styled(Toolbar)({
    display : "flex",
    justifyContent : "space-between",
    // backgroundColor : "whitesmoke"
})

const Search = styled('div')({
  // backgroundColor:"whitesmoke",
  padding : "0 10px",
  borderRadius : "50px",
  width:"40%"
})

const Icons = styled(Box)({
  display : 'flex',
  gap : "20px",
  alignItems : "center",
  // justifyContent : "center"
})


const SearchBar = () =>{
  return(
    <Paper
      elevation={0}
      sx={{ p: '2px 2px', paddingLeft:"0px", display: 'flex', alignItems: 'center', width: 150}}
    >
      <InputBase
        sx={{ ml: 1, flex: 4 }}
        placeholder="Search Twistagram "
        inputProps={{ 'aria-label': 'search Twistagram' }}
      />
      {/* <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton> */}
    </Paper>
  )
}


const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const nevigate = useNavigate()
  // const location = useLocation()

  const handleLogout = (e) =>{
    localStorage.clear()
    setTimeout(()=>{
      nevigate("/login")
    }, 100)
  }

  return (
    <AppBar position="sticky" sx={{bgcolor : "white"}} elevation={0}>
      <StyledToolbar>
        {/* {!user && <Typography variant='h4' color="black" sx={{display : { xs:"block", sm : "block" }, fontFamily:"Grand Hotel"}} > Twistagram </Typography>} */}
        
        <Box sx={{display:"flex", alignItems:"center"}}>
        {
          user ?
          (<Link to="/" style={{textDecoration:"none"}} >
          {<Typography variant='h4' color="black" sx={{display : { xs:"none", sm : "block" }, fontFamily:"Grand Hotel"}} > Twistagram </Typography>}
        </Link>)
        :
        <Link to="/login" style={{textDecoration:"none"}}  >
          {<Typography variant='h4' color="black" sx={{display : { xs:"none", sm : "block" }, fontFamily:"Grand Hotel"}} > Twistagram </Typography>}
        </Link>
        }
        <KeyboardArrowDownIcon sx={{display : { xs:"none", sm : "block" },color:"black"}} />
        </Box>
        
        {
          user ?
          (<Link to="/" >
          {user && <InstagramIcon sx={{display : { xs:"block", sm : "none" }, color:"black", transform : "Scale(1.4)", pr:"2px" }} style={{fill:"blueviolet"}} />}
        </Link>)
        :
        <Link to="/login" >
          {user && <InstagramIcon sx={{display : { xs:"block", sm : "none" }, color:"black", transform : "Scale(1.4)", pr:"2px" }} style={{fill:"blueviolet"}} />}
        </Link>
        }
        {user && <SearchBar/> }
        {/* {user && location.pathname !== '/newpost' && <SearchBar/> } */}
        <Icons>
          {
            user && 
            <>
              <Link to="/newpost">
              <AddIcon sx={ { color:"black", transform : "Scale(1.3)"} }  />
              </Link>
              {/* <Badge badgeContent={9} color="secondary">
                <ChatBubbleOutlineOutlinedIcon sx={ { color:"black", transform : "Scale(1.07)"} } />
              </Badge> */}
              {
                <Link to="/profile" >
                  <Avatar sx={{transform : "scale(0.9)"}} src={user?.result?.profilePicture} />
                </Link>
              }
              <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} onClick={handleLogout}>
              <LogoutOutlinedIcon sx={ { color:"black", transform : "Scale(1.1)"}} />
              </Button>
            </>
          }
        </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar