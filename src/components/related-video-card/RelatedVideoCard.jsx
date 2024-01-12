import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle
} from "../../utilities/constants"

const RelatedVideoCard = ({
  video: {
    id: { videoId },
    snippet
  }
}) => (
  <Card
    style={{
      boxShadow: "none",
      borderRadius: 0,
      display: "flex",
      flexDirection: "row",
      padding:2,
      
      
    }}

  >
    <Link
      style={{ width: "45%" }}

      to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}
      md={6}
sx={4}
    >
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        style={{ height: 95, borderRadius: 12 }}
      />
    </Link>

    <CardContent
      style={{
        backgroundColor: "white",
        height: "98px",
        width: "55%",
        display: "flex",
        flexDirection: "column",
        paddingTop:0,
        paddingBottom:0
      }}
      md={6}
      sx={8}
      
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="" color="#272424da">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "10px", color: "gray", ml: "5px" }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default RelatedVideoCard;
