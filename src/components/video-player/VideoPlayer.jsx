import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { fetchVideoById } from "../../api/FetchVideoById";

const VideoPlayer = () => {

const initialValue={
  snippet: { title:"", channelId:"", channelTitle:"" },
  statistics: { viewCount:0, likeCount:0 } } 

  const [videoDetail, setVideoDetail] = useState(initialValue);

  const { id } = useParams();


  useEffect(() => {
    fetchVideoById(id,setVideoDetail)
  }, [id]);

 
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box flex={1}>
    <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        className="react-player"
        controls
      />
      <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
        {title}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ color: "#fff" }}
        py={1}
        px={2}
      >
        <Link to={`/channel/${channelId}`}>
          <Typography
            color="#fff" 
            variant="h6"
          >
            {channelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
        <Stack direction="row" gap="20px" alignItems="center">
          <Typography variant="body1" sx={{ opacity: 0.7 }}>
            {parseInt(viewCount).toLocaleString()} views
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.7 }}>
            {parseInt(likeCount).toLocaleString()} likes
          </Typography>
        </Stack>
      </Stack>
    </Box>
  </Box>
  );
};

export default VideoPlayer;
