"use client";

import type React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-180 flex items-center py-30"
      style={{
        backgroundImage: `url('/Images/Academics/Seniorhero.png')`, // replace with your image path
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-60 flex flex-col text-left mt-10">
        <span className="inline-block tracking-wide uppercase font-outfit font-semibold text-amber-300  mb-4">
          Senior Secondary School • Future Pathwats • Ages 16–18
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-raleway font-extrabold leading-tight text-white">
          Defining ambitions
          <br /> for the
          <span className="text-amber-400 font-extrabold"> world beyond school</span>
        </h1>

        <p className="mt-4 text-lg text-gray-200 max-w-2xl">
          Our senior secondary program offers specialized academic streams, mentorship, and holistic development. Students are guided to pursue higher education and careers with clarity, confidence, and integrity.
        </p>

        {/* <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/admissions/apply-online"
            className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow-md transition"
          >
            Apply Now
          </a>
          <a
            href="/admissions/schedule-visit"
            className="inline-block bg-white/90 text-blue-800 border border-blue-100 hover:bg-blue-50 font-medium px-6 py-3 rounded-full shadow-sm transition"
          >
            Book a Tour
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;