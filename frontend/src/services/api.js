import axios from "axios";

const API = axios.create({
  baseURL: "https://careerpilot-backend-q0il.onrender.com",
});

export default API;