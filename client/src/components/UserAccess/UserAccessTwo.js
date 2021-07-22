import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Login from "./Login";
import Signup from "./Signup";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { shadows } from '@material-ui/system';
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
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
  image: {
    backgroundImage: "url(bg-img.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    minHeight: "100vh"
  },
  backgroundColor: {
    backgroundSize: "cover",
    height: "100%",
    backgroundImage: "linear-gradient(#3A8DFF 0%, #86B9FF 100%)",
    opacity: "0.85",
  },
  button: {
    ...theme.typography.userAccessButton,
    padding: theme.spacing(1, 5),
    boxShadow: "1px 2px 10px #d3d3d3",

  }
}));

function UserAccessTwo(props) {
  const history = useHistory();
  const classes = useStyles();

  const [showLogin, updateShowLogin] = useState(props.showLogin);
  const [showSignup, updateShowSignup] = useState(props.showSignup);

  const { user } = props;

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container component="main">
      <Grid
        item
        md={5}
        lg={5}
        xl={5}
        className={classes.image}
      >
        <Box
          md={5}
          lg={5}
          xl={5}
          className={classes.backgroundColor}
        ></Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        lg={7}
        xl={7}
      >
        {showLogin && (
          <Grid container item>
            <Typography>Need to register?</Typography>
            <Button
              onClick={() => {
                updateShowLogin(false);
                updateShowSignup(true);
                history.push("/register");
              }}
            >
              Register
            </Button>
          </Grid>
        )}
        {showSignup && (
          <Grid container item>
            <Typography>Need to log in?</Typography>
            <Button size="large" className={classes.button}
              onClick={() => {
                updateShowLogin(true);
                updateShowSignup(false);
                history.push("/login");
              }}
            >
              Login
            </Button>
          </Grid>
        )}
        <Box className={classes.paper}>
          {showLogin && <Login />}
          {showSignup && <Signup />}
        </Box>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(UserAccessTwo);
