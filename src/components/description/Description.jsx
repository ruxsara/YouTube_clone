import { Fab, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

import { formatDate } from "../../utilities/formatDate";

const Description = ({ videoDetail }) => {
  const [isFull, setisFull] = useState(false);
  const {
    id,
    title,
    lengthSeconds,
    channelTitle,
    channelId,
    description,
    allowRatings ,
    viewCount,
    isPrivate ,
    isUnpluggedCorpus,
    isLiveContent,
    isFamilySaf,
    isUnlisted,
    category,
    publishDate,
    uploadDate,
    thumbnail,
    keywords
  } = videoDetail;

  const getDescription = () => {
    const lines = description.split(".");
    if (isFull) {
      return lines;
    } else {
      return lines.slice(0, 2);
    }
  };

  return (
    <Grid
      sx={{ backgroundColor: "#E9EAEC", borderRadius: "10px" }}
      container
      p={2}
      mt={2}
      ml={"15px"}
    >
      <Typography
        variant="span"
        component="p"
        sx={{ fontSize: 17, mr: 2, fontWeight: "bold" }}
      >
        {" "}
        {viewCount} views
      </Typography>
      <Typography
        variant="span"
        sx={{ fontSize: 17, mr: 2, fontWeight: "bold" }}
      >
        {formatDate(publishDate)}{" "}
      </Typography>

      <Typography
        color="black"
        fontWeight="bold"
        sx={{ fontSize: 15, color: "#808080" }}
      >
        {keywords?.map((tag, key) => (
          <span key={key}> #{tag}</span>
        ))}
      </Typography>

      <Typography color="black" sx={{ fontSize: 17 }}>
        {getDescription().map((line, key) => {
          return <p key={key}> {line}</p>;
        })}
      </Typography>

      <Typography
        sx={{ width: "100%", cursor: "pointer", fontWeight: "bold" }}
        onClick={() => {
          setisFull(!isFull);
        }}
      >
        Show {isFull ? "less" : "more"}
      </Typography>
    </Grid>
  );
};

export default Description;
