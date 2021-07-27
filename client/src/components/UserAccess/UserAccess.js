import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Login from "./Login";
import Signup from "./Signup";
import PhraseBox from "./PhraseBox";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useStylesUserAccess } from "./useStylesObject";

const UserAccess = ({ showLoginComponent, showSignupComponent }) => {
  const history = useHistory();
  const classes = useStylesUserAccess();
  const user = useSelector((state) => state.user);
  const [showLogin, setShowLogin] = useState(showLoginComponent);
  const [showSignup, setShowSignup] = useState(showSignupComponent);

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container component="main">
      <Grid item md={5} lg={5} xl={5} className={classes.image}>
        <Box md={5} lg={5} xl={5} className={classes.backgroundColor}>
          <Hidden smDown>
            <Grid container spacing={0} className={classes.phraseGrid}>
              <PhraseBox />
            </Grid>
          </Hidden>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
        {showLogin && (
          <Grid container item className={classes.buttonGrid}>
            <Typography className={classes.text}>
              Don’t have an account?
            </Typography>
            <Button
              className={classes.button}
              onClick={() => {
                setShowLogin(false);
                setShowSignup(true);
                history.push("/register");
              }}
            >
              Create Account
            </Button>
          </Grid>
        )}
        {showSignup && (
          <Grid container item className={classes.buttonGrid}>
            <Typography className={classes.text}>
              Already have an account?
            </Typography>
            <Button
              className={classes.button}
              onClick={() => {
                setShowLogin(true);
                setShowSignup(false);
                history.push("/login");
              }}
            >
              Login
            </Button>
          </Grid>
        )}
        <Box>
          <Grid container className={classes.formContainer}>
            <Box xs={12} sm={6} md={7} lg={7} xl={7}>
              <Box item>
                <Typography variant="h5">
                  {showLogin ? "Welcome back!" : "Create an Account"}
                </Typography>
              </Box>
              {showLogin && <Login />}
              {showSignup && <Signup />}
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserAccess;
