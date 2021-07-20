import React, { Component } from "react";
import { Box } from "@material-ui/core";
import { BadgeAvatar, ChatContent } from "../Sidebar";
import { withStyles } from "@material-ui/core/styles";
import { setActiveChat } from "../../store/activeConversation";
import { connect } from "react-redux";
import { updateReadStatus } from "../../store/utils/thunkCreators"
import BadgeUnread from "./BadgeUnread"

// client/src/store/utils/thunkCreators.js

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
      conversationId: this.props.conversation.id
    }
    await this.props.updateReadStatus(reqBody);
  };

  //TODO: add handleClick to send fetch to backend and update messages to read in conversation

  render() {
    console.log("props from chat", this.props)
    const { classes } = this.props;
    const otherUser = this.props.conversation.otherUser;
    const count = this.props.conversation.unreadMessagesCount;
    return (
      <Box
        onClick={() => this.handleClick(this.props.conversation)}
        className={classes.root}
      >
        <BadgeAvatar
          photoUrl={otherUser.photoUrl}
          username={otherUser.username}
          online={otherUser.online}
          sidebar={true}
        />
        <ChatContent conversation={this.props.conversation} />
        {count > 0 ? <BadgeUnread count={count}/> : null}

        {/* TODO: render a bubble with number of unread messages if greater than 0 */}
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
    }
  };
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Chat));
