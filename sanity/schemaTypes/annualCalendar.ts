import { defineType, defineField } from "sanity";

export default defineType({
  name: "annualCalendar",
  title: "Annual Calendar",
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
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Academic", value: "academic" },
          { title: "Sports", value: "sports" },
          { title: "Cultural", value: "cultural" },
          { title: "Administrative", value: "administrative" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "date",
      title: "Event Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "time",
      title: "Time (Range)",
      type: "string",
      description: "Example: 8:00 AM – 11:00 AM",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),

    defineField({
      name: "audience",
      title: "Audience",
      type: "string",
      description: "Example: Grade I, All Students, Parents",
    }),
  ],

  orderings: [
    {
      title: "Date (Newest First)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Date (Oldest First)",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "date",
    },
  },
});
