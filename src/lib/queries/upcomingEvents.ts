export const upcomingEventsQuery = `
*[
  _type == "annualCalendar" &&
  date >= now()
]
| order(date asc)[0...10]{
  title,
  description,
  date,
  location,
  audience
}
`



// export const upcomingEventsQuery = `
// *[
//   _type == "annualCalendar" &&
//   date >= today()
// ]
// | order(date asc)[0...10]{
//   title,
//   description,
//   date,
//   location,
//   audience
// }
// `;
