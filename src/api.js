import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "6029642cbeb8a97bb7876aea96f13674",
    language: "en-US"
  }
});

export default api;
