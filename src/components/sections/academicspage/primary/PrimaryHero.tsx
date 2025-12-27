"use client";

import type React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-170 flex items-center"
      style={{
        backgroundImage: `url('/Images/Academics/Phero.png')`, // replace with your image path
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-60 flex flex-col text-left">
        <span className="inline-block tracking-wide uppercase font-outfit font-semibold text-rose-500  mb-4">
          Primary School • Foundational Years • Ages 6–10
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-raleway font-extrabold leading-tight text-gray-900">
          Building curiosity & character for
          <br />
          <span className="text-fuchsia-600 font-extrabold">tomorrow’s thinkers</span>
        </h1>

        <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          Children at MCS Primary learn with curiosity and purpose — developing essential skills through joyful experiences.
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