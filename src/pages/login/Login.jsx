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
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {SignIn} from "../../actions/auth"
import LockOpenIcon from '@mui/icons-material/LockOpen';

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

const Login = () => {

  const theme = createTheme();
  const nevigate = useNavigate()
  const dispatch = useDispatch()

  // const email = useRef("")
  // const password = useRef("")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    const userLogin = {email, password}
    dispatch(SignIn(userLogin, nevigate))
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h4" fontFamily="Grand Hotel">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              autoComplete="email"
              variant='standard'
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              label="Password"
              type="password"
              id="password"
              variant='standard'
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <RouteLink to="/signup">
                <Link variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
                </RouteLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  )
}

export default Login