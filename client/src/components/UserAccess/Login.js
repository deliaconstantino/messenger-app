import React from "react";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { login } from "../../store/utils/thunkCreators";
import InputContainer from "./InputContainer";
import FormButton from "./FormButton";
import { useStylesForm } from "./useStylesObject";

const Login = () => {
  const dispatch = useDispatch();
  const classes = useStylesForm();

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await dispatch(login({ username, password }));
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

export default Login;
