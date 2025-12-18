import { defineType, defineField } from "sanity";

export default defineType({
  name: "news",
  title: "News",
  type: "document",

  fields: [
    defineField({
      name: "coverImage",
      title: "Cover Image",
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
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Used for cards, previews, and SEO",
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
        { type: "block" }, // paragraphs, headings, lists
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
  description: "Selected images for highlights sections (homepage, showcases)",
  of: [
    {
      type: "image",
      options: { hotspot: true },
    },
  ],
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
