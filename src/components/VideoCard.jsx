import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoUrl,
} from "../utilities/constants";
import { formatText } from "../utilities/formatText";
import { formatCount } from "../utilities/formatCount";

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
    viewCount,
  } = video;

  return (
    <Card
      sx={{
        width: "368px",
        boxShadow: "none",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          image={thumbnail[0].url || demoThumbnailUrl}
          alt={title}
          sx={{ width: "100%", height: "207px", borderRadius: 3 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "white", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#272424da">
            {formatText(title, 75)}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" color="gray">
            {channelTitle || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>

          <Typography variant="subtitle2" color="gray">
            {`${formatCount(viewCount)} views  • `}
            {publishedText}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
