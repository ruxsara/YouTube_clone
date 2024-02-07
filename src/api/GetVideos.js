import axios from "axios";


export const getAllVideos = async (url) => {

  const options = {
    params: {
     
    },
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": RAPID_API_HOST,
    },
  };

  const { data } = await axios.get(`${RAPID_API_BASE_URL}/${url}`, options);

  return data;
};