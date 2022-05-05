import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import AddLinkIcon from '@mui/icons-material/AddLink';

import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CreatePost } from '../../actions/posts';

const NewPost = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const theme = createTheme()
  const nevigate = useNavigate()
  const dispatch = useDispatch()

  const [caption, setCaption] = useState("")
  const [selectedFile, setSelectedFile] = useState("")
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(selectedFile, caption);
    const post = {userId : user._id, caption, image : selectedFile}
    dispatch(CreatePost(post, nevigate))
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <AddLinkIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            New Post
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="caption"
                  label="add caption "
                  name="caption"
                  value={caption}
                  onChange={(e)=> setCaption(e.target.value)}
                  autoComplete="caption"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FileBase 
                  type="file"
                  multiple={false}
                  value={selectedFile}
                  onDone={({ base64 }) => setSelectedFile(base64)}
                  // onChange={(e)=> setSelectedFile(e.target.value)}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              post now
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default NewPost