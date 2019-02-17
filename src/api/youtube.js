import axios from "axios";

const KEY = "AIzaSyBDAjTcERIkgg3GT-XQyxoQhmRHpq0eQv0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
