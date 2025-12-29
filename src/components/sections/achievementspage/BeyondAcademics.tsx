"use client";

import React from "react";
import { Trophy, Palette, Globe2, Users2, Music } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Trophy,
    title: "Sports Achievements",
    description:
      "From district-level tournaments to national championships — our students bring home medals and sportsmanship in equal measure.",
    color: "bg-gradient-to-br from-orange-400 to-red-500",
    image: "/Images/SuccessStories/sports.jpg",
  },
  {
    icon: Palette,
    title: "Art & Cultural Excellence",
    description:
      "Music, dance, theatre, and visual arts thrive here — where creativity finds a stage, a brush, and a spotlight.",
    color: "bg-gradient-to-br from-pink-400 to-purple-500",
    image: "/Images/SuccessStories/cultural.jpg",
  },
  {
    icon: Globe2,
    title: "Community & Social Initiatives",
    description:
      "Through outreach, environmental drives, and social impact projects, our students learn the joy of giving back.",
    color: "bg-gradient-to-br from-green-400 to-emerald-500",
    image: "/Images/SuccessStories/community.jpg",
  },
  {
    icon: Users2,
    title: "Leadership & Personality Development",
    description:
      "Our leadership programs build confidence, teamwork, and compassion — shaping responsible global citizens.",
    color: "bg-gradient-to-br from-blue-400 to-indigo-600",
    image: "/Images/SuccessStories/leadership.jpg",
  },
  {
    icon: Music,
    title: "Innovation & Creative Expression",
    description:
      "Be it robotics, coding, or creative writing — every learner finds a way to express ideas beyond the textbook.",
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    image: "/Images/SuccessStories/innovation.jpg",
  },
];

const BeyondAcademics: React.FC = () => {
  return (
    <section id="beyond-academics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playpen font-semibold text-gray-900 mb-3">
            Beyond Academics
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Success at Montessori Cambridge School isn’t limited to classrooms — it thrives on fields, stages, labs, and in the community.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="relative group overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

                <div className="absolute bottom-0 p-6 text-white z-10">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${item.color} mb-3`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm mt-2 leading-relaxed text-gray-100 max-w-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BeyondAcademics;
