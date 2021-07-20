import React from "react";
import { Box, Badge } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  sidebar: {
    marginRight: 25,
  }
}));

const BadgeUnread = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.sidebar}>
      <Badge badgeContent={4} color="primary">
      </Badge>
    </Box>
  );
};

export default BadgeUnread;
