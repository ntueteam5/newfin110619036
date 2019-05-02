import axios from 'axios';
const apiKey = "ce7649967e334e1a8d8c51cdec18e999";

export default axios.create({
  method: "get",
  baseURL: "https://newsapi.org/v2",
  params: {
    pageSize: 6
  },
  headers: {
    Authorization: apiKey
  }
});