import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Button, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'
// import CropFreeIcon from '@mui/icons-material/CropFree';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const StyledToolbar = styled(Toolbar)({
    display : "flex",
    justifyContent : "space-between",
    // backgroundColor : "whitesmoke"
})

const Search = styled('div')({
  backgroundColor:"whitesmoke",
  padding : "0 10px",
  borderRadius : "5px",
  width:"40%"
})

const Icons = styled(Box)({
  display : 'flex',
  gap : "20px",
  alignItems : "center",
  // justifyContent : "center"
})


const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const nevigate = useNavigate()

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
          {<Typography variant='h4' color="black" sx={{display : { xs:"block", sm : "block" }, fontFamily:"Grand Hotel"}} > Twistagram </Typography>}
        </Link>)
        :
        <Link to="/login" style={{textDecoration:"none"}}  >
          {<Typography variant='h4' color="black" sx={{display : { xs:"block", sm : "block" }, fontFamily:"Grand Hotel"}} > Twistagram </Typography>}
        </Link>
        }
        <KeyboardArrowDownIcon sx={{color:"black"}} />
        </Box>
        
        {/* {
          user ?
          (<Link to="/" >
          {user && <InstagramIcon sx={{display : { xs:"block", sm : "none" }, color:"black", transform : "Scale(1.4)" }} style={{fill:"blueviolet"}} />}
        </Link>)
        :
        <Link to="/login" >
          {user && <InstagramIcon sx={{display : { xs:"block", sm : "none" }, color:"black", transform : "Scale(1.4)" }} style={{fill:"blueviolet"}} />}
        </Link>
        } */}
        {/* {user && <Search> <InputBase placeholder="Search Twists" /> </Search>} */}
        <Icons>
          {
            user && 
            <>
              <Link to="/newpost">
              <AddAPhotoOutlinedIcon sx={ { color:"black", transform : "Scale(1.3)"} }  />
              </Link>
              {/* <Badge badgeContent={9} color="secondary">
                <ChatBubbleOutlineOutlinedIcon sx={ { color:"black", transform : "Scale(1.07)"} } />
              </Badge> */}
              {
                <Link to="/profile" >
                  <Avatar sx={{transform : "scale(0.9)"}} src={user?.profilePicture} />
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