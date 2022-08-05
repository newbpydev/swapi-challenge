import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/root",
  withCredentials: false,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getRoot() {
    return apiClient.get();
  },
};
