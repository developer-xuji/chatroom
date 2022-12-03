import axios from "axios";
import { SERVER_URL, TOKEN_COOKIE, TOKEN } from "../env";

const instance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    Authorization: "Bearer " + TOKEN,
  },
});

instance.interceptors.request.use((request) => {
  const token = TOKEN;
  if (token && request.headers) {
    request.headers["Authorization"] = "Bearer " + token;
  }

  return request;
});

export default instance;
