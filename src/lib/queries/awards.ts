export const awardsQuery = `
  *[_type == "award"] | order(year desc)[0..3] {
    _id,
    name,
    description,
    year,
    presentedBy,
    "image": image.asset->url
  }
`;
