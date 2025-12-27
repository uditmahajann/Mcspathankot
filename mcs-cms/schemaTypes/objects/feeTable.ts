export default {
  name: "feeTable",
  title: "Fee Table",
  type: "object",
  fields: [
    {
      name: "key",
      title: "Table Key",
      type: "string",
      description: "Example: B, C, D, E",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "title",
      title: "Table Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Bottom Note",
      type: "string",
    },
    {
      name: "rows",
      title: "Fee Rows",
      type: "array",
      of: [{ type: "feeRow" }],
    },
  ],
}





// export default {
//   name: "feeSection",
//   title: "Fee Section",
//   type: "object",
//   fields: [
//     {
//       name: "title",
//       title: "Section Title",
//       type: "string",
//       validation: (Rule: any) => Rule.required(),
//     },
//     {
//       name: "type",
//       title: "Section Type",
//       type: "string",
//       options: {
//         list: [
//           { title: "One-Time Fees", value: "oneTime" },
//           { title: "Annual Fees (Day Boarders)", value: "annualDay" },
//           { title: "Annual Fees (Boarders)", value: "annualBoarder" },
//         ],
//       },
//       validation: (Rule: any) => Rule.required(),
//     },
//     {
//       name: "rows",
//       title: "Fee Rows",
//       type: "array",
//       of: [{ type: "feeRow" }],
//     },
//     {
//       name: "sectionNote",
//       title: "Section Note",
//       type: "string",
//     },
//   ],
// };
