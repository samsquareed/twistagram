import { Box, CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux';

import Post from '../post/Post';

const Feed = () => {

  const posts = useSelector((state)=> state.posts)

  return (
    !posts.length ? <Box sx={{position:"fixed", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}> <CircularProgress  />  </Box> :
    (<Box bgcolor="white" flex={2} p={1} >
      {
        posts?.map((post)=>(
          <Post key={post._id} post={post} />
        ))
      }
    </Box>)
  )
}

export default Feed