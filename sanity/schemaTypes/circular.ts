import { defineType, defineField } from "sanity";

export default defineType({
  name: "circular",
  title: "Circular",
  type: "document",

  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Academic", value: "academic" },
          { title: "Administrative", value: "administrative" },
          { title: "Events", value: "events" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "DD MMM YYYY",
      },
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
      name: "image",
      title: "Attachment / Image (optional)",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      category: "category",
      date: "date",
      media: "image",
    },
    prepare({ title, category, date, media }) {
      return {
        title,
        subtitle: `${category?.toUpperCase()} • ${date ?? ""}`,
        media,
      };
    },
  },
});
