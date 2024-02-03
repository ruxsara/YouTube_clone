import axios from "axios";

export const BASE_URL = RAPID_API_BASE_URL;

export const fetchVideoById = async (id, setVideoDetail) => {

  const options = {
    params: {id: id},

    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": RAPID_API_HOST
    }
  };

  const url = `video`;

  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  setVideoDetail(data);

  return data;
};
