import { Celebration, Menu } from "@mui/icons-material";
import {
  Drawer,
  Fab,
  Box,
  Toolbar,
  Paper,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import "../main.css";
import styled from "@emotion/styled";
import Footer from "./Footer";

const drawerWidth = 240;

const ColorButton = styled(Button)(({ theme }) => ({
  border: "#141220",
  color: "#fffffb",
  backgroundColor: "#141220",
  "&:hover": {
    border: "#febb2c",
    color: "#141220",
    backgroundColor: "#fffffb",
  },
}));

function BucketListDrawer({
  title,
  clist,
  handleCompletedTicked,
  handleDeletedTicked,
  saveSelectedlist,
}) {
  const [clicked, setClicked] = useState(false);

  function toggleDrawer(event) {
    setClicked(!clicked);
  }

  const newlist = clist.filter((item) => item.type === "new");
  const completedlist = clist.filter((item) => item.type === "completed");

  const taskLeft = newlist.length - 1;

  const drawer = (
    <>
      <Toolbar variant="dense" />
      <Paper
        className="custom-height"
        variant="outlined"
        sx={{
          backgroundColor: "#141220",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
        }}
      >
        <Toolbar />
        <Card
          sx={{
            maxWidth: 240,
            padding: 1.5,
            backgroundColor: "#febb2c",
            color: "#fffffb",
          }}
        >
          <CardContent>
            {taskLeft === 0 && completedlist.length !== 0 ? (
              <Grid container justifyContent="center">
                <Grid item>
                  <Celebration />
                </Grid>
                <Grid item>
                  <Typography variant="h6" component="div" textAlign="center">
                    <b>CONGRATULATIONS!</b>
                  </Typography>
                  <Typography variant="h6" component="div" textAlign="center">
                    You have completed your {title} Bucketlist
                  </Typography>
                </Grid>
                <Grid item>
                  <Celebration />
                </Grid>
              </Grid>
            ) : (
              <Typography variant="h6" component="div" textAlign="center">
                {taskLeft} Task Left
              </Typography>
            )}
          </CardContent>
        </Card>
        <Divider />
        <ColorButton onClick={saveSelectedlist}>SAVE</ColorButton>
        <ColorButton onClick={handleCompletedTicked}>
          COMPLETED ITEMS
        </ColorButton>
        <ColorButton onClick={handleDeletedTicked}>DELETED ITEMS</ColorButton>
      </Paper>
      <Footer />
    </>
  );

  return (
    <>
      <Box
        onClick={toggleDrawer}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Fab size="small" aria-label="open">
          <Menu />
        </Fab>
      </Box>
      <Drawer
        anchor="right"
        variant="temporary"
        open={clicked}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        id="drawerZ"
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "transparent",
            border: "none",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        anchor="right"
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "transparent",
            border: "none",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default BucketListDrawer;
