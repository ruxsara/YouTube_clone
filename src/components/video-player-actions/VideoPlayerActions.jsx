import { Button, CardMedia, Fab, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { demoProfilePicture } from "../../utilities/constants";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Link } from "react-router-dom";
import ButtonGroup from "@mui/material-next/ButtonGroup";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import "../../index.css";

const WHITE= 'white'
const BLACK= 'black'

const VideoPlayerActions = ({ videoDetail }) => {
  const {
    snippet: { title, channelId, channelTitle, thumbnails },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  const [isLiked, setIsLiked] = useState(WHITE);
  const [isDisLiked, setIsDisLiked] = useState(WHITE);

  return (
    <Grid container spacing={2}>
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
                border: "1px solid #e3e3e3",
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
            {parseInt(likeCount).toLocaleString()} subscribers
          </Typography>
        </Grid>

        <Grid item sx={{ mr: 6 }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              backgroundColor: "black",
              fontSize: 13,
              height: 40,
              "&:hover": {
                bgcolor: "black",
                opacity: 0.8,
              },
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
        <Grid item sx={{ mr: 1 }}>
          <ButtonGroup
            color="black"
            variant="outlined"
            sx={{ bgcolor: "rgb(240, 240, 240)", p: 0.5 }}
          >
            <Button
              className="like-video-button"
              onClick={() => {
                if (isLiked === WHITE) {
                  setIsDisLiked(WHITE); 
                }

                setIsLiked(isLiked=== BLACK ? WHITE : BLACK);
              }}
            >
              {isLiked === BLACK? (
                <ThumbUpIcon className="action-icon" />
              ) : (
                <ThumbUpOutlinedIcon className="action-icon" />
              )}

              <Typography color="gray" sx={{ fontSize: 12, ml: 1 }}>
                {parseInt(likeCount).toLocaleString()}
              </Typography>
            </Button>
            <Button
              className="dislike-video-button"
              onClick={() => {
                setIsDisLiked(isDisLiked===BLACK ? WHITE : BLACK);

                if(isDisLiked===WHITE){
                  setIsLiked(WHITE)
                }
              }}
            >
              {isDisLiked ===BLACK ? (
                <ThumbDownAltIcon className="action-icon" />
              ) : (
                <ThumbDownOutlinedIcon className="action-icon" />
              )}
            </Button>
          </ButtonGroup>

          
        </Grid>

        <Grid item sx={{ mr: 1 }}>
          <Fab variant="extended" sx={{ height: 40 }}>
            <ReplyOutlinedIcon sx={{ mr: 1, fontSize: "25px" }} />
            <Typography color="gray" sx={{ fontSize: 12, mr: 1 }}>
              Share
            </Typography>
          </Fab>
        </Grid>

        <Grid item>
          <Fab variant="extended" sx={{ height: 40 }}>
            <MoreHorizOutlinedIcon sx={{ fontSize: "25px" }} />
          </Fab>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default VideoPlayerActions;
