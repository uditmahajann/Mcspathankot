const CLOUD_NAME = "dhlzfm5ix";

export function cld(
  path: string,
  width: number = 1200
) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/q_auto,f_auto,w_${width}/${path}`;
}




// const CLOUD_NAME = "dhlzfm5ix"; // your cloud name

// export function cld(
//   path: string,
//   width = 1200
// ) {
//   return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/q_auto,f_auto,w_${width}/${path}`;
// }
