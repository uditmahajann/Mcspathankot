export const newsListingQuery = `
*[_type == "news"] | order(date desc) {
  _id,
  title,
  description,
  date,
  "slug": slug.current,
  "image": coverImage.asset->url
}
`;





// export const newsListQuery = `
// *[_type == "news"] | order(date desc) {
//   _id,
//   title,
//   "slug": slug.current,
//   description,
//   date,
//   "image": coverImage.asset->url
// }
// `;

// export const singleNewsQuery = `
// *[_type == "news" && slug.current == $slug][0] {
//   title,
//   description,
//   date,
//   content,
//   highlightsGallery[]{
//     asset->{
//       url
//     }
//   },
//   coverImage{
//     asset->{
//       url
//     }
//   }
// }
// `;
