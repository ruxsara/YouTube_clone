import axios from "axios";

export const BASE_URL = __RAPID_API_BASE_URL__;
export const RAPID_API_KEY = __RAPID_API_KEY__;
export const RAPID_API_HOST = __RAPID_API_HOST__;

const options = {
  params: {
    maxResults: 6,
    pageToken: "",
  },
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": RAPID_API_HOST,
  },
};

export const fetchData = async (
  apiURL,
  setIsLoading,
  setItems,
  setNextPageToken,
  pageToken
) => {
  setIsLoading(true);

  try {
    options.params.pageToken = pageToken;

    const response = await axios.get(`${BASE_URL}/${apiURL}`, options);

    const { items, nextPageToken } = response.data;

    setItems((prevItems) => [...prevItems, ...items]);

    setNextPageToken(nextPageToken);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("FINISHED");
    setIsLoading(false);
  }
};
