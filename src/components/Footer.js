import React from "react";
import { AppBar, Grid, Typography } from "@mui/material";
import { Copyright } from "@mui/icons-material";

function Footer() {
  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: "#dfdfdf", top: "auto", bottom: 0 }}
    >
      <Grid container display="inline-flex" paddingX={1} justifyContent="end">
        <Grid
          item
          xs={6}
          display="flex"
          alignItems="center"
          justifyContent="end"
        >
          <Typography fontSize={12}>Copyright</Typography>
          <Copyright fontSize="small" />
          <Typography fontSize={12}>MORIMC</Typography>
          <Typography fontSize={12}>2023</Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Footer;
