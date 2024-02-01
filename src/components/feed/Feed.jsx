import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Sidebar, TagsCarousel, Videos } from "..";
import { fetchData } from "../../api/FetchVideos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    getMore();
  }, [selectedCategory]);

  const getMore = () => {
    fetchData(
      selectedCategory,
      setIsLoading,
      setVideos,
      setNextPageToken,
      nextPageToken
    );
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
          © 2024 Google LLC{" "}
        </Typography>
      </Box>
      <Box
        id="parentScrollDiv"
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
          width: "100%",
          padding: 0,
          margin: 0,
        }}
      >
        <Box sx={{ width: "100%", mb: 3 }}>
          <TagsCarousel />
        </Box>
        <Box>
          {/* <InfiniteScroll
          dataLength={videos.length}
          next={getMore}
          hasMore={true}
          loader={<Pagination />}
          scrollableTarget="parentScrollDiv"
        > */}

          <Videos videos={videos} />
          {/* </InfiniteScroll> */}
        </Box>
      </Box>
    </Stack>
  );
};

export default Feed;
