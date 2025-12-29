import { defineType, defineField } from "sanity";

export default defineType({
  name: "careerOpening",
  title: "Career Opening",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      description: "e.g. Subject Teacher Required (Mathematics)",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "department",
      title: "Department",
      type: "string",
      options: {
        list: [
          { title: "Academics", value: "academics" },
          { title: "Administration", value: "administration" },
          { title: "Sports", value: "sports" },
          { title: "Performing Arts", value: "performingArts" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "experience",
      title: "Experience (in years)",
      type: "number",
      description: "Minimum years of experience required",
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: "education",
      title: "Education Qualification",
      type: "string",
      description: "e.g. B.Ed, M.A (English), B.P.Ed",
    }),

    defineField({
      name: "applicationDeadline",
      title: "Application Deadline",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Job Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "responsibilities",
      title: "Key Responsibilities",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Add short responsibility points",
    }),
  ],

  orderings: [
    {
      title: "Deadline (Soonest first)",
      name: "deadlineAsc",
      by: [{ field: "applicationDeadline", direction: "asc" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      department: "department",
      deadline: "applicationDeadline",
    },
    prepare({ title, department, deadline }) {
      return {
        title,
        subtitle: `${department?.toUpperCase()} • Apply by ${deadline ?? ""}`,
      };
    },
  },
});
