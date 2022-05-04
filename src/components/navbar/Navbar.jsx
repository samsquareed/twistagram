import styled from '@emotion/styled'
import { AppBar, Badge, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'
import CropFreeIcon from '@mui/icons-material/CropFree';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Box } from '@mui/system';


const StyledToolbar = styled(Toolbar)({
    display : "flex",
    justifyContent : "space-between",
    // backgroundColor : "whitesmoke"
})

const Search = styled('div')({
  backgroundColor:"white",
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
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{display : { xs:"none", sm : "block" }}} > Twistagram </Typography>
        <CropFreeIcon sx={{display : { xs:"block", sm : "none" }}} />
        <Search> <InputBase placeholder="Search Twists" /> </Search>
        <Icons>
          <Badge badgeContent={9} color="error">
            <ChatBubbleOutlineOutlinedIcon />
          </Badge>
          <LogoutOutlinedIcon />
        </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar