import axios from "axios";

export const BASE_URL = RAPID_API_BASE_URL;

export const fetchChannelById = async (channelId, setChannelDetail) => {

  const options = {
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": RAPID_API_HOST
    }
  };

  const url = `channels?part=snippet&id=${channelId}`;

  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  setChannelDetail(data.items[0]);
  return data;
};
