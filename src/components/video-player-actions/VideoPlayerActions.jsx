import { Button, CardMedia, Fab, Grid, Typography } from "@mui/material";
import React from "react";
import { demoProfilePicture } from "../../utilities/constants";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Link } from "react-router-dom";

const VideoPlayerActions = ({ videoDetail }) => {
  const {
    snippet: { title, channelId, channelTitle, thumbnails },
    statistics: { viewCount, likeCount }
  } = videoDetail;

  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
        lg={6}
        container
        justifyContent="flex-start"
        sx={{ alignItems: "center" }}
      >
        <Grid item sx={{ mr: 1 }}>
        <Link to={`/channel/${channelId}`}>
          <CardMedia
            image={thumbnails?.default?.url || demoProfilePicture}
            alt={title}
            sx={{
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              border: "1px solid #e3e3e3"
            }}
          />
          </Link>
        </Grid>

        <Grid item sx={{ mr: 2 }}>
        <Link to={`/channel/${channelId}`}>

          <Typography color="black" fontWeight="bold" sx={{ fontSize: 15 }}>
            {channelTitle}
          </Typography>
          </Link>

          <Typography color="gray" sx={{ fontSize: 12 }}>
             {parseInt(likeCount).toLocaleString()}  subscribers
          </Typography>
        </Grid>

        <Grid item sx={{ mr: 6 }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              backgroundColor: "black",
              fontSize: 13,
              height: 40
            }}
          >
            Subscribe
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        container
        sx={{ justifyContent: { lg: "flex-end", xs: "flex-start" } }}
      >
        <Grid item sx={{ mr: 1 }} >

          <Fab variant="extended" sx={{height:40}}>
            <ThumbUpOutlinedIcon sx={{ mr: 1, fontSize: "25px" }} />
            <Typography color="gray" sx={{ fontSize: 12, mr: 1 }}>
            {parseInt(likeCount).toLocaleString()} 
            </Typography>

            <ThumbDownOutlinedIcon
              sx={{
                mr: 1,
                fontSize: "25px",
                borderLeft: "1px solid gray",
                pl: 2
              }}
            />
          </Fab>
        </Grid>

        <Grid item sx={{ mr: 1 }}>
          <Fab variant="extended" sx={{height:40}}>
            <ReplyOutlinedIcon sx={{ mr: 1, fontSize: "25px" }} />
            <Typography color="gray" sx={{ fontSize: 12, mr: 1 }}>
              Share
            </Typography>
          </Fab>
        </Grid>

        <Grid item>
          <Fab variant="extended" sx={{height:40}}>
            <MoreHorizOutlinedIcon sx={{ fontSize: "25px" }} />
          </Fab>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default VideoPlayerActions;
