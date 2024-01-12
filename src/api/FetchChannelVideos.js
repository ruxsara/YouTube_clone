import axios from "axios";

export const fetchChannelVideos = async (
  channelId,
  setIsLoading,
  setVideos,
  setNextPageToken,
  nextPageToken // state
) => {
  try {
    setIsLoading(true);

    const options = {
      params: {
        maxResults: 6,
        pageToken: nextPageToken
      },
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": RAPID_API_HOST
      }
    };

    const url = `search?channelId=${channelId}&part=snippet%2Cid&order=date`;

    const response = await axios.get(`${RAPID_API_BASE_URL}/${url}`, options);

    setVideos((prevItems) => [...prevItems, ...response.data.items]);

    setNextPageToken(response.data.nextPageToken);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("FINISHED");
    setIsLoading(false);
  }
};
