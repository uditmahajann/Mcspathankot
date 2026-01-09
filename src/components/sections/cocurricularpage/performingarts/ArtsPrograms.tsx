import React from "react";
import { Check } from "lucide-react";

const programs = [
  {
    level: "FOUNDATIONAL EXPLORATION",
    target: "Beginner | Grades 1–4",
    desc: "Fun, expressive sessions designed to introduce rhythm, movement, storytelling, and confidence — building curiosity and stage comfort.",
    highlights: [
      "Rhythm & body awareness",
      "Basic Voice modulation & expression",
      "Introduction to stage etiquette",
    ],
    color: "bg-purple-400",
  },
  {
    level: "Skill Development Training",
    target: "Intermediate | Grades 5–8",
    desc: "Structured training to strengthen technique, control, coordination, and artistic discipline across music, dance, and theatre.",
    highlights: [
      "Technique-based practice",
      "Regular rehearsals and structured feedback",
      "Stage performances & inter-school participation",
    ],
    color: "bg-[#fff]",
  },
  {
    level: "Performance Training",
    target: "Advanced | Grades 9–12",
    desc: "Focused mentorship for students preparing for stage productions, examinations, competitions, and specialized portfolios.",
    highlights: [
      "Solo & ensemble refinement",
      "Stagecraft, lights, and performance psychology",
      "Preparation for auditions & cultural festivals",
    ],
    color: "bg-[#000] text-white",
  },
];

const ArtsPrograms = () => {
  return (
    <section className="w-full py-16 my-10 bg-white">
    <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-gray-900 font-raleway font-extrabold">
            Programs & Artistic Pathways
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Whether discovering the stage for the first time or preparing for competitive and professional platforms — every student grows with intentional progression.
          </p>
        </div>

      {/* Program Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {programs.map((p, i) => (
          <div
            key={i}
            className={`rounded-2xl p-10 shadow-lg border border-gray-200 transition-all duration-300 hover:scale-[1.03] cursor-pointer ${p.color}`}
          >
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
              {p.level}
            </h3>

            <p className="mt-3 text-base opacity-75 font-medium">{p.target}</p>

            <p className="mt-6 text-lg">{p.desc}</p>

            <ul className="mt-8 space-y-3 text-lg">
              {p.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ArtsPrograms;










