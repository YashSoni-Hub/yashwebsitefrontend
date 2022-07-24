import axios from "axios";
import { BASE_URL } from "../util/constants.js";
// const BASE_URL = process.env.BASE_URL as string;
// console.log("BASE_URL", BASE_URL);

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const errHandling = (error) => Promise.reject(error);

const reqHandling = async (config) => {
  const obj = { ...config };
  // const token = await JSON.parse(localStorage.getItem("token") || "");
  // if (token) obj.headers["Authorization"] = token;
  return obj;
};

const resHandling = (response) => response;
axiosInstance.interceptors.request.use(reqHandling, errHandling);
axiosInstance.interceptors.response.use(resHandling, errHandling);

export default axiosInstance;
