import axios from "axios";

export const BASE_URL = __RAPID_API_BASE_URL__;
export const RAPID_API_KEY = __RAPID_API_KEY__;
export const RAPID_API_HOST = __RAPID_API_HOST__;

const options = {
  params: {
    maxResults: 6,
  },
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": RAPID_API_HOST,
  },
};
export const getAllVideos = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

