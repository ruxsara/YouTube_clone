import axios from "axios";

export const fetchData = async (
  keyword,
  setIsLoading,
  setItems,
  setNextPageToken,
  nextPageToken
) => {
  try {
    setIsLoading(true);

    const options = {
      params: {
        token: nextPageToken,
        query: keyword,
        geo: "US",
        lang: "en",
        type: "video",
      },

      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": RAPID_API_HOST,
      },
    };

    const url = "search";

    const response = await axios.get(`${RAPID_API_BASE_URL}/${url}`, options);

    setItems((prevItems) => [...prevItems, ...response.data.data]);

    setNextPageToken(response.data.continuation);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("FINISHED");
    setIsLoading(false);
  }
};
