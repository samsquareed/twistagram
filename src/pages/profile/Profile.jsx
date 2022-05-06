import { Avatar, Card, CardActions, CardContent, CardHeader, Container, Grid, IconButton, ImageList, ImageListItem, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Grid3x3 } from '@mui/icons-material';
import styled from '@emotion/styled';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import BottomBar from '../../components/bottombar/BottomBar';
import { Box } from '@mui/system';

const ProfilePage = () =>{

  const user = JSON.parse(localStorage.getItem("user"))

  return(
    <Box  >
      <Card elevation={0} sx={{padding:'0.5rem'}}>
      <CardHeader 
        avatar={
          <Container>
            <Avatar src={user.profilePicture} sx={{transform:"scale(2)"}} />
            {/* <Typography paddingTop="2rem" paddingLeft="0" > {`${user.firstName}`}  </Typography> */}
          </Container>
        }
        action={
          <CardActions>
            <IconButton sx={{display:"flex", flexDirection:"column"}} aria-label="likes">
              <Typography>{9}</Typography>
              <Typography variant='h6' color="black" fontSize="0.8rem" fontWeight="400" marginLeft="0.3rem" > Posts </Typography>
            </IconButton>
            <IconButton sx={{display:"flex", flexDirection:"column"}} aria-label="likes">
            <Typography>{user?.followers.length}</Typography>
              <Typography variant='h6' color="black" fontSize="0.8rem" fontWeight="400" marginLeft="0.3rem" > Followers </Typography>
            </IconButton>
            <IconButton sx={{display:"flex", flexDirection:"column"}} aria-label="likes">
            <Typography>{user?.followings.length}</Typography>
              <Typography variant='h6' color="black" fontSize="0.8rem" fontWeight="400" marginLeft="0.3rem" > Followings </Typography>
            </IconButton>
          </CardActions>
        }
      />
      <CardContent sx={{paddingTop :"1", paddingLeft : "0.4rem"}}>
        <Typography variant="p" color="black">
        {`${user.firstName} ${user.lastName}`} 
        </Typography>
      </CardContent>

      {/* <Grid container columns={{ xs: 6}}>
      {Array.from(Array(9)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <img src={user.profilePicture} />
    </Grid>
  ))}
</Grid> */}
    <ImageList sx={{ width: 370}} cols={3} rowHeight={140}>
    {Array.from(Array(15)).map((item, key) => (
    <ImageListItem key={key}>
      <img
        src={`${user.profilePicture}`}
        srcSet={`${user.profilePicture}`}
        alt={user.userName}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>

    </Card>
    </Box>
  )
}

const Profile = () => {

  return (

    <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <ProfilePage />
        <Rightbar />
        <BottomBar />
    </Stack>

    
  )
}

export default Profile
