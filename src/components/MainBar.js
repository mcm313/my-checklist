import React from "react";
import { AppBar, Button } from "@mui/material";
import Logo from "../logos/100_bucketlist_logo.png";
import { Link, Outlet } from "react-router-dom";

function MainBar() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          padding: 0.75,
          backgroundColor: "#febb2c",
        }}
      >
        <Link to="/">
          <Button>
            <img src={Logo} alt="logo" width={225}></img>
          </Button>
        </Link>
      </AppBar>
      <Outlet />
    </>
  );
}

export default MainBar;
