import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import moment from 'moment';

const Post = ({post}) => {
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
        title="sammed.sankonatti"
        subheader= {moment(post.createdAt).fromNow()}
      />
      <CardMedia
        component="img"
        height="380"
        image={post.image}
        alt="image-loading"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{fill:"red"}}/>
          <Typography variant='h6'> {`1.2M`} </Typography>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  )
}

export default Post