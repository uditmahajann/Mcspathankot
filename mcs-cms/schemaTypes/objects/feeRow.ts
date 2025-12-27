export default {
  name: "feeRow",
  title: "Fee Row",
  type: "object",
  fields: [
    {
      name: "class",
      title: "Class",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "annual",
      title: "Annual Fees",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    { name: "one", title: "1st Installment", type: "string" },
    { name: "two", title: "2nd Installment", type: "string" },
    { name: "three", title: "3rd Installment", type: "string" },
    { name: "four", title: "4th Installment", type: "string" },
  ],
}





// export default {
//   name: "feeRow",
//   title: "Fee Row",
//   type: "object",
//   fields: [
//     {
//       name: "label",
//       title: "Class / Fee Type",
//       type: "string",
//       validation: (Rule: any) => Rule.required(),
//     },
//     {
//       name: "annualFee",
//       title: "Annual Fee",
//       type: "number",
//     },
//     {
//       name: "installments",
//       title: "Installments",
//       type: "object",
//       fields: [
//         { name: "first", title: "1st Installment", type: "number" },
//         { name: "second", title: "2nd Installment", type: "number" },
//         { name: "third", title: "3rd Installment", type: "number" },
//         { name: "fourth", title: "4th Installment", type: "number" },
//       ],
//     },
//     {
//       name: "notes",
//       title: "Notes",
//       type: "string",
//     },
//   ],
// };
