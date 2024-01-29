import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import SortIcon from "@mui/icons-material/Sort";
import { formatCount } from "../utilities/formatCount";

const CommentCount = ({ commentsCount }) => {
  return (
    <Grid container sx={{ alignItems: "center", p: "20px 7px 7px 20px" }}>
      <Grid>
        <Typography component="span" sx={{ mr: 3, fontWeight: "bold" }}>
          {formatCount(commentsCount)} comments
        </Typography>
      </Grid>
      <Button
        sx={{ display: "flex", flexDirection: "row", textTransform: "none" }}
      >
        <SortIcon />
        <Typography component="span">Sort</Typography>
      </Button>
    </Grid>
  );
};

export default CommentCount;
