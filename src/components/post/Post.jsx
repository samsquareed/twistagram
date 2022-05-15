import React, { useState } from 'react'
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
import { CommentPost, deletePost, LikePost, UnLikePost } from '../../actions/posts';
import { FollowUser, UnFollowUser } from '../../actions/others';

const Post = ({post}) => {

  const user = JSON.parse(localStorage.getItem("user"))
  const dispatch = useDispatch()
  const authuser = useSelector((state)=>state?.auth.authData)  // mistake : here i was writing state?.auth only which was wrong
  const [comment, setComment] = useState("")


  const handleDelete = (e,postid) =>{
    e.preventDefault()
    dispatch(deletePost(postid))
  }

  const handleLike = (e, postid) =>{
    e.preventDefault()
    dispatch(LikePost(postid,))
  }

  const handleUnLike = (e,postid,) =>{
    e.preventDefault()
    dispatch(UnLikePost(postid,))
  }

  const handleFollow = (e, id) =>{
    e.preventDefault()
    dispatch(FollowUser(id))
  }

  const handleUnFollow = (e, id) =>{
    e.preventDefault()
    dispatch(UnFollowUser(id))
  }

  const handleComment =(e, postid)=>{
    e.preventDefault()
    const commentOnPost = {
      text : comment
    }
    dispatch(CommentPost(postid, commentOnPost))
    setComment("")
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
              user?.result?._id === post.userId ?
              <IconButton onClick={(e)=>handleDelete(e,post._id)} aria-label="settings">
                <DeleteOutlineOutlinedIcon sx={{paddingRight :"0.1rem", color:"black"}} />
              </IconButton>
              :
              (
                // authuser?.followings?.includes(post.userId) 
                user?.result?.followings?.includes(post.userId) 
                ?
                <Button onClick={(e)=>handleUnFollow(e,post.userId)} variant="outlined" size="small"  color='info'>
                  unfollow
                </Button>
                :
                <Button onClick={(e)=>handleFollow(e,post.userId)} variant="outlined" size="small"  color='info'>
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
      <CardContent sx={{paddingTop :"5px", paddingLeft : "0.1rem"}}>
        <Typography variant="body2" color="black">
          <b style={{fontSize : "0.9rem"}}> {post.name} </b> {post.caption}
        </Typography>
      </CardContent>

      <CardContent sx={{padding:"0",paddingRight:"0.5rem", margin:"0"}}>
      <Box sx={{ height:"auto", maxHeight:"4.4rem" ,overflowY:"scroll"}}>

        {
          post?.comments?.map((comment)=>{
            return(
              <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Box sx={{display:"flex", ml:"0.15rem"}}>
                  <Typography sx={{fontWeight:"bold", fontSize:"0.75rem"}}> {comment.posterName} </Typography>
                  <Typography sx={{fontSize:"0.75rem"}}>  &nbsp; {comment.text} </Typography>
                </Box>
              </Box>
            )
          })
        }
   
      </Box>
      
        <Box display="flex">
        <TextField sx={{ width:"100%", height:"8px", ml:"0.1rem"}}
            id="standard-helperText"
            placeholder='leave a comment'
            variant="standard"
            value={comment}
            onChange={(e)=> setComment(e.target.value)}
            InputProps={{ style: { fontSize: 12 , color:"black", fontWeight:"500"} }}
            InputLabelProps={{ style: { fontSize: 12, color:"blue" } }}
          />
          <Button onClick={(e)=> handleComment(e,post._id)} sx={{fontSize:"0.6rem"}}>comment</Button>
        </Box>
        
      </CardContent>

      <CardActions disableSpacing sx={{justifyContent : 'space-between', alignItems:"center", padding : "0"}}>
        <Box sx={{display:"flex"}}>
        <Box sx={{display:"flex", alignItems:"center"}}>
        {
          post.likes.includes(user?.result?._id) 
          ?
        <IconButton onClick={(e)=> handleUnLike(e,post._id)} aria-label="likes">
          <FavoriteBorderIcon style={{fill:"black", margin:"0px", padding:"0px"}} sx={{transform : "Scale(0.9)"}} />
        </IconButton>
        :
        <IconButton onClick={(e)=> handleLike(e,post._id)} aria-label="likes">
          <FavoriteBorderIcon style={{fill:"red"}} sx={{transform : "Scale(0.9)", fill:"red", m:"0"}} />
        </IconButton>
        }
        <Typography variant='h6' color="black" fontSize="0.8rem" fontWeight="400" marginLeft="0.3rem" > {post.likes.length} likes </Typography>
        </Box>
        {
          post.comments.length === 0  ? 
          <Box sx={{display:"flex", alignItems:"center", ml:"1rem"}} >
            <IconButton aria-label='comments'>
              <ChatBubbleOutlineIcon sx={{fill : "blue", transform : "Scale(0.8)"}} />
            </IconButton>
            <Typography variant='h6' color="black" fontSize="0.8rem" fontWeight="400" marginLeft="0.3rem" > no comments </Typography>
          </Box>  
          : <Box sx={{display:"flex", alignItems:"center"}}>
          <IconButton aria-label='comments'>
            <ChatBubbleOutlineIcon sx={{fill : "blue", transform : "Scale(0.8)"}} />
          </IconButton>
          <Typography variant='h6' color="black" fontSize="0.8rem" fontWeight="400" marginLeft="0.3rem" > {post.comments.length} {post.comments.length <= 1 ? 'comment' : "comments" }  </Typography>
          </Box>
        }
        </Box>
        <Box sx={{display:"flex" , alignItems:"center"}}>
        <Box sx={{display:"flex", alignItems:"center"}}>
        <IconButton aria-label="share">
          <ShareIcon sx={{fill : "green", transform : "Scale(0.8)"}} />
        </IconButton>
        </Box>
        <Typography variant='h6' color="black" fontSize="0.8rem" fontWeight="400" marginLeft="0.3rem" > {0} shares </Typography>
        </Box>
      </CardActions>
    </Card>
    </div>
  )
}

export default Post