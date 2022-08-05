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

// const apiTest = axios.create({
//   baseURL:
//     "https://en.wikipedia.org/w/api.php?origin=*&action=parse&page=Luke_skywalker&format=json",
//   withCredentials: false,
//   headers: { accept: "application/json", "Content-Type": "aplication/json" },
// });

export default {
  getRoot() {
    return apiClient.get();
  },
  getAll(category) {
    return apiClient.get(`/${category}/`);
  },
  getOne(category, id) {
    return apiClient.get(`/${category}/${id}`);
  },
  // getTest() {
  //   return apiTest.get();
  // },
};
