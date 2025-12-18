export default {
  name: "course",
  title: "Course",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Course Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "components",
      title: "Components",
      type: "array",
      of: [{ type: "string" }],
      description: "Shown as pill tags on UI",
    },
  ],
};
