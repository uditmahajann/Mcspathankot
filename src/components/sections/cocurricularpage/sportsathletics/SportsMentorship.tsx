"use client";
import React from "react";

const principles = [
  {
    title: "Personal Guidance",
    text: "Every student trains at a pace that challenges them — without overwhelming them.",
  },
  {
    title: "Growth Mindset",
    text: "Mistakes aren’t failures — they’re data. Every attempt teaches improvement.",
  },
  {
    title: "Consistency Over Intensity",
    text: "Training focuses on rhythm and discipline — not occasional bursts.",
  },
  {
    title: "Character First",
    text: "Respect, professionalism, and effort matter more than the scoreboard.",
  },
];

const SportsMentorship = () => {
  return (
    <section className="py-16 my-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — HEADLINE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-raleway font-extrabold uppercase tracking-tight text-gray-900 leading-tight">
            Coaching That Builds<br />
            **Athletes — and Individuals.**
          </h2>
        </div>

        {/* RIGHT — DESCRIPTION */}
        <div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
            Behind every confident player is a coach who teaches more than skills. 
            Our mentors help students build discipline, resilience, sportsmanship, 
            and focus — traits that carry far beyond the field.
          </p>
        </div>
      </div>

      {/* PRINCIPLES GRID */}
      <div className="max-w-7xl mx-auto mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 ">
        {principles.map((p, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-2xl p-8 hover:bg-gray-50 bg-[black] text-white hover:text-black transition-all duration-300"
          >
            <h3 className="text-2xl font-poppins tracking-wide font-bold mb-4">{p.title}</h3>
            <p className="font-inter leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SportsMentorship;










