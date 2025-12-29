export const alumniQuery = `
*[_type == "achievement" && category == "alumni"]
| order(date desc)[0...10] {
  _id,
  title,
  personName,
  personDesignation,
  description,
  date,
  image {
    asset->{
      url
    }
  }
}
`;
