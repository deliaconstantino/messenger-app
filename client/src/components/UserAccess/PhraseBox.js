import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    ...theme.typography.phrase,
    // justifyContent: "center",
  }
}));

const PhraseBox = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.box}>
      <Typography className={classes.text}>Converse with anyone <br/>with any language</Typography>
    </Grid>
  );
};

export default PhraseBox;
