import axios from "axios";
import { AUTHENTICATE_TOKEN_NAME } from "@/constants";
import { isExistLocalStorage, getLocalStorage } from "@/utils";

const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  config.headers.icode = "8D595F12203AE2AE";
  if (isExistLocalStorage(AUTHENTICATE_TOKEN_NAME)) {
    config.headers.Authorization = `Bearer ${getLocalStorage(AUTHENTICATE_TOKEN_NAME)}`;
  }
  return config;
});
export default request;
