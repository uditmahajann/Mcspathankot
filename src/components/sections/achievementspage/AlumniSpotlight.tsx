"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ALUMNI = [
  {
    title: "Research Scientist, NASA",
    name: "Dr. Aarushi Kapoor",
    role: "Research Scientist, NASA",
    quote:
      "The curiosity Montessori nurtured in me as a child became the foundation of my research career. I still remember those first science experiments in our lab!",
    image: "/Images/Heros/samplehero.JPG",
    country: "USA",
  },
  {
    title: "Research Scientist, NASA",
    name: "Aditya Mehta",
    role: "Software Engineer, Google",
    quote:
      "MCS taught me how to think, not what to think. The school’s emphasis on exploration shaped my approach to coding and innovation.",
    image: "/Images/Heros/samplehero.JPG",
    country: "USA",
  },
  {
    title: "Research Scientist, NASA",
    name: "Simran Kaur",
    role: "Fashion Designer, Milan School of Design",
    quote:
      "From art exhibitions to creative clubs — MCS gave me a platform to dream, design, and dare. That spirit still drives my work today.",
    image: "/Images/Heros/samplehero.JPG",
    country: "Italy",
  },
  {
    title: "Research Scientist, NASA",
    name: "Rohan Gupta",
    role: "Entrepreneur, EduTech Startup Founder",
    quote:
      "Leadership and teamwork weren’t just words — they were lived every day at MCS. My startup’s core values come from my school experience.",
    image: "/Images/Heros/samplehero.JPG",
    country: "India",
  },
];

const AlumniSpotlight: React.FC = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % ALUMNI.length);
  const prev = () => setIndex((prev) => (prev - 1 + ALUMNI.length) % ALUMNI.length);

  const alum = ALUMNI[index];

  return (
    <section id="alumni-spotlight" className="relative py-4 sm:py-10 my-10 bg-white">
    <div className="container mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium leading-normal">
            Recognizing Our <br className="block md:hidden"/>
            <span className="relative inline-block">
              Alumni Success
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkPurple.png"
                alt="Spark"
                className="absolute w-10 sm:w-12 md:w-14 -top-6 md:-top-8 -right-12 md:-right-15"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Our alumni make their mark across the world. Their journeys are a testament to the values and vision nurtured at Montessori Cambridge School.
          </p>
        </div>

      <div className="max-w-7xl mx-auto sm:px-8 flex flex-col lg:flex-row items-center gap-8 sm:gap-10">
        
        {/* Image */}
        <div className="relative w-full lg:w-1/2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
          <img
            src={alum.image}
            alt={alum.name}
            className="w-full h-105 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Text */}
        <div className="lg:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-poppins tracking-wide font-semibold text-gray-900 mb-3 sm:mb-4">
            {alum.title}
          </h2>
          <p className="font-inter text-base sm:text-lg text-gray-600 mb-6 max-w-xl">{alum.quote}</p>
          <h3 className="text-lg sm:text-xl font-poppins tracking-wide font-semibold text-gray-900">{alum.name}</h3>
          <p className="text-sm sm:text-base font-inter text-yellow-700 font-medium">
            {alum.role} — {alum.country}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-9 sm:left-12 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-md transition cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-9 sm:right-12 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-md transition cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
    </section>
  );
};

export default AlumniSpotlight;
