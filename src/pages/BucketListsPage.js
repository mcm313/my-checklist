import React from "react";
import { Box, Container, Typography } from "@mui/material";
import "../main.css";
import BucketListCard from "../components/BucketlistCard";

function BucketListsPage() {
  let storedBucketlists = JSON.parse(localStorage.getItem("bucketlists"));

  if (!Array.isArray(storedBucketlists)) {
    storedBucketlists = [];
  }

  return (
    <Container p={10}>
      <Typography
        variant="h2"
        component="h1"
        sx={{ textAlign: "center" }}
        pt={5}
      >
        <b>BUCKETLIST</b>
      </Typography>
      <Box p={5}>
        {storedBucketlists.map((i, index) => (
          <BucketListCard item={i} index={index} id={i.id} />
        ))}
      </Box>
    </Container>
  );
}

export default BucketListsPage;
