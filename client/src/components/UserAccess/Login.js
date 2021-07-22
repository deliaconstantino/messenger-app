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
import { login } from "../../store/utils/thunkCreators";

const Login = (props) => {
  const { login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  return (
    <Grid container justifyContent="center">
      <Box>
        <form onSubmit={handleLogin}>
          <Grid>
            <Grid>
              <FormControl margin="normal" required>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <FormControl margin="normal" required>
              <TextField
                label="password"
                aria-label="password"
                type="password"
                name="password"
              />
            </FormControl>
            <Grid>
              <Button type="submit" variant="contained" size="large">
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
