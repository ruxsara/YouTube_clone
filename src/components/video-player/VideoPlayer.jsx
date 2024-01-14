import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchVideoById } from "../../api/FetchVideoById";
import VideoPlayerActions from "../video-player-actions/VideoPlayerActions";

const VideoPlayer = () => {
  const initialValue = {
    snippet: { title: "", channelId: "", channelTitle: "" },
    statistics: { viewCount: 0, likeCount: 0 }
  };

  const [videoDetail, setVideoDetail] = useState(initialValue);

  const { id } = useParams();

  useEffect(() => {
    fetchVideoById(id, setVideoDetail);
  }, [id]);

  const {  snippet: { title},} = videoDetail;

  return (
    <Box flex={1}>
      <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player"
          controls
        />

        <Typography color="black" variant="h5" fontWeight="bold" p={2}>
          {title}
        </Typography>

        <VideoPlayerActions videoDetail={videoDetail} />
      </Box>
    </Box>
  );
};

export default VideoPlayer;
