export default {
  name: "feeStructure",
  title: "Fee Structure",
  type: "document",
  fields: [
    {
      name: "academicYear",
      title: "Academic Year",
      type: "string",
      description: "e.g. 2024–25",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "sections",
      title: "Fee Sections",
      type: "array",
      of: [{ type: "feeSection" }],
    },
    {
      name: "note",
      title: "Global Note",
      type: "string",
    },
  ],
};
