import React from "react";
import { Box, Badge, Avatar } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  // profilePic: {
  //   height: 20,
  //   width: 20
  // },
  avatar: {
    height: 20,
    width: 20,
    marginRight: 2,
    marginTop: 6
  },
  // badge: {
  //   height: 13,
  //   width: 13,
  //   borderRadius: "50%",
  //   border: "2px solid white",
  //   backgroundColor: "#D0DAE9"
  // },
  // online: {
  //   backgroundColor: "#1CED84"
  // },
  // sidebar: {
  //   marginLeft: 17
  // }
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
