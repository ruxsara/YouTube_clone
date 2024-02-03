import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { CardMedia, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCommentsByVideoId } from "../../api/FetchCommentsByVideoId";
import CommentCount from "../../comment-count/CommentCount";
import { demoThumbnailUrl } from "../../utilities/constants";
import { formatDate } from "../../utilities/formatDate";

const Comments = () => {
  const actionsInitialValue = [
    // {
    //   commentId: "UgxFrk2YdugwK5BYDR4AaABAg",
    //   isLiked: false,
    //   isDisLiked: false,
    // },
  ];

  const initialValue = [
    // {
    //   commentId: "",
    //   commentsCount: "",
    //   continuation: "",
    //   authorProfileImageUrl: [{url:''}],
    //   authorDisplayName: "",
    //   authorChannelId: "",
    //   textDisplay: "",
    //   publishedTimeText: "",
    //   likesCount: "",
    //   replyCount: "",
    //   replyToken: "",
    // },
  ];

  const [items, setItems] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");
  const { id: videoId } = useParams();
  const [commentActions, setCommentActions] = useState(actionsInitialValue);
  const [commentsCount, setCommentsCount] = useState(0);
  const [commentDisabled, setCommentDisabled] = useState(false);

  const getValue = (commentId) => {
    const action = commentActions.find(
      (action) => action.commentId == commentId
    );
    console.log({ commentId, action });

    return action;
  };

  const getMore = () => {
    fetchCommentsByVideoId(
      videoId,
      setIsLoading,
      setItems,
      setNextPageToken,
      nextPageToken,
      setCommentActions,
      setCommentsCount,
      setCommentDisabled
    );
  };

  useEffect(() => {
    getMore();
  }, []);

  const doLikeAction = (commentId, color) => {


    const comments = items.map((item) => {
      if (item.commentId === commentId) {
        const currentValue = item.likesCount;

        if (
          currentValue.includes("K") ||
          currentValue.includes("M") ||
          currentValue.includes("B")
        ) {
          return item;
        }

        if (color == "black") {
          item.likesCount = (parseInt(currentValue) - 1).toString();
        } else {
          item.likesCount = (parseInt(currentValue) + 1).toString();
        }
      }
      return item;
    });

    setItems(comments);

    const actions = commentActions.map((item) => {
      if (item.commentId === commentId) {
        const newValue = !item.isLiked;

        item.isLiked = newValue;

        if (newValue == true) {
          item.isDisLiked = false;
        }
      }
      return item;
    });

    setCommentActions(actions);
  };

  const doDisLikeAction = (commentId, color) => {
    const comments = items.map((item) => {
      if(item.commentId === commentId) {
        const currentValue = item.likesCount;

        const action = commentActions.find(
          (act) => act.commentId === item.commentId
        );

        if(
          currentValue.includes("K") ||
          currentValue.includes("M") ||
          currentValue.includes("B")
        ) {
          return item;
        }

        if(color == "white" && action.isLiked === true) {
          item.likesCount = (parseInt(currentValue) - 1).toString();
        }
      }
      return item;
    });

    setItems(comments);

    const actions = commentActions.map((item) => {
      if (item.commentId == commentId) {
        const newValue = !item.isDisLiked;

        item.isDisLiked = newValue;

        if (color === "white") {
          item.isLiked = false;
        }
      }
      return item;
    });

    setCommentActions(actions);
  };

  return (
    <>
      {!commentDisabled ? (
        <>
          <CommentCount commentsCount={commentsCount} />
          {/* <InfiniteScroll
        dataLength={items.length}
        next={getMore}
        hasMore={true}
        loader={<Pagination />}
        scrollableTarget="parentScrollCommentsDiv"
      > */}
          <Grid container>
            <Grid container sx={{ pt: 3 }}>
              <Grid>
                <Link
                  style={{ width: "45%", marginRight: "15px" }}
                  to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}
                >
                  <CardMedia
                    image={demoThumbnailUrl}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50% ",
                    }}
                  />
                </Link>
              </Grid>
              <Grid>
                <TextField
                  id="standard-basic"
                  label="Add a comment..."
                  variant="standard"
                  sx={{ width: "800px", ml: 3 }}
                />
              </Grid>
            </Grid>

            {items.map(
              (item, index) =>
                item.commentId && (
                  <Grid
                    key={index}
                    container
                    sx={{
                      flexDirection: "row",
                      padding: 2,
                      justifyContent: "flex-start",
                    }}
                  >
                    <Grid container flexDirection="row">
                      <Grid id="profileContainer">
                        <Link
                          style={{ width: "45%", marginRight: "50px" }}
                          to={
                            videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`
                          }
                        >
                          <CardMedia
                            image={
                              item.authorProfileImageUrl[0].url ||
                              demoThumbnailUrl
                            }
                            style={{
                              width: 40,
                              height: 40,
                              borderRadius: "50% ",
                            }}
                          />
                        </Link>
                      </Grid>

                      <Grid
                        id="commentDetailsContainer"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Grid>
                          <Typography
                            variant="span"
                            sx={{
                              fontSize: 15,
                              mr: 2,
                              fontWeight: "bold",
                            }}
                          >
                            {item.authorDisplayName}
                          </Typography>

                          <Typography
                            variant="span"
                            sx={{
                              fontSize: 14,
                              mr: 2,
                              color: "#808080",
                            }}
                          >
                            {item.publishedTimeText}
                          </Typography>
                        </Grid>

                        <Grid style={{ marginTop: "7px" }}>
                          <Typography
                            variant="span"
                            sx={{
                              fontSize: 14,
                              mr: 2,
                            }}
                          >
                            {item.textDisplay}
                          </Typography>
                        </Grid>

                        <Grid container sx={{ flexDirection: "row", pt: 1 }}>
                          <Grid>
                            {getValue(item.commentId)?.isLiked ? (
                              <ThumbUpIcon
                                sx={{ fontSize: "15px", mr: 1 }}
                                onClick={() => {
                                  doLikeAction(item.commentId, "black");
                                }}
                              />
                            ) : (
                              <ThumbUpOutlinedIcon
                                sx={{ fontSize: "15px", mr: 1 }}
                                onClick={() => {
                                  doLikeAction(item.commentId, "white");
                                }}
                              />
                            )}
                          </Grid>
                          <Typography
                            variant="span"
                            sx={{ fontSize: 12, mr: 2 }}
                          >
                            {item.likesCount}
                          </Typography>

                          <Grid>
                            {getValue(item.commentId)?.isDisLiked ? (
                              <ThumbDownAltIcon
                                sx={{ fontSize: "15px", mr: 3 }}
                                onClick={() => {
                                  doDisLikeAction(item.commentId, "black");
                                }}
                              />
                            ) : (
                              <ThumbDownOffAltIcon
                                sx={{ fontSize: "15px", mr: 3 }}
                                onClick={() => {
                                  doDisLikeAction(item.commentId, "white");
                                }}
                              />
                            )}
                          </Grid>
                          <Link style={{ fontSize: 12, fontWeight: 800 }}>
                            Reply
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                )
            )}
          </Grid>
          {/* </InfiniteScroll> */}
        </>
      ) : (
        <Grid container justifyContent="center">
          <p>
            <b>Comments are disabled... </b>
          </p>
        </Grid>
      )}
    </>
  );
};

export default Comments;
