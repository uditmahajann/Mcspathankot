import { defineType, defineField } from "sanity";

export default defineType({
  name: "instaReel",
  title: "Instagram Reel",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "video",
      title: "Video Reel",
      type: "file",
      options: {
        accept: "video/*",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Controls reel order on homepage",
    }),
  ],

  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});