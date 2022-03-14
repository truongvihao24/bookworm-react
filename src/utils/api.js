import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://bookworm-app.test",
  withCredentials: true,
});

export default apiClient;
