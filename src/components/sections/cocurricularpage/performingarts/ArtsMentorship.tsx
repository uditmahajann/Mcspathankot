"use client";
import React from "react";

const principles = [
  {
    title: "Personalized Guidance",
    text: "Every student grows at their own pace — with individual coaching that nurtures potential rather than comparison.",
  },
  {
    title: "Technique With Expression",
    text: "Precision matters, but expression matters more. We teach students to perform with skill, emotion, and authenticity.",
  },
  {
    title: "Consistency Over Perfection",
    text: "Progress is built through steady practice — not pressure. Every rehearsal is a step toward mastery.",
  },
  {
    title: "Character Before Applause",
    text: "Respect, teamwork, humility, and professionalism define our performers — long before awards or applause.",
  },
];

const SportsMentorship = () => {
  return (
    <section className="py-16 my-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — HEADLINE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-raleway font-extrabold uppercase tracking-tight text-gray-900 leading-tight">
            MENTORSHIP THAT BUILDS<br />
            **ARTISTS — AND HUMANS.**
          </h2>
        </div>

        {/* RIGHT — DESCRIPTION */}
        <div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
             Behind every performance is a mentor who teaches more than rhythm, expression, 
          or technique. We help students build confidence, empathy, stage discipline, 
          and collaboration — qualities that last long after the curtain falls.
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










