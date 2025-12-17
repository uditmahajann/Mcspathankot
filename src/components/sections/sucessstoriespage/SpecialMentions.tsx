"use client";

import React from "react";

const UNIVERSITIES = [
  { name: "University of Toronto", logo: "/Images/Campus/NewHostel.JPG" },
  { name: "London School of Economics", logo: "/Images/Campus/NewHostel.JPG" },
  { name: "IIT Delhi", logo: "/Images/Campus/NewHostel.JPG" },
  { name: "University of Melbourne", logo: "/Images/Campus/NewHostel.JPG" },
  { name: "Nanyang Technological University", logo: "/Images/Campus/NewHostel.JPG" },
  { name: "Delhi University", logo: "/Images/Campus/NewHostel.JPG" },
  { name: "New York University", logo: "/Images/Campus/NewHostel.JPG" },
  { name: "University of British Columbia", logo: "/Images/Campus/NewHostel.JPG" },
];

const SpecialMentions: React.FC = () => {
  return (
    <section id="global-recognition" className="my-10 py-25 bg-gradient-to-br from-violet-950 via-blue-900 to-indigo-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center">
        <div className="text-center mb-10 sm:mb-16">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium">
          Student Achievers Showcase
        </h2>
        <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-4xl mx-auto">
          Every achievement at Montessori Cambridge School reflects curiosity, discipline, and the courage to shine — inside and beyond the classroom.
        </p>
        </div>

        {/* University Logos */}
        <div className="grid grid-cols-2 gap-10 items-center justify-center">
          {UNIVERSITIES.map((u, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
            >
              <img
                src={u.logo}
                alt={u.name}
                className="object-contain grayscale hover:grayscale-0 transition rounded-xl"
                loading="lazy"
              />
              <p className="mt-3 text-lg font-inter font-medium text-gray-100">{u.name}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="mt-14">
          <a
            href="/alumni"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-full shadow transition"
          >
            Explore Our Alumni Network
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default SpecialMentions;
