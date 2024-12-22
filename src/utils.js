

export const getImgUrl = (path) => {
  const url = new URL(`/assets/${path}`, import.meta.url).href;
  console.log(url); // Debug: Check the resolved URL
 
};