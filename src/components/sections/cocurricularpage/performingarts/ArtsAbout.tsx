"use client";
import React from "react";
import { Trophy, Flame, Target, Users } from "lucide-react";

const points = [
  {
    icon: <Flame className="w-6 h-6 text-[#FF431E]" />,
    title: "Ignite Creativity",
    desc: "Performing arts spark curiosity, emotional expression, and a love for the craft."
  },
  {
    icon: <Target className="w-6 h-6 text-[#26A4FF]" />,
    title: "Build Technique",
    desc: "Training strengthens breath control, rhythm, stage presence, and discipline."
  },
  {
    icon: <Users className="w-6 h-6 text-[#A2FF24]" />,
    title: "Collaborate & Connect",
    desc: "Dance, music & theatre thrive on teamwork, encouraging communication & trust."
  },
  {
    icon: <Trophy className="w-6 h-6 text-[#FFB800]" />,
    title: "Celebrate Mastery",
    desc: "Progress is acknowledged, milestones are celebrated, and talent is nurtured with pride."
  },
];

const SportsAbout: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* TEXT BLOCK */}
        <div className="space-y-6">
          <h2 className="text-4xl font-raleway font-extrabold text-gray-900 leading-tight">
            Where Expression, Technique & Confidence Come Alive
          </h2>

          <p className="text-lg text-gray-700 max-w-xl">
            At MCS, performing arts aren’t activities — they’re pathways to confidence,
        creativity, and individuality. Students explore rhythm, voice, movement, and
        imagination in a space where expression is encouraged and identity is celebrated.
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




