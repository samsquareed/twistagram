import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';


const Leftbar = () => {
  return (
    <Box bgcolor="whitesmoke" flex={2} p={2} sx={{display:{xs:"none", sm: "block"}}}>
      <Box position="fixed">
      <List>
        <ListItem disablePadding>
          <ListItemButton href='#'>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText> Home</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href='#'>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText> Profile</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href='#'>
            <ListItemIcon>
              <ExpandMoreIcon />
            </ListItemIcon>
            <ListItemText> More</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Leftbar