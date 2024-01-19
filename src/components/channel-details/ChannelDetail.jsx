import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchChannelById } from "../../api/FetchChannelById";
import { fetchChannelVideos } from "../../api/FetchChannelVideos";
import { ChannelCard, Pagination, Videos } from "..";
import InfiniteScroll from "react-infinite-scroll-component";
 
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();

  const { id:channelId } = useParams();

  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");

  const getMore = () => {
    fetchChannelVideos(channelId, setIsLoading, setVideos, setNextPageToken, nextPageToken);
  };

  useEffect(() => {
    fetchChannelById(channelId,setChannelDetail)
    getMore();
  }, [channelId]);


  return (
    <Box minHeight="95vh" >
      <Box>
        <div style={{
          
          height:'200px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>

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
    </Box>
  );
};

export default ChannelDetail;