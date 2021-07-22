import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Login from "./Login";
import Signup from "./Signup";
import PhraseBox from "./PhraseBox";
import Hidden from '@material-ui/core/Hidden';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { shadows } from '@material-ui/system';
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: "url(bg-img.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh"
  },
  backgroundColor: {
    backgroundSize: "cover",
    height: "100%",
    backgroundImage: "linear-gradient(#3A8DFF 0%, #86B9FF 100%)",
    opacity: "0.85",
  },
  buttonGrid: {
    display: "flex",
    margin: theme.spacing(1, -3),
    flexDirection: "row",
    justifyContent: "flex-end",
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(1, -1),
    },
  },
  text: {
    ...theme.typography.loginSignup,
    margin: theme.spacing(2, 2),
  },

  button: {
    ...theme.typography.userAccessButton,
    padding: theme.spacing(1, 6),
    boxShadow: "1px 2px 10px #d3d3d3",
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1, 3),
    },
  },
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
        >
        <Hidden smDown>
          <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '75vh', position: 'relative' }}
            >
            <PhraseBox />
          </Grid>
        </Hidden>
        </Box>
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
          <Grid container item className={classes.buttonGrid}>
            <Typography className={classes.text}>Don’t have an account?</Typography>
            <Button className={classes.button}
              onClick={() => {
                updateShowLogin(false);
                updateShowSignup(true);
                history.push("/register");
              }}
            >
              Create Account
            </Button>
          </Grid>
        )}
        {showSignup && (
          <Grid container item className={classes.buttonGrid}>
            <Typography className={classes.text}>Already have an account?</Typography>
            <Button className={classes.button}
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
