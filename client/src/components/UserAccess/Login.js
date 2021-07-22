import React from "react";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "../../store/utils/thunkCreators";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    direction: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(6, 0),
    },
    margin: theme.spacing(16, 0),
  },
  input: {
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down("xs")]: {
      minWidth: "250px",
      padding: theme.spacing(1, 0),
    },
    [theme.breakpoints.up("sm")]: {
      minWidth: "400px",
    },
    [theme.breakpoints.up("md")]: {
      minWidth: "500px",
    },
  },
  formGrid: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(2, 0),
  },
  button: {
    margin: theme.spacing(2),
    padding: theme.spacing(1, 6),
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const { login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  return (
    <Grid container className={classes.container}>
      <Box xs={12} sm={6} md={7} lg={7} xl={7}>
        <Box item>
          <Typography variant="h5">Welcome back!</Typography>
        </Box>
        <form onSubmit={handleLogin}>
          <Grid item container className={classes.formGrid}>
            <Grid>
              <FormControl margin="normal" required>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  fullWidth
                  className={classes.input}
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl margin="normal" required>
                <TextField
                  label="password"
                  aria-label="password"
                  type="password"
                  name="password"
                  fullWidth
                  className={classes.input}
                />
              </FormControl>
            </Grid>
            <Grid>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                className={classes.button}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
