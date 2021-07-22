import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "../../store/utils/thunkCreators";
import InputContainer from "./InputContainer";
import FormButton from "./FormButton";

const useStyles = makeStyles((theme) => ({
  formGrid: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(2, 0),
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
    <form onSubmit={handleLogin}>
      <Grid item container className={classes.formGrid}>
        <InputContainer
          inputField={{
            ariaLabel: "username",
            label: "Username",
            name: "username",
            type: "text",
          }}
        />
        <InputContainer
          inputField={{
            ariaLabel: "password",
            label: "Password",
            name: "password",
            type: "password",
          }}
        />
        <FormButton textValue="Login" />
      </Grid>
    </form>
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
