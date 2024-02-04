import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utilities/formatDate";
import { formatText } from "../../utilities/formatText";

import {
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoUrl,
} from "../../utilities/constants";
import { formatCount } from "../../utilities/formatCount";

const RelatedVideoCard = ({ video }) => {
  const {
    videoId ,
    title,
    channelId,
    publishedTimeText,
    channelTitle,
    thumbnail,
    viewCount
  } = video;

  return (
    <Card
      style={{
        boxShadow: "none",
        // borderRadius: 0,
        display: "flex",
        flexDirection: "row",
        padding: 2,
      }}
    >
      <Link
        style={{ width: "45%" }}
        to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}
        md={6}
        xs={4}
      >
        <CardMedia
          image={thumbnail[0].url|| demoThumbnailUrl}
          alt={title}
          style={{ height: 95, borderRadius: 12, padding: 4 }}
        />
      </Link>

      <CardContent
        style={{
          backgroundColor: "white",
          height: "98px",
          width: "55%",
          display: "flex",
          flexDirection: "column",
          paddingTop: 0,
          paddingBottom: 0,
        }}
        md={6}
        xs={8}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="" color="#272424da">
            {formatText(title, 40)}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" color="gray">
            {/* {snippet?.channelTitle.slice(0,10) || demoChannelTitle.slice(0,10)} */}
            {formatText(channelTitle, 15)}
            <CheckCircleIcon
              sx={{ fontSize: "10px", color: "gray", ml: "5px" }}
            />
          </Typography>

          <Typography variant="subtitle2" color="gray">
            {`${formatCount(viewCount)} views  • `}   
              {publishedTimeText}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default RelatedVideoCard;
