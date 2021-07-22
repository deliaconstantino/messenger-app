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
    padding: theme.spacing(4),
    // alignItems: "center",
  },
  input: {
    // padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      minWidth: "250px"
    },
    [theme.breakpoints.up('sm')]: {
      minWidth: "400px"
    },
    [theme.breakpoints.up('md')]: {
      minWidth: "500px"
    },
    // [theme.breakpoints.up('lg')]: {
    //   backgroundColor: green[500],
    // },
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
    flexDirection: "column",
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

      <Box xs={12}
        sm={6}
        md={7}
        lg={7}
        xl={7}>
      <Box item>
        <Typography variant="h4">Create an Account</Typography>
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
                  className={classes.input}
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
                  className={classes.input}
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
                  className={classes.input}
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
                  fullWidth
                  required
                  className={classes.input}
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
