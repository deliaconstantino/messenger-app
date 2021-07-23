import React from "react";
import { Box, Avatar } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 20,
    width: 20,
    margin: theme.spacing(0.8),
  },
}));

const SeenAvatar = (props) => {
  const classes = useStyles();
  const { username, photoUrl } = props.otherUser;

  return (
    <Box>
      <Avatar alt={username} src={photoUrl} className={classes.avatar} />
    </Box>
  );
};

export default SeenAvatar;
