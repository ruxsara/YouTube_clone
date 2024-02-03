import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoUrl
} from "../utilities/constants";
import { formatText } from "../utilities/formatText";

// const demoItem = {
//   type: "video",
//   videoId: "",
//   title: "",
//   channelTitle: "",
//   channelId: "",
//   description: "",
//   viewCount: "19",
//   publishedText: "13 minutes ago",
//   lengthText: "0:20",
//   thumbnail: [{ url: "" }],
//   channelThumbnail: [{ url: "" }],
// };

const VideoCard = ({ video }) => {
  const {
    videoId,
    title,
    channelTitle,
    channelId,
    publishedText,
    thumbnail,
  } = video;


  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          image={thumbnail[0].url || demoThumbnailUrl}
          alt={title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "white", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#272424da">
            {formatText(title, 50)}
          </Typography>
        </Link>
        <Link
          to={
            channelId
              ? `/channel/${channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray">
            {channelTitle || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>

          <Typography variant="subtitle2" color="gray">
            {publishedText}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
