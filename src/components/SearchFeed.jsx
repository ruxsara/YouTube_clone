import { useState, useEffect } from "react";
import { Typography, Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos } from "../components";
import { getAllVideos } from "../api/GetVideos";
import { fetchData } from "../api/FetchVideos";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { keyword } = useParams();

  useEffect(() => {
    fetchData(`search?part=snippet&q=${keyword}`).then((data) =>
      setVideos()
    );
  }, [keyword]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid>{<Videos videos={videos} />}</Grid>
    </Grid>
  );
};

export default SearchFeed;
