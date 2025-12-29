"use client";

import React from "react";

const ENRICHMENTS = [
  {
    id: 1,
    title: "Sports Education & Gym Activities",
    description:
      "Fun fitness sessions designed to build coordination, teamwork, and confidence through movement.",
    image: "/Images/Sample/Kidsplay.jpg",
    bg: "",
  },
  {
    id: 2,
    title: "STEM & Innovation Lab",
    description:
      "Hands-on experiments, robotics, and model-building nurture logical and creative thinking.",
    image: "",
    bg: "bg-purple-300",
  },
  {
    id: 3,
    title: "Music, Rhythm & Dance",
    description:
      "Children move to beats, sing songs, and learn rhythm — building confidence and joy through music.",
    image: "/Images/Sample/Kidsplay.jpg",
    bg: "",
  },
  {
    id: 4,
    title: "Theatre & Public Speaking",
    description:
      "Creative performances boost confidence, communication, and leadership.",
    image: "",
    bg: "bg-lime-200",
  },
  {
    id: 5,
    title: "Storytelling & Puppet Theatre",
    description:
      "Interactive storytelling that sparks imagination, builds language, and teaches life lessons with fun.",
    image: "/Images/Sample/Kidsplay.jpg",
    bg: "",
  },
  {
    id: 6,
    title: "Life Skills & Wellness",
    description:
      "Sessions on mindfulness, values, and empathy help shape responsible and balanced individuals.",
    image: "",
    bg: "bg-rose-300",
  },
];

const EnrichmentExtras: React.FC = () => {
  return (
    <section id="enrichment-extras" className="bg-white">
      <div className="mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {ENRICHMENTS.map((item, index) => (
            <div
              key={item.id}
              className={`relative group ${
                index % 2 === 0 ? "" : item.bg
              } flex flex-col justify-center items-center text-center p-0 transition-all hover:scale-[1.02]`}
            >
              {index % 2 === 0 ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <>
                  <h3 className="text-lg sm:text-2xl font-poppins font-semibold tracking-wide text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-inter text-lg leading-relaxed max-w-sm mx-auto px-5">
                    {item.description}
                  </p>
                </>
              )}

              {/* Subtle overlay effect on hover */}
              {index % 2 === 0 && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnrichmentExtras;