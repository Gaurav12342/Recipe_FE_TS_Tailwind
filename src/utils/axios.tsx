import axios from "axios";

const token = localStorage.getItem("user-data");


axios.defaults.baseURL = "https://recipes-be-ts-23fx-l5surhiys-gaurav12342.vercel.app/";
// axios.defaults.baseURL = "http://localhost:4000/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';

axios.interceptors.request.use(
  (request) => request,
  (error) => error
);

axios.interceptors.response.use(
  (response) => response,
  (error) => error
);

export default axios;
