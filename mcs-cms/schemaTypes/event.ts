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
      options: {
        dateFormat: "DD MMM YYYY",
      },
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
      description: "Featured events are shown prominently on the website",
    }),

    defineField({
      name: "media",
      title: "Event Media",
      type: "object",
      fields: [
        defineField({
          name: "image",
          title: "Event Image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "video",
          title: "Event Video",
          type: "file",
          options: {
            accept: "video/*",
          },
        }),
      ],
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      date: "date",
      featured: "featured",
      media: "media.image",
    },
    prepare({ title, date, featured, media }) {
      return {
        title: title,
        subtitle: `${featured ? "⭐ Featured" : "Event"} • ${date ?? ""}`,
        media,
      };
    },
  },
});
