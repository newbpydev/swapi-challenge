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
  getAll(category, page) {
    return apiClient.get(`/${category}/?page=${page || 1}`);
  },
  getOne(category, id) {
    return apiClient.get(`/${category}/${id}`);
  },
  getName(url) {
    const id = url.split("/").reverse()[1];
    const category = url.split("/").reverse()[2];

    return apiClient.get(`/${category}/${id}`);
  },
};
