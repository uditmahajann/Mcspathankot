export const bannersByCategoryQuery = `
*[_type == "banner" && category == $category]
| order(order asc)[0...3] {
  _id,
  title,
  image {
    asset->{
      url
    }
  }
}
`;


export const studentAchieversBannersQuery = `
*[_type == "banner" && category == "student-achievers"]
| order(order asc)[0...10] {
  _id,
  title,
  image {
    asset->{
      url
    }
  }
}
`;

