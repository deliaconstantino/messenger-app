import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { BadgeAvatar, ChatContent } from "../Sidebar";
import { setActiveChat } from "../../store/activeConversation";
import { useDispatch } from "react-redux";
import { updateReadStatus } from "../../store/utils/thunkCreators";
import BadgeUnread from "./BadgeUnread";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: "0 2px 10px 0 rgba(88,133,196,0.05)",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "grab",
    },
  },
}));

const Chat = ({conversation}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const otherUser = conversation.otherUser;
  const count = conversation.unreadMessagesCount;

  const handleClick = async (conversation) => {
    await dispatch(setActiveChat(conversation.otherUser.username));
    const reqBody = {
      conversationId: conversation.id,
    };
    await dispatch(updateReadStatus(reqBody));
  };

  return (
    <Box
      onClick={() => handleClick(conversation)}
      className={classes.root}
    >
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} />
      {count > 0 && <BadgeUnread count={count} />}
    </Box>
  );
};

export default Chat;
