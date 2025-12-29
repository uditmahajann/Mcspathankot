import { defineType, defineField } from "sanity";

export default defineType({
  name: "award",
  title: "Awards",
  type: "document",

  fields: [
    defineField({
      name: "image",
      title: "Award Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "name",
      title: "Award Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(1900).max(new Date().getFullYear() + 1),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "presentedBy",
      title: "Presented By",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],

  orderings: [
    {
      title: "Year (Newest first)",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "year",
      media: "image",
    },
  },
});