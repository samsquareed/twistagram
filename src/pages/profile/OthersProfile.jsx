import { Avatar, Card, CardActions, CardContent, CardHeader, Container, Grid, IconButton, ImageList, ImageListItem, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import BottomBar from '../../components/bottombar/BottomBar';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { userPostsForProfilePage } from '../../actions/posts';
import { useParams } from 'react-router-dom';
import { GetOtherUser, otherUserPostsForProfilePage } from '../../actions/others';

const ProfilePage = () =>{

  const user = JSON.parse(localStorage.getItem("user"))
  const [userPosts, setUserposts] = useState([])
  const dispatch = useDispatch()
  const userid = useParams().id

  const posts = useSelector((state)=> state.othersposts)
  const otheruserprofile = useSelector((state)=>state.otheuser)

  useEffect(()=>{
    dispatch(otherUserPostsForProfilePage(userid))
    setUserposts(posts)
    dispatch(GetOtherUser(userid))
  },[])

  return(
    <Box  >
      <Card elevation={0} sx={{padding:'0.5rem'}}>
      <CardHeader 
        avatar={
          <Container>
            <Avatar src={otheruserprofile?.authData?.profilePicture} sx={{transform:"scale(2)"}} />
            {/* <Typography paddingTop="2rem" paddingLeft="0" > {`${user.firstName}`}  </Typography> */}
          </Container>
        }
        action={
          <CardActions>
            <IconButton sx={{display:"flex", flexDirection:"column"}} aria-label="likes">
              <Typography sx={{color:"black"}} >{posts?.length}</Typography>
              <Typography variant='h6' color="black" fontSize="0.8rem" fontWeight="400" marginLeft="0.3rem" > Posts </Typography>
            </IconButton>
            <IconButton sx={{display:"flex", flexDirection:"column"}} aria-label="likes">
            <Typography sx={{color:"black"}}>{user?.followers.length}</Typography>
              <Typography variant='h6' color="black" fontSize="0.8rem" fontWeight="400" marginLeft="0.3rem" > Followers </Typography>
            </IconButton>
            <IconButton sx={{display:"flex", flexDirection:"column"}} aria-label="likes">
            <Typography sx={{color:"black"}}>{user?.followings.length}</Typography>
              <Typography variant='h6' color="black" fontSize="0.8rem" fontWeight="400" marginLeft="0.3rem" > Followings </Typography>
            </IconButton>
          </CardActions>
        }
      />
      <CardContent sx={{paddingTop :"1", paddingLeft : "0.4rem"}}>
        <Typography fontSize="0.9rem" variant="p" color="black">
        {`${otheruserprofile?.authData?.firstName} ${otheruserprofile?.authData?.lastName} `} 
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
    {posts?.map((post, key) => (
    <ImageListItem key={key}>
      <img
        // src={`${user.profilePicture}`}
        srcSet={`${post.image}`}
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

const OthersProfile = () => {

  return (

    <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <ProfilePage />
        <Rightbar />
        <BottomBar />
    </Stack>

    
  )
}

export default OthersProfile
