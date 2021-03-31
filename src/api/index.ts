import axios from "axios";

const api = axios.create({
  baseURL: "https://apisegundoano.herokuapp.com"
})

export default api;
