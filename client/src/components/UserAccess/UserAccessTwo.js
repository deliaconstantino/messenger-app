import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Login from "./Login";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./userAccessStyles.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
    // flexGrow: 1,
    // overflow: 'hidden',
    // padding: theme.spacing(0, 0, 1, 3),
    // justifyContent: "center",
  },
  image: {
    backgroundImage: "url(bg-img.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    // objectFit: 'cover',
    // objectPosition: "right top",
    // height: 'auto',
    // justifyContent: "center",
    // alignItems: "end",
    // width: 'auto',
    // maxWidth: "1500px",
    // maxHeight: "2000px",
    // display: "table-cell",
    // verticalAlign: "middle",
    // [theme.breakpoints.only("xs")]: {
    //   width: false},
    // [theme.breakpoints.only("s")]: {
    //     width: 6},
    // [theme.breakpoints.only("mdCustom")]: {
    //   width: 4},
    //   [theme.breakpoints.only("lg")]: {
    //     width: 3},
    // width: theme.spacing(false, 6, 4, 3)
  },
  backgroundColor: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage: "linear-gradient(#3A8DFF 0%, #86B9FF 100%)",
    opacity: "0.85",
    width: 'auto'

      // [theme.breakpoints.only("xs")]: {
      //   width: false},
      // [theme.breakpoints.only("s")]: {
      //     width: 6},
      // [theme.breakpoints.only("mdCustom")]: {
      //   width: 4},
      //   [theme.breakpoints.only("lg")]: {
      //     width: 3},
      // width: theme.spacing(false, 6, 4, 3)
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // width: theme.spacing(false, 6, 4, 3)
    // [theme.breakpoints.only("xs")]: {
    //   width: 12},
    // [theme.breakpoints.only("s")]: {
    //     width: 6},
    // [theme.breakpoints.only("mdCustom")]: {
    //   width: 8},
      // [theme.breakpoints.only("lg")]: {
      //   width: 9},
  },
  formContainer: {
    //  width: theme.spacing(false, 6, 4, 3)
    // [theme.breakpoints.only("xs")]: {
    //   width: 12},
    // [theme.breakpoints.only("s")]: {
    //     width: 6},
    // [theme.breakpoints.only("mdCustom")]: {
    //   width: 8},
    //   [theme.breakpoints.only("lg")]: {
    //     width: 9},
  }
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundColor: theme.palette.secondary.main,
  // },
  // form: {
  //   width: "100%", // Fix IE 11 issue.
  //   marginTop: theme.spacing(1),
  // },
  // submit: {
  //   margin: theme.spacing(3, 0, 2),
  // },
}));

export default function UserAccessTwo() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={6} md={5} lg={5} xl={5} className={classes.image}>
        <Box xs={false} sm={6} md={5} lg={5} xl={5} className={classes.backgroundColor}></Box>
      </Grid>
      <Grid item xs={12} sm={6} md={7} lg={7} xl={7} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Login />
        </div>
      </Grid>
    </Grid>
  );
}
