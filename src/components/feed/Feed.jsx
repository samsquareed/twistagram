import { Box } from '@mui/material'
import { useSelector } from 'react-redux';

import Post from '../post/Post';

const Feed = () => {

  const posts = useSelector((state)=> state.posts)
  posts.reverse()
  // console.log(posts);
  return (
    <Box bgcolor="white" flex={3} p={2}>
      {/* <Post image="https://wallpapercave.com/wp/wp9130661.jpg"  likes={12} />
      <Post image="https://mui.com/static/images/cards/paella.jpg"  likes={7} />
      <Post image="https://wallpapercave.com/dwp1x/wp6105847.jpg" likes={119} /> */}
      {
        posts?.map((post)=>(
          <Post key={post._id} post={post} />
        ))
      }
    </Box>
  )
}

export default Feed