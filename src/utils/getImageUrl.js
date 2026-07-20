import config from "../config";

const getImageUrl = (url) => {
  if (!url) return "";
  if (url.startsWith("http") || url.startsWith("data:")) return url;
  if (url.startsWith("/")) return `${config.API_URL}${url}`;
  return `${config.API_URL}/${url}`;
};

export default getImageUrl;
