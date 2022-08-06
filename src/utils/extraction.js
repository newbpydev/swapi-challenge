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
