import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import moment from 'moment';
import { Box } from '@mui/system';


const Post = ({post}) => {

  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div>
    <Card sx={{marginTop : 1, marginBottom : 2}}>
      <CardHeader
        avatar={
          <Avatar src='https://avatars.githubusercontent.com/u/101892240?v=4' />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title= {<Typography color="black" fontWeight="500" fontSize="0.9rem"> {`${user.firstName}.${user.lastName}`} </Typography>}
        subheader= {moment(post.createdAt).fromNow()}
      />
      <CardMedia
        component="img"
        height="380"
        image={post.image}
        alt="image-loading"
      />
      <CardContent sx={{paddingTop :"1", paddingLeft : "0.4rem"}}>
        <Typography variant="body2" color="black">
          <b style={{fontSize : "1rem"}}> {user.firstName} </b> {post.caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{justifyContent : 'space-between', padding : "0.1rem"}}>
        <Box>
        <IconButton aria-label="likes">
          <FavoriteBorderIcon style={{fill:"red"}}/>
          <Typography variant='h6' color="black" fontSize="1.1rem"> {`1.2M`} </Typography>
        </IconButton>
        <IconButton aria-label='comments'>
          <ChatBubbleOutlineIcon sx={{fill : "blue"}} />
        </IconButton>
        </Box>
        <Box>
        <IconButton aria-label="share">
          <ShareIcon sx={{fill : "green"}} />
        </IconButton>
        </Box>
      </CardActions>
    </Card>
    </div>
  )
}

export default Post