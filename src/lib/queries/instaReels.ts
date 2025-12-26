export const instaReelsQuery = `
*[_type == "instaReel"] | order(order asc)[0...10] {
  _id,
  title,
  "videoUrl": video.asset->url
}
`;
