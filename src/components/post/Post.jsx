import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = ({image}) => {
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
        subheader="May 4, 2022"
      />
      <CardMedia
        component="img"
        height="380"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
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