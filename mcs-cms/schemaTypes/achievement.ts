import { defineType, defineField } from "sanity";

export default defineType({
  name: "achievement",
  title: "Achievement",
  type: "document",

  fields: [
    defineField({
      name: "image",
      title: "Banner / Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "date",
      title: "Achievement Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Academics", value: "academics" },
          { title: "Sports", value: "sports" },
          { title: "Cultural", value: "cultural" },
          { title: "Leadership", value: "leadership" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "personType",
      title: "Person Type",
      type: "string",
      options: {
        list: [
          { title: "Student", value: "student" },
          { title: "Alumni", value: "alumni" },
          { title: "Team", value: "team" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "personName",
      title: "Student / Alumni / Team Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "personDesignation",
      title: "Designation",
      type: "string",
      description:
        "Example: Head Boy, Olympiad Winner, Football Captain, Software Engineer",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "personName",
      media: "image",
    },
  },
});
