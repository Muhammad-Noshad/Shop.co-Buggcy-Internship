import axios from "axios";

export const API = axios.create({
  baseURL: "https://fakestoreapi.com"
});

const useFetch = async(urlEndpoint) => {
  const response = await API.get(urlEndpoint);
  return response.data;
} 

export default useFetch;