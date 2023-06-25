import axios from "axios";

axios.defaults.baseURL = "https://recipes-be-ts.vercel.app/";
// axios.defaults.baseURL = "http://localhost:4000/";
axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.common['Authorization'] = ""

axios.interceptors.request.use(
  (request) => request,
  (error) => error
);

axios.interceptors.response.use(
  (response) => response,
  (error) => error
);

export default axios;
