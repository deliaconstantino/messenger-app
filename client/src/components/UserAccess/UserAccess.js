import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Login from "./Login"
import { SvgIcon } from '@material-ui/core';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
// import Background from "./Background"
// import CustomImageList from "./CustomImageList"
import "./userAccessStyles.css"
// import Image from "/UserAccess/bg-img.png"
// import peopleImg from "../../images/bg-img.png"
// import CardMedia from '@material-ui/core/CardMedia';

// import { CardMedia } from '@material-ui/core';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
// layer: {
//     backgroundColor: "#3A8DFF",
//     zIndex: -2,
//     // filter: "contrast(75%)",
//     // position: absolute,
//     top: 0,
//     left: 0,
//     // width: 100%,
//     // height: 100%,
// },
  image: {
    // backgroundImage: `url(UserAccess/bg-img.png)`,
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    // backgroundColor: "#3A8DFF",
    // opacity: .5,
    // backgroundRepeat: 'no-repeat',
    // #3A8DFF to #86B9FF
    // background: "linear-gradient(#3A8DFF, #86B9FF), url('../../images/bg-img.png')",
    backgroundImage:`url(https://source.unsplash.com/random)) no-repeat, linear-gradient(135deg, #50A684 30%, #115E67 90%)`,
    // backgroundImage: "linear-gradient(225deg, #3A8DFF 0%, #86B9FF 100%)",
    // opacity: "85%",
    // backgroundColor: "linear-gradient(#3A8DFF 30%, #86B9FF 85%)",
    //   theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  // layer: {
  //   // display: block,
  //   // position: absolute,
  //   backgroundColor: "rgba(0, 0, 255, 0.3)",
  //   opacity: .5,
  //   top: 0,
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  // // display: none;
  // },
  // bubble: {
  //   backgroundImage: "linear-gradient(#3A8DFF 30%, #86B9FF 85%)",
  //   // backgroundImage: 'url(https://source.unsplash.com/random)',
  //   // background: "linear-gradient(225deg, #3A8DFF 0%, #86B9FF 100%)",
  //   opacity: "85%",
  //   // borderRadius: "0 10px 10px 10px"
  // },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  card: {
    height: "100px",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserAccess() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
        {/* <div className={classes.background}></div> */}
        {/* <CustomImageList /> */}
        {/* <CardMedia
          className={classes.card}
          image="../../images/bg-img.png"
        /> */}
        {/* <Background /> */}
        {/* <div className={classes.layer}></div> */}
        {/* <div className={classes.image}></div> */}
        {/* <SvgIcon>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon> */}
      {/* </Grid> */}
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>

          <Login />

        </div>
      </Grid>
    </Grid>
  );
}


{/* <Avatar className={classes.avatar}>
<LockOutlinedIcon />
</Avatar>
<Typography component="h1" variant="h5">
Sign in
</Typography> */}

{/* <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
 <Copyright />
            </Box>
          </form>  */}
