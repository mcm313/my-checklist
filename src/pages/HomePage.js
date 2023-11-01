import React from "react";
import { Button, Grid, Typography, styled } from "@mui/material";
import "../main.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function HomePage() {
  let storedBucketlists = JSON.parse(localStorage.getItem("bucketlists"));

  if (!Array.isArray(storedBucketlists)) {
    storedBucketlists = [];
  }

  const id = Math.random().toString(36).substring(2, 9);
  const newLink = `bucketlists/${id}`;

  const ColorButton = styled(Button)(({ theme }) => ({
    border: "#febb2c",
    color: "#fffffb",
    backgroundColor: "#febb2c",
    "&:hover": {
      border: "#141220",
      color: "#fffffb",
      backgroundColor: "#141220",
    },
  }));

  return (
    <>
      <Grid
        container
        className="custom-height"
        alignContent="center"
        overflow="auto"
        py={15}
      >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="h1">
            <b>THIS IS A FREE</b>
          </Typography>
          <Typography variant="h4" component="h1">
            <b>BUCKETLIST MAKER</b>
          </Typography>
          <Typography variant="h6" component="h1">
            <b>TO HELP MAKE</b>
          </Typography>
          <Typography variant="h6" component="h1">
            <b>YOUR LIFE CHALLENGING</b>
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
          py={1}
        >
          {storedBucketlists.length < 100 && (
            <Link to={newLink}>
              <ColorButton variant="contained">MAKE A BUCKETLIST</ColorButton>
            </Link>
          )}
          {storedBucketlists.length < 100 && storedBucketlists.length !== 0 && (
            <>
              <Typography variant="title" color="inherit" noWrap>
                &nbsp;
              </Typography>
              <Typography variant="body1" component="p">
                <b>OR</b>
              </Typography>
              <Typography variant="title" color="inherit" noWrap>
                &nbsp;
              </Typography>
            </>
          )}
          {storedBucketlists.length !== 0 && (
            <Link to="bucketlists">
              <ColorButton variant="contained">OPEN A BUCKETLIST</ColorButton>
            </Link>
          )}
        </Grid>
        <Grid
          item
          container
          xs={12}
          sx={{ textAlign: "center", color: "lightgrey" }}
        >
          <Grid item xs={12}>
            <Typography variant="caption" component="p">
              <b>LIMITED TO 100 TASKS PER BUCKETLIST</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption" component="p">
              <b>ONLY UP TO 100 BUCKETLISTS</b>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default HomePage;
