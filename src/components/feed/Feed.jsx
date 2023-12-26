import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Pagination, Sidebar, Videos } from "..";
import { fetchData } from "../../api/FetchVideos";
import InfiniteScroll from "react-infinite-scroll-component";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    getMore();
  }, [selectedCategory]);

  const getMore = () => {
    const url = `search?part=snippet&q=${selectedCategory}`;
    fetchData(url, setIsLoading, setVideos, setNextPageToken, nextPageToken);
  };

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "black" }}
        >
          Copyright © 2022 JSM Media
        </Typography>
      </Box>
      <Box
        id="parentScrollDiv"
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
        }}
      >
        <InfiniteScroll
          dataLength={videos.length}
          next={getMore}
          hasMore={true}
          loader={<Pagination />}
          scrollableTarget="parentScrollDiv"
        >
          <Videos videos={videos} />
        </InfiniteScroll>
      </Box>
    </Stack>
  );
};

export default Feed;
