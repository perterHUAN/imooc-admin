import axios from "axios";

const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  config.headers.icode = "8D595F12203AE2AE";
  return config;
});
export default request;
