import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  text: {
    ...theme.typography.phrase,
  },
  bubble: {
    padding: theme.spacing(4),
  },
}));

const PhraseBox = () => {
  const classes = useStyles();
  return (
    <>
      <Avatar
        item
        alt="chat bubble"
        src="whiteBubble.png"
        className={classes.bubble}
      />
      <Typography item className={classes.text}>
        Converse with anyone
      </Typography>
      <Typography item className={classes.text}>
        with any language
      </Typography>
    </>
  );
};

export default PhraseBox;
