"use client";
import React from "react";
import { Check } from "lucide-react";

const programs = [
  {
    level: "Foundational Training",
    target: "Beginner | Grades 1–4",
    desc: "Fun, confidence-building sessions that develop basic coordination, game understanding and interest.",
    highlights: [
      "Fundamental movement skills",
      "Game-based learning",
      "Introduction to rules & discipline",
    ],
    color: "bg-[#C9FF6C]",
  },
  {
    level: "Skill Development Training",
    target: "Intermediate | Grades 5–8",
    desc: "Structured training to improve fitness, refine sport-specific skills, and build competitive mindset.",
    highlights: [
      "Weekly fitness drills",
      "Sport-specific coaching",
      "Inter-school competitions",
    ],
    color: "bg-[#fff]",
  },
  {
    level: "Performance Training",
    target: "Advanced | Grades 9–12",
    desc: "Focused coaching for athletes aiming for competitive tournaments, district/state representation, and mastery.",
    highlights: [
      "Strength & conditioning",
      "Mentor-guided improvement plans",
      "Tournament preparation",
    ],
    color: "bg-[#000] text-white",
  },
];

const SportsPrograms = () => {
  return (
    <section className="w-full py-16 my-10 bg-white">
    <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-gray-900 font-raleway font-extrabold">
            Programs & {" "}
            <span className="relative inline-block">
              Training Pathways
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkYellow.png"
                alt="Spark"
                className="absolute w-10 sm:w-12 md:w-14 -top-8 -right-16"
              />
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Whether starting out or aiming for competitive excellence — every student grows with structured progression
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

export default SportsPrograms;










