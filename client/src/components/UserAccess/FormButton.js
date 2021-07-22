import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    padding: theme.spacing(1, 6),
  },
}));

const FormButton = (props) => {
  const classes = useStyles();

  const { textValue } = props
  return (
    <Grid>
      <Button
        type="submit"
        variant="contained"
        size="large"
        color="primary"
        className={classes.button}
      >
        {textValue}
      </Button>
    </Grid>
  );
};

export default FormButton;
