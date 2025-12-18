export default {
  name: "feeSection",
  title: "Fee Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "type",
      title: "Section Type",
      type: "string",
      options: {
        list: [
          { title: "One-Time Fees", value: "oneTime" },
          { title: "Annual Fees (Day Boarders)", value: "annualDay" },
          { title: "Annual Fees (Boarders)", value: "annualBoarder" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "rows",
      title: "Fee Rows",
      type: "array",
      of: [{ type: "feeRow" }],
    },
    {
      name: "sectionNote",
      title: "Section Note",
      type: "string",
    },
  ],
};
