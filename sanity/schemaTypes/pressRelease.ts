import { defineType, defineField } from "sanity";

export default defineType({
  name: "pressRelease",
  title: "Press Release",
  type: "document",

  fields: [
    defineField({
      name: "thumbnail",
      title: "Thumbnail Image",
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
      title: "Date",
      type: "date",
      options: { dateFormat: "DD MMM YYYY" },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "source",
      title: "Source / Publisher",
      type: "string",
      description: "e.g. Times of India, Hindustan Times, Local News Portal",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "link",
      title: "Article Link",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ["http", "https"],
        }),
    }),
  ],

  preview: {
    select: {
      title: "title",
      source: "source",
      date: "date",
      media: "thumbnail",
    },
    prepare({ title, source, date, media }) {
      return {
        title,
        subtitle: `${source} • ${date ?? ""}`,
        media,
      };
    },
  },
});
