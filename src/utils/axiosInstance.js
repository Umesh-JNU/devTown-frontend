import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://devtown.adaptable.app", // live
  // baseURL: "http://localhost:5000", // localhost
});

export default axiosInstance;