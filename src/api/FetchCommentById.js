import axios from "axios";

export const BASE_URL = RAPID_API_BASE_URL;

export const fetchCommentById = async (id) => {
  try {
    const options = {
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": RAPID_API_HOST,
      },
      params: {
        part: "snippet",
        id: id,
      },
    };

    const url = `comments`;

    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data.items[0];
  } catch (error) {
    console.log(error);
  } finally {
    console.log("FINISHED");
  }
};
