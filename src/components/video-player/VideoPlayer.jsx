import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchVideoById } from "../../api/FetchVideoById";
import Comments from "../comments/Comments";
import Description from "../description/Description";
import VideoPlayerActions from "../video-player-actions/VideoPlayerActions";

const VideoPlayer = () => {



  
  const initialValue = {
    id: "", 
    title: "",
    lengthSeconds: "",
    channelTitle: "",
    channelId: "",
    description: "",
    allowRatings: true,
    viewCount: "",
    isPrivate: false,
    isUnpluggedCorpus: false,
    isLiveContent: false,
    isFamilySafe: true,
    isUnlisted: false,
    category: "",
    publishDate: "",
    uploadDate: "",
    thumbnail:[{url:''}],
    keywords:[],
    isUnlisted:false,

  };

  const [videoDetail, setVideoDetail] = useState(initialValue);

  const { id } = useParams();

  useEffect(() => {
    fetchVideoById(id, setVideoDetail);
  }, [id]);

  return (
    <Box flex={1} pl={5}>
      <Box sx={{ position: "sticky", top: "86px" }}>
       <Box> <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player"
          controls
          playing 
        /></Box>

        <Typography color="black" variant="h5" fontWeight="bold" p={2}>
          {videoDetail.title}
        </Typography>

        <VideoPlayerActions videoDetail={videoDetail} />
        <Description videoDetail={videoDetail}/>
        <Comments  />
      </Box>
    </Box>
  );
};

export default VideoPlayer;
