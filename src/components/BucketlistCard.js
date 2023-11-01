import { Celebration } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function BucketListCard({ item, id }) {
  const list = item.list.filter((item) => item.type === "new");
  const clist = item.list.filter((item) => item.type === "completed");
  const totalLength = clist.length + list.length - 1;

  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 500,
        margin: 3,
      }}
    >
      <CardContent>
        <Typography variant="h5">
          <b>{item.name} Bucketlist</b>
        </Typography>
        <Typography variant="body2">{item.desc}</Typography>
        {clist.length === totalLength && clist.length !== 0 && (
          <>
            <br></br>
            <Celebration sx={{ color: "#febb2c" }} />
            <Typography variant="body1" component="div">
              <b>CONGRATULATIONS!</b>
            </Typography>
            <Typography variant="body1" component="div">
              You have completed your Bucketlist
            </Typography>
          </>
        )}
      </CardContent>
      <CardActions>
        <Link to={id}>
          <Button size="small">
            {clist.length}/{totalLength} Task Left
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default BucketListCard;
