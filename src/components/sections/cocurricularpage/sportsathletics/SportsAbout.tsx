"use client";
import React from "react";
import { Trophy, Flame, Target, Users } from "lucide-react";

const points = [
  {
    icon: <Flame className="w-6 h-6 text-[#FF431E]" />,
    title: "Fuel Passion",
    desc: "Sports ignite drive, discipline, and a winning mindset built on effort, not luck."
  },
  {
    icon: <Target className="w-6 h-6 text-[#26A4FF]" />,
    title: "Build Focus",
    desc: "Training sharpens concentration, strategy, and mental strength — skills that last far beyond school."
  },
  {
    icon: <Users className="w-6 h-6 text-[#A2FF24]" />,
    title: "Grow Together",
    desc: "Teamwork, communication, and supportive competition build character and community."
  },
  {
    icon: <Trophy className="w-6 h-6 text-[#FFB800]" />,
    title: "Achieve Excellence",
    desc: "Whether recreational or competitive — progress is measured, celebrated, and earned."
  },
];

const SportsAbout: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* TEXT BLOCK */}
        <div className="space-y-6">
          <h2 className="text-4xl font-raleway font-extrabold text-gray-900 leading-tight">
            Where Strength, Skill & Mindset<br/>Come Together
          </h2>

          <p className="text-lg text-gray-700 max-w-xl">
            At MCS, sports aren’t just activities — they’re a way of shaping 
            discipline, courage, resilience, and leadership. From first steps on the field 
            to championship-level confidence — every student grows stronger in body, 
            mind, and spirit.
          </p>

          {/* FEATURE GRID */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            {points.map((p, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl shadow-sm">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-poppins tracking-wide font-semibold text-gray-900 text-lg">{p.title}</h3>
                  <p className="font-inter text-base text-gray-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <img
            src="/Images/Campus/NewHostel.JPG"
            alt="Sports Motivation"
            className="rounded-3xl w-full object-cover shadow-xl"
          />
          {/* <span className="absolute -bottom-4 left-6 bg-black px-5 py-2 text-white rounded-full text-sm font-medium tracking-wide shadow-lg">
            🏆 Champions are Made, Not Born
          </span> */}
        </div>

      </div>
    </section>
  );
};

export default SportsAbout;




