import React from "react";
import { Stack, Box } from "@mui/material";

import { Loader, VideoCard } from "../../../components";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      {videos.map((video, idx) => (
        <Box key={idx}>
          {video.videoId && <VideoCard video={video} />}
          {/* {video.channelId && <ChannelCard video={video} />} */}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
