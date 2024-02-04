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
        id:id,
        pageToken: nextPageToken, 
      },
      headers: { 
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": RAPID_API_HOST,
      },
    };
     const url='related'

    const {data} = await axios.get(`${RAPID_API_BASE_URL}/${url}`, options);

    setItems((prevItems) => [...prevItems, ...data.data]);

    setNextPageToken(data.continuation);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("FINISHED");
    setIsLoading(false);
  }
};
