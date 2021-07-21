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
    height: "100vh",
  },
  image: {
    backgroundImage: "url(bg-img.png)",
    backgroundRepeat: "no-repeat",
    objectFit: 'cover',
    height: 'auto',
    // align: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 'auto',
    [theme.breakpoints.only('mdCustom')]: {
      width: 4},

  },
  backgroundColor: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage: "linear-gradient(#3A8DFF 0%, #86B9FF 100%)",
    opacity: "0.85",
    [theme.breakpoints.only('mdCustom')]: {
      width: 4},
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.only('mdCustom')]: {
      width: 8},
  },
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
    <Box  margin="auto">
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={6} lg={3} className={classes.image}>
          <Box xs={false} sm={6} lg={3} className={classes.backgroundColor}></Box>
        </Grid>

        <Grid item xs={12} sm={6} lg={9} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Login />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
