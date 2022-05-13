import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import useIssuesStore from "./useIssueStore";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

import { Issue } from "types/types";

const IssueMain = observer(() => {
  const { issues, fetchIssues } = useIssuesStore();

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return (
    <Box sx={{ width: "1280px", marginLeft: "auto", marginRight: "auto" }}>
      <Box sx={{ width: "100%", padding: "15px 0px 0px 15px" }}>
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
              <ModeCommentOutlinedIcon />
              <Typography
                variant="caption"
                display="block"
                sx={{ paddingLeft: "5px" }}
              >
                {issue.comments}
              </Typography>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );
});

export default IssueMain;
