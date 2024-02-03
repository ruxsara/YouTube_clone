import { Box, Grid } from "@mui/material";
import React from "react";
import RelatedVideos from "../../related-videos/RelatedVideos";
import VideoPlayer from "../../video-player/VideoPlayer";

const VideoDetail = () => {
  return (


<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={2}>
  
  <Grid item={true} container xs={12}  spacing={4}>
    <Grid item={true} xs={12} md={8} >
      <VideoPlayer/>
    </Grid>
    <Grid item={true} xs={12} md={4} >
      {/* <RelatedVideos/> */}
    </Grid>
   
  </Grid>
  
</Grid>
</Box>
  );
};

export default VideoDetail;
