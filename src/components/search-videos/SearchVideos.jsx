import React from "react";
import { Stack, Box, Grid } from "@mui/material";

import { Loader, SearchVideoCard } from "../../components";

const SearchVideos = ({ videos, direction }) => {
  if (!videos?.length) return;

  return (
    <Grid
      sx={{ width: "100%"}}
      // justifyContent="flex-end"
      direction="column"
      lg={12}
      flexDirection="column"
      alignContent='center'
      justifyContent='center'
      container
      pt={2}
     
    >
      {videos.map((video, idx) => (
        <Grid item key={idx}  >
          {video.videoId && <SearchVideoCard video={video} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchVideos;
