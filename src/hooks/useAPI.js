import axios from "axios";

const API = axios.create({
  baseURL: "https://shop-co-backend.vercel.app",
  withCredentials: true,
});

export default API;