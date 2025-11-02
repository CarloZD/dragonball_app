import axios from "axios";

const api = axios.create({
  baseURL: "https://dragonball-api.com/api", // URL base de la API
  timeout: 10000, // 10 segundos de espera
});

export default api;
