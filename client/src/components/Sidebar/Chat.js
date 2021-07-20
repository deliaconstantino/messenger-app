import React, { Component } from "react";
import { Box } from "@material-ui/core";
import { BadgeAvatar, ChatContent } from "../Sidebar";
import { withStyles } from "@material-ui/core/styles";
import { setActiveChat } from "../../store/activeConversation";
import { connect } from "react-redux";
import { updateReadStatus } from "../../store/utils/thunkCreators";
import BadgeUnread from "./BadgeUnread";

const styles = {
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
};

class Chat extends Component {
  handleClick = async (conversation) => {
    await this.props.setActiveChat(conversation.otherUser.username);
    const reqBody = {
      conversationId: conversation.id,
    };
    await this.props.updateReadStatus(reqBody);
  };

  render() {
    const { classes, conversation } = this.props;
    const otherUser = conversation.otherUser;
    const count = conversation.unreadMessagesCount;
    return (
      <Box
        onClick={() => this.handleClick(conversation)}
        className={classes.root}
      >
        <BadgeAvatar
          photoUrl={otherUser.photoUrl}
          username={otherUser.username}
          online={otherUser.online}
          sidebar={true}
        />
        <ChatContent conversation={conversation} />
        {count > 0 ? <BadgeUnread count={count} /> : null}
      </Box>
    );
  }
}

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

export default connect(null, mapDispatchToProps)(withStyles(styles)(Chat));
