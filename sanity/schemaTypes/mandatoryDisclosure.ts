import { defineType, defineField } from "sanity";

export default defineType({
  name: "mandatoryDisclosure",
  title: "Mandatory Disclosure",
  type: "document",

  fields: [
    /* =======================
       A: GENERAL INFORMATION
    ======================== */
    defineField({ name: "schoolName", title: "School Name", type: "string" }),
    defineField({ name: "affiliationNo", title: "Affiliation No.", type: "string" }),
    defineField({ name: "schoolCode", title: "School Code", type: "string" }),
    defineField({ name: "address", title: "Complete Address", type: "string" }),
    defineField({ name: "principal", title: "Principal Name & Qualification", type: "string" }),
    defineField({ name: "email", title: "School Email", type: "string" }),
    defineField({ name: "contact", title: "Contact Details", type: "string" }),

    /* =======================
       B: DOCUMENTS (PDFs)
    ======================== */
    defineField({
      name: "documents",
      title: "Mandatory Documents",
      type: "object",
      fields: [
        { name: "affiliation", type: "file", title: "Affiliation Letter" },
        { name: "noc", type: "file", title: "NOC" },
        { name: "buildingSafety", type: "file", title: "Building Safety Certificate" },
        { name: "fireSafety", type: "file", title: "Fire Safety Certificate" },
        { name: "deo", type: "file", title: "DEO Certificate" },
        { name: "waterHealth", type: "file", title: "Water & Health Certificate" },
      ],
    }),

    /* =======================
       C: RESULT & ACADEMICS
    ======================== */
    defineField({ name: "feeStructure", type: "file", title: "Fee Structure PDF" }),
    defineField({ name: "academicCalendar", type: "file", title: "Academic Calendar PDF" }),
    defineField({ name: "pta", type: "file", title: "PTA Members PDF" }),

    defineField({
      name: "classXResults",
      title: "Class X Results",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "year", type: "number" },
          { name: "registered", type: "number" },
          { name: "passed", type: "number" },
          { name: "percentage", type: "string" },
          { name: "remarks", type: "string" },
        ],
      }],
    }),

    defineField({
      name: "classXIIResults",
      title: "Class XII Results",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "year", type: "number" },
          { name: "registered", type: "number" },
          { name: "passed", type: "number" },
          { name: "percentage", type: "string" },
          { name: "remarks", type: "string" },
        ],
      }],
    }),

    /* =======================
       D: STAFF (TEACHING)
    ======================== */
    defineField({ name: "totalTeachers", type: "number" }),
    defineField({ name: "pgt", type: "number" }),
    defineField({ name: "tgt", type: "number" }),
    defineField({ name: "prt", type: "number" }),
    defineField({ name: "teacherRatio", type: "string" }),
    defineField({ name: "specialEducator", type: "string" }),
    defineField({ name: "counsellor", type: "string" }),

    /* =======================
       E: INFRASTRUCTURE
    ======================== */
    defineField({ name: "campusArea", type: "string" }),
    defineField({ name: "classrooms", type: "string" }),
    defineField({ name: "labs", type: "string" }),
    defineField({ name: "biologyLab", type: "string" }),
    defineField({ name: "chemistryLab", type: "string" }),
    defineField({ name: "physicsLab", type: "string" }),
    defineField({ name: "mathsLab", type: "string" }),
    defineField({ name: "computerLab1", type: "string" }),
    defineField({ name: "computerLab2", type: "string" }),
    defineField({ name: "internet", type: "string" }),
    defineField({ name: "girlsToilets", type: "number" }),
    defineField({ name: "boysToilets", type: "number" }),
    defineField({ name: "inspectionVideo", type: "url" }),
  ],
});
