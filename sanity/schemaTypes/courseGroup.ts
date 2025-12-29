export default {
  name: "courseGroup",
  title: "Academic Course",
  type: "document",
  fields: [
    {
      name: "gradeGroup",
      title: "Grade Group",
      type: "string",
      options: {
        list: [
          { title: "Grade I–V", value: "I-V" },
          { title: "Grade VI–VIII", value: "VI-VIII" },
          { title: "Grade IX–X", value: "IX-X" },
          { title: "Grade XI–XII", value: "XI-XII" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "title",
      title: "Section Title",
      type: "string",
      description: "e.g. Primary School (Grades 1–5)",
    },
    {
      name: "description",
      title: "Section Description",
      type: "text",
    },
    {
      name: "courses",
      title: "Courses",
      type: "array",
      of: [{ type: "course" }],
    },
  ],
};
