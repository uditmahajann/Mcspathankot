import { defineType, defineField } from "sanity";

export default defineType({
  name: "event",
  title: "School Event",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "date",
      title: "Event Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),

    defineField({
      name: "featured",
      title: "Featured Event",
      type: "boolean",
      initialValue: false,
      description: "Featured events appear in the top section",
    }),

    defineField({
      name: "video",
      title: "Event Video",
      type: "file",
      options: {
        accept: "video/*",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
  ],

  preview: {
    select: {
      title: "title",
      date: "date",
      featured: "featured",
    },
    prepare({ title, date, featured }) {
      return {
        title,
        subtitle: `${featured ? "⭐ Featured" : "Event"} • ${date ?? ""}`,
      };
    },
  },
});
