import axios from "axios";

export const BASE_URL = RAPID_API_BASE_URL;

export const fetchVideoById = async (id, setVideoDetail) => {

  const options = {
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": RAPID_API_HOST
    }
  };

  const url = `videos?part=snippet,statistics&id=${id}`;

  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  setVideoDetail(data.items[0]);

  return data;
};
