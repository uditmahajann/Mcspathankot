export const achievementsQuery = `
*[_type == "achievement"] | order(date desc) {
  _id,
  category,
  title,
  description,
  date,
  personName,
  personDesignation,
  image {
    asset->{
      url
    }
  }
}
`;
