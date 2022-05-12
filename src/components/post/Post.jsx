import React from 'react'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, IconButton, TextField, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBrokenOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import moment from 'moment';
import { Box } from '@mui/system';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, LikePost, UnLikePost } from '../../actions/posts';
import { FollowUser, UnFollowUser } from '../../actions/others';

const Post = ({post}) => {

  const user = JSON.parse(localStorage.getItem("user"))
  const dispatch = useDispatch()
  const authuser = useSelector((state)=>state?.auth.authData)  // mistake : here i was writing state?.auth only which was wrong

  const handleDelete = (e,postid) =>{
    e.preventDefault()
    dispatch(deletePost(postid))
  }

  const handleLike = (e, postid, userid) =>{
    e.preventDefault()
    dispatch(LikePost(postid,userid))
  }

  const handleUnLike = (e,postid,userid) =>{
    e.preventDefault()
    dispatch(UnLikePost(postid,userid))
  }

  const handleFollow = (e, id, uid) =>{
    e.preventDefault()
    dispatch(FollowUser(id,uid))
  }

  const handleUnFollow = (e, id, uid) =>{
    e.preventDefault()
    dispatch(UnFollowUser(id,uid))
  }

  return (
    <div>
    <Card sx={{marginTop : 0, marginBottom :"2.3rem", borderRadius:"15px"}} elevation={0}>
      <CardHeader
        avatar={
          <Link to={`/profile/${post.userId}`} >
            <Avatar src={post.postersPic} />
          </Link> 
        }
        action={
          <>
            {
              user._id === post.userId ?
              <IconButton onClick={(e)=>handleDelete(e,post._id)} aria-label="settings">
                <DeleteOutlineOutlinedIcon sx={{paddingRight :"0.1rem", color:"black"}} />
              </IconButton>
              :
              (
                // authuser?.followings?.includes(post.userId) 
                user?.followings?.includes(post.userId) 
                ?
                <Button onClick={(e)=>handleUnFollow(e,post.userId, user?._id)} variant="outlined" size="small"  color='info'>
                  unfollow
                </Button>
                :
                <Button onClick={(e)=>handleFollow(e,post.userId, user?._id)} variant="outlined" size="small"  color='info'>
                  follow
                </Button>
              )
            }
          <IconButton>
            <MoreVertIcon sx={{color:"black", paddingLeft : "0.3rem", transform : "scale(1.1)"}} />
          </IconButton>
          </>
        }
        title= {<Typography color="black" fontWeight="500" fontSize="0.9rem"> {post.name} </Typography>}
        subheader= {moment(post.createdAt).fromNow()}
      />
      <CardMedia
        sx={{borderRadius:"1px", objectFit:"contain"}}
        // sx={{borderRadius:"1px", objectFit:"contain"}}
        component="img"
        height="100%"
        width="100%"
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
        <Box sx={{display:"flex"}}>
        <Box sx={{display:"flex", alignItems:"center"}}>
        {
          post.likes.includes(user._id) 
          ?
        <IconButton onClick={(e)=> handleUnLike(e,post._id, user?._id)} aria-label="likes">
          <ThumbDownOffAltOutlinedIcon style={{fill:"black"}} sx={{transform : "Scale(1.05)"}} />
        </IconButton>
        :
        <IconButton onClick={(e)=> handleLike(e,post._id, user?._id)} aria-label="likes">
          <FavoriteBorderIcon style={{fill:"red"}} sx={{transform : "Scale(1.1)"}} />
        </IconButton>
        }
        <Typography variant='h6' color="black" fontSize="1rem" fontWeight="400" marginLeft="0.3rem" > {post.likes.length} likes </Typography>
        </Box>
        <Box sx={{display:"flex", alignItems:"center"}}>
        <IconButton aria-label='comments'>
          <ChatBubbleOutlineIcon sx={{fill : "blue"}} />
        </IconButton>
        <Typography variant='h6' color="black" fontSize="1rem" fontWeight="400" marginLeft="0.3rem" > {0} comments </Typography>
        </Box>
        </Box>
        <Box sx={{display:"flex" , alignItems:"center"}}>
        <Box sx={{display:"flex", alignItems:"center"}}>
        <IconButton aria-label="share">
          <ShareIcon sx={{fill : "green"}} />
        </IconButton>
        </Box>
        <Typography variant='h6' color="black" fontSize="1rem" fontWeight="400" marginLeft="0.3rem" > {0} shares </Typography>
        </Box>
      </CardActions>
    </Card>
    </div>
  )
}

export default Post