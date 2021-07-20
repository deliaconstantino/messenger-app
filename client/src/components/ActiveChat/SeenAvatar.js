import React from "react";
import { Box, Badge, Avatar } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  avatar: {
    height: 20,
    width: 20,
    marginRight: 2,
    marginTop: 6
  },
}));

const SeenAvatar = (props) => {
  const classes = useStyles();
  const { username,  photoUrl } = props.otherUser;

  return (
    <Box >
      <Avatar alt={username} src={photoUrl} className={classes.avatar}></Avatar>
    </Box>
  );
};

export default SeenAvatar;
