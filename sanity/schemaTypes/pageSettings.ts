export default {
  name: "pageSettings",
  title: "Page Settings",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "Page Slug",
      type: "string",
      description: "e.g. fee-structure, admissions",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "isVisible",
      title: "Page Visible",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "hideMessage",
      title: "Optional Hide Message",
      type: "string",
      description: "Shown if page is hidden (optional)",
    },
  ],
};
