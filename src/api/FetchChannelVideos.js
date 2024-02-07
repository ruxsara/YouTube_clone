import axios from "axios";

export const fetchChannelVideos = async (
  channelId,
  setIsLoading,
  setVideos,
  setNextPageToken,
  nextPageToken
) => {
  try {
    setIsLoading(true);

    const options = {
      url: 'https://youtube-v3-alternative.p.rapidapi.com/channel',
  params: {
    id: channelId
  },
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": RAPID_API_HOST
      }
    };
    const url_u= '/channel';

    const url = `search?channelId=${channelId}&part=snippet%2Cid&order=date`;

    const {data} = await axios.get(`${RAPID_API_BASE_URL}/${url}`, options);

    setVideos((prevItems) => [...prevItems, ...data.items]);

    setNextPageToken(data.continuation);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("FINISHED");
    setIsLoading(false);
  }
};
