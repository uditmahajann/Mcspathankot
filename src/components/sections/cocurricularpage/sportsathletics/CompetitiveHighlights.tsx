"use client";
import React from "react";

const tournaments = [
  {
    title: "Inter-School Football Championship",
    result: "Champions",
    detail: "2024 • City Level",
    img: "/Images/Campus/NewHostel.JPG",
  },
  {
    title: "District Athletics Meet",
    result: "8 Medals",
    detail: "Track & Field • Sprint + Relay",
    img: "/Images/Campus/NewHostel.JPG",
  },
  {
    title: "Zonal Basketball Tournament",
    result: "Runners-Up",
    detail: "U17 Category • 2024",
    img: "/Images/Campus/NewHostel.JPG",
  },
  {
    title: "Table Tennis Invitational",
    result: "Semi-Finalists",
    detail: "Singles | Doubles",
    img: "/Images/Campus/NewHostel.JPG",
  },
];

const CompetitiveHighlights = () => {
  return (
    <section className="w-full py-20 md:py-25 bg-[#0B0B0B] text-white">
      {/* Heading */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
          Competitive Highlights
        </h2>
        <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Moments where training turned into performance — and performance into results.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {tournaments.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden bg-[#151515] border border-gray-700 hover:border-gray-500 transition-all duration-300"
          >
            {/* Image */}
            <div className="h-64 w-full overflow-hidden">
              <img
                src={t.img}
                alt={t.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="p-6 flex flex-col gap-2">
              <h3 className="font-poppins tracking-wide text-2xl font-bold">{t.title}</h3>
              <p className="font-inter text-base text-gray-400">{t.detail}</p>

              <span className="mt-3 inline-block bg-[#E9FF4A] text-black px-5 py-2 rounded-full font-inter font-semibold text-sm w-fit">
                {t.result}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompetitiveHighlights;



