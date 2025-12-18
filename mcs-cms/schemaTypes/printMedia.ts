import { defineType, defineField } from "sanity";

export default defineType({
  name: "printMedia",
  title: "Print Media",
  type: "document",

  fields: [
    defineField({
      name: "image",
      title: "Newspaper Cutting",
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
      rows: 3,
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
