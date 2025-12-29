export default {
  name: "syllabus",
  title: "Syllabus",
  type: "document",
  fields: [
    {
      name: "group",
      title: "Grade Group",
      type: "string",
      options: {
        list: [
          { title: "Grade I–V", value: "I-V" },
          { title: "Grade VI–VIII", value: "VI-VIII" },
          { title: "Grade IX–X", value: "IX-X" },
          { title: "Grade XI–XII", value: "XI-XII" },
        ],
        layout: "radio",
      },
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "className",
      title: "Class",
      type: "string",
      description: "e.g. Class I, Class II, Class IX",
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "classOrder",
      title: "Class Order",
      type: "number",
      description: "Used for sorting (1 for Class I, 2 for Class II...)",
      validation: (Rule: any) => Rule.required().min(1).max(12),
    },

    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "downloadFile",
      title: "Syllabus PDF",
      type: "file",
      options: {
        accept: ".pdf",
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],

  orderings: [
    {
      title: "Class Order",
      name: "classOrderAsc",
      by: [{ field: "classOrder", direction: "asc" }],
    },
  ],
};
