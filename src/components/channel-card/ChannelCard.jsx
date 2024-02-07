import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../../utilities/constants";
import { formatText } from "../../utilities/formatText";
import { formatDate } from "../../utilities/formatDate";
import { formatCount } from "../../utilities/formatCount";

const ChannelCard = ({ video }) => {
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

  const {
    videoId,
    title,
    channelTitle,
    channelId,
    publishedText,
    channelThumbnail,
    viewCount,
  } = video;

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: {
          xs: "356px",
          md: "320px",
        },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={channelThumbnail[0].url || demoProfilePicture}
            alt={channelTitle}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />

          <Typography variant="h6">
            {channelTitle}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>

          {viewCount && (
            <Typography>{formatCount(viewCount)} Subscribers</Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
