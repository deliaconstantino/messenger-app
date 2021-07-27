import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  unreadPreviewText: {
    ...theme.typography.button,
  },
  previewText: {
    ...theme.typography,
  },
  notification: {
    height: 20,
    width: 20,
    backgroundColor: "#3F92FF",
    marginRight: 10,
    color: "white",
    fontSize: 10,
    letterSpacing: -0.5,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
}));

const ChatContent = ({ conversation }) => {
  const classes = useStyles();

  const { latestMessageText, otherUser, unreadMessagesCount } = conversation;

  const readStatusUI =
    unreadMessagesCount > 0 ? classes.unreadPreviewText : classes.previewText;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={readStatusUI}>{latestMessageText}</Typography>
      </Box>
    </Box>
  );
};

export default ChatContent;
