import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api/FetchVideos";
import SearchVideos from "../search-videos/SearchVideos";

const SearchFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");
  const { searchTerm } = useParams();

  useEffect(() => {
    setVideos([]), setNextPageToken("");
    getMore();
  }, [searchTerm]);

  const getMore = () => {
    fetchData(
      searchTerm,
      setIsLoading,
      setVideos,
      setNextPageToken,
      nextPageToken
    );
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={2}
    >
      <SearchVideos videos={videos} />
    </Grid>
  );
};

export default SearchFeed;
