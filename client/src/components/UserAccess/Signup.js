import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { register } from "../../store/utils/thunkCreators";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    direction: "column",
    justifyContent: "center",
    // alignItems: "center",
  },
  // root: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  // },
  // textField: {
  //   marginLeft: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  //   width: '25ch',
  // },
  // form: {
  //   display: "flex",
  //   marginRight: '10',
  //   marginLeft: "10",
  //   width: "100%",
  //   // minWidth: "auto",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flexDirection: "column"
  // },
  formGrid: {
    justifyContent: "center",
    alignItems: "center",
    // padding: theme.spacing(1),
    flexDirection: "column",
    alignItems: "stretch",
    // minWidth: "100%",
    // width: "100%"
    // // marginRight: '10',
    // marginLeft: "10",
  },
  // button: {
  //   color: "white"
  // }
}));



const Signup = (props) => {
  const classes = useStyles();
  const { register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  return (
    <Grid container className={classes.container}>

      <Box >
      <Box item>
        <Typography>Create an Account</Typography>
      </Box>
        <form onSubmit={handleRegister}>
          <Grid item container className={classes.formGrid} rowSpacing={1}>
            <Grid>
              <FormControl>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  fullWidth
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  fullWidth
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl error={!!formErrorMessage.confirmPassword}>
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  fullWidth
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl error={!!formErrorMessage.confirmPassword}>
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Button type="submit" variant="contained" size="large" color="primary">
              Create
            </Button>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(null, mapDispatchToProps)(Signup);
