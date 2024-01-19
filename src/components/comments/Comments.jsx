import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCommentsByVideoId } from "../../api/FetchCommentsByVideoId";
import { CardMedia, Grid, TextField, Typography } from "@mui/material";
import { demoThumbnailUrl } from "../../utilities/constants";
import { formatDate } from "../../utilities/formatDate";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import InfiniteScroll from "react-infinite-scroll-component";
import { Pagination } from "..";

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
    //   id: "UgxFrRk2YdugwK5BYDR4AaABAg",
    //   snippet: {
    //     channelId: "",
    //     textDisplay: "",
    //     textOriginal: "",
    //     authorDisplayName: "",
    //     authorProfileImageUrl: "",
    //     authorChannelUrl: "",
    //     authorChannelId: {
    //       value: "",
    //     },
    //     canRate: true,
    //     viewerRating: "",
    //     likeCount: 0,
    //     publishedAt: "",
    //     updatedAt: "",
    //   },
    // },
  ];

  const [items, setItems] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");
  const { id } = useParams();
  const [commentActions, setCommentActions] = useState(actionsInitialValue);

  const getValue = (commentId) => {
    const action = commentActions.find((item) => item.commentId == commentId);
    return action;
  };

  const getMore = () => {
    fetchCommentsByVideoId(
      id,
      setIsLoading,
      setItems,
      setNextPageToken,
      nextPageToken,
      setCommentActions
    );
  };

  useEffect(() => {
    getMore();
  }, []);

  const doLikeAction = (commentId, color) => {
    const comments = items.map((item) => {
      if (item.id === commentId) {
        const currentValue = item.snippet.likeCount;

        if (color == "black") {
          item.snippet.likeCount = currentValue - 1;
        } else {
          item.snippet.likeCount = currentValue + 1;
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
      if (item.id === commentId) {
        const currentValue = item.snippet.likeCount;

        const action = commentActions.find((act) => act.commentId === item.id);

        if (color == "white" && action.isLiked === true) {
          item.snippet.likeCount = currentValue - 1;
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

  //

  return (
    <>
      <InfiniteScroll
        dataLength={items.length}
        next={getMore}
        hasMore={true}
        loader={<Pagination />}
        scrollableTarget="parentScrollCommentsDiv"
      >
        <Grid container>
          <Grid container sx={{ pt: 3 }}>
            <Grid>
              <Link
                style={{ width: "45%", marginRight: "15px" }}
                to={id ? `/video/${id}` : `/video/cV2gBU6hKfY`}
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
                sx={{ width: "600px" }}
              />
            </Grid>
          </Grid>

          {items.map(
            (item) =>
              item.id && (
                <Grid
                  key={item.id}
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
                        to={id ? `/video/${id}` : `/video/cV2gBU6hKfY`}
                      >
                        <CardMedia
                          image={
                            item?.snippet?.authorProfileImageUrl ||
                            demoThumbnailUrl
                          }
                          alt={item?.snippet?.title}
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
                          {item?.snippet?.authorDisplayName}
                        </Typography>

                        <Typography
                          variant="span"
                          sx={{
                            fontSize: 14,
                            mr: 2,
                            color: "#808080",
                          }}
                        >
                          {formatDate(item?.snippet?.publishedAt)}
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
                          {item?.snippet?.textDisplay}
                        </Typography>
                      </Grid>

                      <Grid container sx={{ flexDirection: "row", pt: 1 }}>
                        <Grid>
                          {getValue(item.id)?.isLiked ? (
                            <ThumbUpIcon
                              sx={{ fontSize: "15px", mr: 1 }}
                              onClick={() => {
                                doLikeAction(item.id, "black");
                              }}
                            />
                          ) : (
                            <ThumbUpOutlinedIcon
                              sx={{ fontSize: "15px", mr: 1 }}
                              onClick={() => {
                                doLikeAction(item.id, "white");
                              }}
                            />
                          )}
                        </Grid>
                        <Typography variant="span" sx={{ fontSize: 12, mr: 2 }}>
                          {item?.snippet?.likeCount}
                        </Typography>

                        <Grid>
                          {getValue(item.id)?.isDisLiked ? (
                            <ThumbDownAltIcon
                              sx={{ fontSize: "15px", mr: 3 }}
                              onClick={() => {
                                doDisLikeAction(item.id, "black");
                              }}
                            />
                          ) : (
                            <ThumbDownOffAltIcon
                              sx={{ fontSize: "15px", mr: 3 }}
                              onClick={() => {
                                doDisLikeAction(item.id, "white");
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
      </InfiniteScroll>
    </>
  );
};

export default Comments;
