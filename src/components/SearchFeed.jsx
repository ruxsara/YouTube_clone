import { useState, useEffect } from "react";
import { Typography, Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos } from "../components";
import { getAllVideos } from "../api/GetVideos";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    getAllVideos(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

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
