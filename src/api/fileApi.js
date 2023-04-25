import axios from "axios";

export const fileApi = axios.create({
  baseURL: "http://localhost:3000",
});
