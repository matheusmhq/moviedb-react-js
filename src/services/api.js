import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "pt",
    include_adult: false,
  },
});

export default api;
