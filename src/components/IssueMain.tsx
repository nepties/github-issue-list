import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import useIssuesStore from "./useIssueStore";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Issue } from "types/types";
import { Divider } from "@mui/material";

const IssueMain = observer(() => {
  const { issues, fetchIssues } = useIssuesStore();

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return (
    <Box sx={{ width: "1280px", marginLeft: "auto", marginRight: "auto" }}>
      <Box sx={{ width: "100%", padding: "15px" }}>
        <Typography variant="h6" component="div">
          facebook/create-react-app
        </Typography>
      </Box>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {issues.map((issue: Issue, index) => (
          <>
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar src={issue.avatar} alt={issue.nickname.charAt(0)} />
              </ListItemAvatar>
              <ListItemText
                primary={issue.title}
                secondary={`#${issue.number} created at ${issue.date.slice(
                  0,
                  10,
                )} by ${issue.nickname}`}
              />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );
});

export default IssueMain;
