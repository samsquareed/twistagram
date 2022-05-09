import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link as RouteLink, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { SignUp } from '../../actions/auth';
import FileBase from 'react-file-base64';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        samsquare
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Signup = () => {

  const theme = createTheme();
  const nevigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [profilePicture, setProfilePicture] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log();
    const userSignup = { firstName, lastName, email, password, userName, profilePicture}
    dispatch(SignUp(userSignup, nevigate))
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
          <Avatar sx={{ m: 1, bgcolor: 'blueviolet' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4" fontFamily= 'Grand Hotel'>
            Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  value={userName}
                  onChange={(e)=> setUserName(e.target.value)}
                  required
                  fullWidth
                  id="userName"
                  label="username"
                  autoFocus
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  value={firstName}
                  onChange={(e)=> setFirstName(e.target.value)}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e)=> setLastName(e.target.value)}
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  autoComplete="email"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  id="password"
                  autoComplete="new-password"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sx={{display:"flex"}} >
                <Typography color="blueviolet" fontFamily='Rubik'>profile pic : &nbsp; </Typography>
                <FileBase 
                   type="file"
                   multiple={false}
                   value={profilePicture}
                   onDone={({ base64 }) => setProfilePicture(base64)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouteLink to="/login">
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
                </RouteLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  )
}

export default Signup