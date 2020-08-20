import axios from "axios";

// Cria métodos em cima de url base
const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
