import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { BadgeAvatar, ChatContent } from "../Sidebar";
import { setActiveChat } from "../../store/activeConversation";
import { connect } from "react-redux";
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

const Chat = (props) => {
  const classes = useStyles();
  const otherUser = props.conversation.otherUser;
  const count = props.conversation.unreadMessagesCount;

  const handleClick = async (conversation) => {
    await props.setActiveChat(conversation.otherUser.username);
    const reqBody = {
      conversationId: props.conversation.id,
    };
    await props.updateReadStatus(reqBody);
  };

  return (
    <Box
      onClick={() => handleClick(props.conversation)}
      className={classes.root}
    >
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={props.conversation} />
      {count > 0 ? <BadgeUnread count={count} /> : null}
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveChat: (id) => {
      dispatch(setActiveChat(id));
    },
    updateReadStatus: (conversationId) => {
      dispatch(updateReadStatus(conversationId));
    },
  };
};

export default connect(null, mapDispatchToProps)(Chat);
