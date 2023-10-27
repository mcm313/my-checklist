import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function BucketListCard({ item, index, id }) {
  let bgColor = "";
  if (index % 2 === 0) {
    bgColor = "#febb2c";
  } else {
    bgColor = "#141220";
  }

  const totalLength = item.clist.length + item.list.length - 1;

  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 500,
        backgroundColor: { bgColor },
        color: "fffffb",
        margin: 3,
      }}
    >
      <CardContent>
        <Typography variant="h5">
          <b>{item.name} Bucketlist</b>
        </Typography>
        <Typography variant="body2">{item.desc}</Typography>
      </CardContent>
      <CardActions>
        <Link to={id}>
          <Button size="small">
            {item.clist.length}/{totalLength} Task Left
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default BucketListCard;
