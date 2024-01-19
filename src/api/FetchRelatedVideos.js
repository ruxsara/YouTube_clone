import axios from "axios";

export const fetchRelatedVideos = async (
  id,
  setIsLoading,
  setItems,
  setNextPageToken,
  nextPageToken 
) => {


  try {
    setIsLoading(true);

    const options = {
      params: { 
        maxResults: 20,
        pageToken: nextPageToken, 
      },
      headers: { 
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": RAPID_API_HOST,
      },
    };

    const url = `search?part=snippet&relatedToVideoId=${id}&type=video`

    const response = await axios.get(`${RAPID_API_BASE_URL}/${url}`, options);

    setItems((prevItems) => [...prevItems, ...response.data.items]);

    setNextPageToken(response.data.nextPageToken);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("FINISHED");
    setIsLoading(false);
  }
};
