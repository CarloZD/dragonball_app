import axios from "axios";

const api = axios.create({
  baseURL: "https://dragonball-api.com/api",
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error en la petición:", error);
    return Promise.reject(error);
  }
);

export default api;