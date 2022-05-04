import styled from '@emotion/styled'
import { AppBar, Badge, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'
import CropFreeIcon from '@mui/icons-material/CropFree';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Box } from '@mui/system';
import { Scale } from '@mui/icons-material';


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
  return (
    <AppBar position="sticky" sx={{bgcolor : "white"}} elevation={1}>
      <StyledToolbar>
        <Typography variant='h6' color="black" sx={{display : { xs:"none", sm : "block" }}} > Twistagram </Typography>
        <InstagramIcon sx={{display : { xs:"block", sm : "none" }, color:"black", transform : "Scale(1.4)" }} style={{fill:"blueviolet"}} />
        <Search> <InputBase placeholder="Search Twists" /> </Search>
        <Icons>
          <Badge badgeContent={9} color="secondary">
            <ChatBubbleOutlineOutlinedIcon sx={ { color:"black", transform : "Scale(1.07)"} } />
          </Badge>
          <LogoutOutlinedIcon sx={ { color:"black", transform : "Scale(1.1)"}} />
        </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar