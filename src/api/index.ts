import axios from "axios";

const api = axios.create({
  baseURL: "https://apigpc.herokuapp.com/"
})

export default api;
