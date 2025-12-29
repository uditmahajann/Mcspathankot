import { defineType, defineField } from "sanity";

export default defineType({
  name: "news",
  title: "News",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Used for cards, previews, and SEO",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "date",
      title: "Publish Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "content",
      title: "Article Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),

    defineField({
      name: "highlightsGallery",
      title: "Highlights Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
  ],

  orderings: [
    {
      title: "Date (Newest first)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "coverImage",
      subtitle: "date",
    },
  },
});
