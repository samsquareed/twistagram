import { Box } from '@mui/material'

import Post from '../post/Post';

const Feed = () => {
  return (
    <Box bgcolor="" flex={3} p={2}>
      <Post image="https://wallpapercave.com/wp/wp9130661.jpg"  likes={12} />
      <Post image="https://mui.com/static/images/cards/paella.jpg"  likes={7} />
      <Post image="https://wallpapercave.com/dwp1x/wp6105847.jpg" likes={119} />
    </Box>
  )
}

export default Feed