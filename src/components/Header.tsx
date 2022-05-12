import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <GitHubIcon />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, paddingLeft: "15px" }}
          >
            Issue List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
