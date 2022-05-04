import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box bgcolor="whitesmoke" flex={2} p={2} sx={{display:{xs:"none", sm: "block"}}}>
      <Box position="fixed">
        <Typography variant='h5' fontWeight={100}  > people online   </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://wallpapercave.com/dwp1x/wp6105847.jpg" />
          <Avatar alt="Travis Howard" src="https://wallpapercave.com/wp/M0nhFIT.jpg" />
          <Avatar alt="Cindy Baker" src="https://wallpapercave.com/dwp1x/wp6105847.jpg" />
          <Avatar alt="Agnes Walker" src="https://wallpapercave.com/dwp1x/wp6105847.jpg" />
          <Avatar alt="Trevor Henderson" src="https://wallpapercave.com/dwp1x/wp6105847.jpg" />
        </AvatarGroup>
      
        <Box sx={{mt:6}}>
          <Typography>  page yet to be developed </Typography>
          <Typography variant='h6'> contact : developers </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Rightbar