import axios from "axios";

export const fetchCommentsByVideoId = async (
  videoId,
  setIsLoading,
  setItems,
  setNextPageToken,
  nextPageToken,
  setCommentActions,
  setCommentsCount,
  setCommentDisabled
) => {
  try {
    setIsLoading(true);
    setCommentDisabled(false);
    const options = {
      params: {
        token: nextPageToken,
        id: videoId,
      },
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": RAPID_API_HOST,
      },
    };

    const url = "comments";

    const {data} = await axios.get(`${RAPID_API_BASE_URL}/${url}`, options);  // 

    // if (
    //   response.data.error.code === 403 &&
    //   response.data.error.errors[0].reason === "commentsDisabled"
    // ) {
    //   setCommentDisabled(true);
    // }

    const actions = [];

    const commentsCount = data.commentsCount;

    const comments = data.data;

    comments.forEach((c) => {
      const action = {
        isLiked: false,
        isDisLiked: false,
        commentId: c.commentId,
      };

      actions.push(action);
    });

    setCommentsCount(commentsCount);
    
    setItems((prevItems) => [...prevItems, ...comments]);

    setCommentActions((prevActions) => [...prevActions, ...actions]);

    setNextPageToken(data?.continuation);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};
