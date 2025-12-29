import { defineType, defineField } from "sanity";

export default defineType({
  name: "banner",
  title: "Banner Showcase",
  type: "document",
  
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Class XII Toppers", value: "class-xii" },
          { title: "Class X Toppers", value: "class-x" },
          { title: "Student Achievers", value: "student-achievers" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Banner Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title shown below or on banner",
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower number appears first",
      initialValue: 1,
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
      media: "image",
      subtitle: "category",
    },
  },
});
