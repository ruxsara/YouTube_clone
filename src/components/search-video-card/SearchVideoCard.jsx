import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoUrl,
} from "../../utilities/constants";
import { formatText } from "../../utilities/formatText";
import { formatCount } from "../../utilities/formatCount";

// const demoItem = {
//   type: "video",
//   videoId: "",
//   title: "",
//   channelTitle: ""
//   channelId: "",
//   description: "",
//   viewCount: "19",
//   publishedText: "13 minutes ago",
//   lengthText: "0:20",
//   thumbnail: [{ url: "" }],
//   channelThumbnail: [{ url: "" }],
// };

const SearchVideoCard = ({ video }) => {
  const {
    videoId,
    title,
    channelTitle,
    channelId,
    publishedText,
    thumbnail,
    viewCount,
    description,
  } = video;

  return (
    // <Card
    //   sx={{
    //     width: { xs: "100%", sm: "358px", md: "320px" },
    //     boxShadow: "none",
    //   }}
    // >
    //   <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
    //     <CardMedia
    //       image={thumbnail[0].url || demoThumbnailUrl}
    //       alt={title}
    //       sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
    //     />
    //   </Link>
    //   <CardContent sx={{ backgroundColor: "white", height: "106px" }}>
    //     <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
    //       <Typography variant="subtitle1" fontWeight="bold" color="#272424da">
    //         {formatText(title, 50)}
    //       </Typography>
    //     </Link>
    //     <Link
    //       to={
    //         channelId
    //           ? `/channel/${channelId}`
    //           : demoChannelUrl
    //       }
    //     >
    //       <Typography variant="subtitle2" color="gray">
    //         {channelTitle || demoChannelTitle}
    //         <CheckCircleIcon
    //           sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
    //         />
    //       </Typography>

    //       <Typography variant="subtitle2" color="gray">
    //         {publishedText}
    //       </Typography>
    //     </Link>
    //   </CardContent>
    // </Card>

    <Card
      style={{
        boxShadow: "none",
        // borderRadius: 0,
        display: "flex",
        flexDirection: "row",
        padding: 5,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          image={thumbnail[0].url || demoThumbnailUrl}
          alt={title}
          style={{
            height: "202px",
            width: "360px",
            borderRadius: 12,
            padding: 5,
          }}
        />
      </Link>

      <CardContent
        style={{
          backgroundColor: "white",
          // height: "100px",
          // width: "100%",
          display: "flex",
          flexDirection: "column",
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" color="black">
            {formatText(title, 60)}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" color="gray">
            {`${formatCount(viewCount)} views  • `}
            {publishedText}
          </Typography>
          <Typography variant="subtitle2" color="gray" pt={1} pb={1}>
            {/* {snippet?.channelTitle.slice(0,10) || demoChannelTitle.slice(0,10)} */}
            {formatText(channelTitle, 65)}
            <CheckCircleIcon
              sx={{ fontSize: "10px", color: "gray", ml: "2px" }}
            />
          </Typography>

          <Typography variant="subtitle2" color="gray">
            {`${formatText(description, 80)} `}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default SearchVideoCard;
