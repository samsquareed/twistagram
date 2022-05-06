import React from 'react'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, TextField, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import moment from 'moment';
import { Box } from '@mui/system';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';

const Post = ({post}) => {

  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div>
    <Card sx={{marginTop : 1, marginBottom : 2, borderRadius:"15px"}} elevation={0}>
      <CardHeader
        avatar={
          <Link to={`/profile/${post.userId}`} >
            <Avatar src={post.postersPic} />
          </Link> 
        }
        action={
          <>
          <IconButton aria-label="settings">
            {
              user._id === post.userId ?
            <DeleteOutlineOutlinedIcon sx={{paddingRight :"0.1rem", color:"black"}} />
            :
            <Button variant="outlined" size="small"  color='info'>
            follow
            </Button>
            }
          </IconButton>
          <IconButton>
            <MoreVertIcon sx={{color:"black", paddingLeft : "0.3rem", transform : "scale(1.1)"}} />
          </IconButton>
          </>
        }
        title= {<Typography color="black" fontWeight="500" fontSize="0.9rem"> {post.name} </Typography>}
        subheader= {moment(post.createdAt).fromNow()}
      />
      <CardMedia
        sx={{borderRadius:"3px"}}
        component="img"
        height="450"
        image={post.image}
        alt="image-loading"
      />
      <CardContent sx={{paddingTop :"1", paddingLeft : "0.4rem"}}>
        <Typography variant="body2" color="black">
          <b style={{fontSize : "0.9rem"}}> {post.name} </b> {post.caption}
        </Typography>
      </CardContent>

      {/* <CardContent sx={{padding:"0",paddingLeft : "0.5rem", paddingRight:"0.5rem", margin:"0"}}>
      <Box display="flex">
      <TextField sx={{ width:"100%"}}
          id="standard-helperText"
          placeholder='Leave a comment ....'
          variant="standard"
        />
        <Button sx={{fontSize:"0.8rem"}}>comment</Button>
      </Box>
      </CardContent> */}

      <CardContent sx={{padding:"0",paddingRight:"0.5rem", margin:"0"}}>
        <Box display="flex">
        <TextField sx={{ width:"100%"}}
            id="standard-helperText"
            placeholder=' comment feature not yet available'
            variant="standard"
          />
          <Button sx={{fontSize:"0.8rem"}}>comment</Button>
        </Box>
      </CardContent>

      <CardActions disableSpacing sx={{justifyContent : 'space-between', padding : "0"}}>
        <Box>
        <IconButton aria-label="likes">
          <FavoriteBorderIcon style={{fill:"red"}} sx={{transform : "Scale(1.1)"}} />
          <Typography variant='h6' color="black" fontSize="1rem" fontWeight="400" marginLeft="0.3rem" > {post.likes.length} likes </Typography>
        </IconButton>
        <IconButton aria-label='comments'>
          <ChatBubbleOutlineIcon sx={{fill : "blue"}} />
          <Typography variant='h6' color="black" fontSize="1rem" fontWeight="400" marginLeft="0.3rem" > {0} comments </Typography>
        </IconButton>
        </Box>
        <Box>
        <IconButton aria-label="share">
          <ShareIcon sx={{fill : "green"}} />
          <Typography variant='h6' color="black" fontSize="1rem" fontWeight="400" marginLeft="0.3rem" > {0} shares </Typography>
        </IconButton>
        </Box>
      </CardActions>
    </Card>
    </div>
  )
}

export default Post