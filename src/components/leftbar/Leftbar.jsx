import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

const Leftbar = () => {
  return (
    <Box bgcolor="whitesmoke" flex={2} p={2} sx={{display:{xs:"none", sm: "block"}}}>
      <List>
        <ListItem disablePadding>
          <ListItemButton href='#'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText> Home</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href='#'>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText> Profile</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href='#'>
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText> Pages</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href='#'>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText> contacts</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href='#'>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText> store</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href='#'>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText> settings</ListItemText>
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
  )
}

export default Leftbar