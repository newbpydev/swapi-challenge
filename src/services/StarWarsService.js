import axios from "axios";

const apiClient = axios.create({
  // baseURL: "http://localhost:3000/root",
  baseURL: "https://swapi.dev/api",
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
  getAll(category) {
    return apiClient.get(`/${category}/`);
  },
  // getOne(category, id) {

  // }
};
