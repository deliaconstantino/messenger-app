import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  text: {
    ...theme.typography.phrase,
  },
  bubble: {

  }
}));

const PhraseBox = () => {
  const classes = useStyles();
  return (
    <>
      <Avatar alt="Remy Sharp" src="whiteBubble.png" className={classes.bubble} />
      <Typography item className={classes.text}>Converse with anyone</Typography>
      <Typography item className={classes.text}>with any language</Typography>
    </>
  );
};

export default PhraseBox;
