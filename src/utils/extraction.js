export const getId = (url) => {
  const urlSplit = url.split("/");
  const id = urlSplit[urlSplit.length - 2];
  return id;
};
export const getCategory = (url) => {
  const urlSplit = url.split("/");
  const category = urlSplit[urlSplit.length - 3];
  return category;
};

export default {
  getId(url) {
    const urlSplit = url.split("/");
    const id = urlSplit[urlSplit.length - 2];
    return id;
  },
  getCategory(url) {
    const urlSplit = url.split("/");
    const category = urlSplit[urlSplit.length - 3];
    return category;
  },
  getToRoute(url) {
    const id = url.split("/").reverse()[1];
    const category = url.split("/").reverse()[2];
    return `/${category}/${id}`;
  },
};
