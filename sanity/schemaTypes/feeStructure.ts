export default {
  name: "feeStructure",
  title: "Fee Structure",
  type: "document",
  fields: [
    {
      name: "tables",
      title: "Fee Tables (B, C, D, E)",
      type: "array",
      of: [{ type: "feeTable" }],
    },
  ],
}

export const feeTable = {
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

export const feeRow = {
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