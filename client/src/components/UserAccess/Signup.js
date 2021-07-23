import React, { useState } from "react";
import { connect } from "react-redux";
import { Grid, FormControl, FormHelperText } from "@material-ui/core";
import { register } from "../../store/utils/thunkCreators";
import InputContainer from "./InputContainer";
import InputField from "./InputField";
import FormButton from "./FormButton";
import { useStylesForm } from "./useStylesObject"

const Signup = (props) => {
  const classes = useStylesForm();
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
    <form onSubmit={handleRegister}>
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
            ariaLabel: "e-mail address",
            label: "E-mail address",
            name: "email",
            type: "email",
          }}
        />
        <Grid>
          <FormControl error={!!formErrorMessage.confirmPassword}>
            <InputField
              inputFields={{
                ariaLabel: "password",
                label: "Password",
                name: "password",
                type: "password",
                inputProps: { minLength: 6 },
              }}
            />
            <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl error={!!formErrorMessage.confirmPassword}>
            <InputField
              inputFields={{
                ariaLabel: "confirm password",
                label: "Confirm Password",
                name: "confirmPassword",
                type: "password",
                inputProps: { minLength: 6 },
              }}
            />
            <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
          </FormControl>
        </Grid>
        <FormButton textValue="Create" />
      </Grid>
    </form>
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
