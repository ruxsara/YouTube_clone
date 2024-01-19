import axios from "axios";
import { fetchCommentById } from "./FetchCommentById";

export const fetchCommentsByVideoId = async (
  id,
  setIsLoading,
  setItems,
  setNextPageToken,
  nextPageToken,
  setCommentActions
) => {
  try {
    setIsLoading(true);

    const options = {
      params: {
        maxResults: "2",
        pageToken: nextPageToken,
        part: "snippet",
        videoId: id,
      },
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": RAPID_API_HOST,
      },
    };

    const url = "commentThreads";

    //Get Comment IDs
    const response = await axios.get(`${RAPID_API_BASE_URL}/${url}`, options);

    const comments = [];
    const commentActions = [];

    for (let i = 0; i < 3; i++) {
      const item = response.data.items[i];

      // Get CommentDetails
      const comment = await fetchCommentById(item.id);

      comments.push(comment);

      const action = {
        isLiked: false,
        isDisLiked: false,
        commentId: comment.id,
      };

      commentActions.push(action);
    }

    setItems((prevItems) => [...prevItems, ...comments]);
    setCommentActions((prevActions) => [...prevActions, ...commentActions]);

    setNextPageToken(response.data.nextPageToken);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};
