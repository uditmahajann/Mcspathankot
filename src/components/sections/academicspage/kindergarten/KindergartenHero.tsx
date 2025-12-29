"use client";

import type React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-170 flex items-center"
      style={{
        backgroundImage: `url('/Images/Academics/Kindergartenhero.png')`, // replace with your image path
      }}
    >
      {/* Soft overlay for text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-green-/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-80 -mt-15 flex flex-col text-left">
        <span className="inline-block tracking-wide uppercase font-outfit font-semibold text-orange-500  mb-4">
          Kindergarten School • Early Years • Ages 3–6
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-raleway font-extrabold leading-tight text-gray-900">
          A joyful start to learning
          <br />
          <span className="text-amber-500 font-extrabold">for little explorers</span>
        </h1>

        <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          Our kindergarten school blends play, purpose, and personalized attention — helping children grow happy and confident.
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