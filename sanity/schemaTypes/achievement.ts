import { defineType, defineField } from "sanity";

export default defineType({
  name: "achievement",
  title: "Achievement",
  type: "document",

  fields: [
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
          { title: "Alumni", value: "alumni" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Example:Winner-National Robotics Competition 2024",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.max(150).error("Max 150 characters allowed")
    }),

    defineField({
      name: "date",
      title: "Achievement Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "personName",
      title: "Student Name / Team Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "personDesignation",
      title: "Designation",
      type: "string",
      description:
        "Example: Class-XII Student, Head Boy, Olympiad Winner, Football Captain, Software Engineer",
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
