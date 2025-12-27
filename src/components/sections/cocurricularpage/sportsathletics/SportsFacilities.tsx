"use client";
import React from "react";

const facilities = [
  {
    title: "Football Turf",
    subtitle: "Built for speed, stamina & strategy.",
    image: "/Images/Campus/NewHostel.JPG",
  },
  {
    title: "Basketball Court",
    subtitle: "Precision, agility & game intelligence.",
    image: "/Images/Campus/NewHostel.JPG",
  },
  {
    title: "Cricket Nets",
    subtitle: "Where practice turns into performance.",
    image: "/Images/Campus/NewHostel.JPG",
  },
  {
    title: "Tennis Courts",
    subtitle: "Reflex, control & endurance under pressure.",
    image: "/Images/Campus/NewHostel.JPG",
  },
  {
    title: "Athletics Track",
    subtitle: "Timing. Pace. Discipline.",
    image: "/Images/Campus/NewHostel.JPG",
  },
  {
    title: "Table Tennis Arena",
    subtitle: "Fast reflex zone — every millisecond matters.",
    image: "/Images/Campus/NewHostel.JPG",
  },
];

const SportsFacilities = () => {
  return (
    <section className="w-full py-20 md:py-25 bg-[#0B0B0B] text-white">
      
      {/* Title */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
          World-Class Facilities
        </h2>
        <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Designed for performance, growth, and a championship mindset.
        </p>
      </div>

      {/* Facility Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {facilities.map((item, index) => (
          <div key={index} className="relative rounded-2xl overflow-hidden group h-70 md:h-80 lg:h-90 cursor-pointer">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-70"
            />

            {/* Overlay Text */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold uppercase">
                {item.title}
              </h3>
              {/* <p className="text-sm md:text-lg text-gray-300 mt-2 font-light">
                {item.subtitle}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SportsFacilities;










