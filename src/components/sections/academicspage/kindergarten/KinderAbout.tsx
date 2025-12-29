"use client";

import React from "react";
import { Sparkles, Smile, Heart } from "lucide-react";

const AboutKindergarten: React.FC = () => {
  return (
    <section className="relative py-25 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-10 right-0 w-56 h-56 bg-pink-100/40 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Right: Content */}
        <div className="text-left">
          <span className="text-rose-500 font-outfit font-semibold uppercase tracking-wide text-sm mb-3 block">
            Our Early Years Philosophy
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-raleway font-extrabold text-gray-900 leading-tight mb-5">
            Where curiosity blooms <br /> and learning feels like play
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            Our Kindergarten nurtures every child’s natural sense of wonder through play, discovery, and gentle guidance. 
            We believe learning should spark joy — where children explore, imagine, and express freely in a caring, secure environment.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            With a focus on curiosity, creativity, and confidence, we lay the foundation for a lifelong love of learning — 
            helping every child grow happy, independent, and ready for the world ahead.
          </p>
        </div>

         {/* Left: Image */}
        <div className="relative flex justify-center">
          <div className="relative rounded-xl overflow-hidden shadow-lg w-full">
            <img
              src="/Images/Sample/Kidsplay.jpg"
              alt="Children learning happily in classroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutKindergarten;
