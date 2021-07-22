import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {

  },
  text: {
    ...theme.typography.phrase,
    justifyContent: "center",
  }
}));

const PhraseBox = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography className={classes.text}>Converse with anyone <br/>with any language</Typography>
    </Box>
  );
};

export default PhraseBox;
