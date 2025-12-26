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





// import { defineType, defineField } from "sanity";

// export default defineType({
//   name: "instaReel",
//   title: "Instagram Reel",
//   type: "document",

//   fields: [
//     defineField({
//       name: "title",
//       title: "Title",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     }),

//     defineField({
//       name: "subtitle",
//       title: "Subtitle",
//       type: "string",
//     }),

//     defineField({
//       name: "video",
//       title: "Video Reel",
//       type: "file",
//       options: {
//         accept: "video/*",
//       },
//       validation: (Rule) => Rule.required(),
//     }),

//     defineField({
//       name: "instagramLink",
//       title: "Instagram Reel Link",
//       type: "url",
//       validation: (Rule) =>
//         Rule.uri({
//           scheme: ["https"],
//         }),
//     }),
//   ],

//   preview: {
//     select: {
//       title: "title",
//       subtitle: "subtitle",
//     },
//   },
// });
