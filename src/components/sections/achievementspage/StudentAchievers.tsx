"use client";

import React from "react";
import { Trophy, Palette, Lightbulb, Users2, Medal } from "lucide-react";

const ACHIEVERS = [
  {
    name: "Aarav Sharma",
    category: "Academic Excellence",
    achievement: "Scored 99.4% in CBSE Board Examination 2024",
    image: "/Images/Campus/NewHostel.JPG",
    icon: Trophy,
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Ananya Gupta",
    category: "Sports Champion",
    achievement: "Gold Medalist at CBSE National Swimming Championship",
    image: "/Images/Campus/NewHostel.JPG",
    icon: Medal,
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Rohan Mehta",
    category: "Innovation & Robotics",
    achievement: "Winner – National Robotics Olympiad 2024",
    image: "/Images/Campus/NewHostel.JPG",
    icon: Lightbulb,
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Simran Kaur",
    category: "Art & Culture",
    achievement: "State-level Kathak performer, awarded by Punjab Kala Parishad",
    image: "/Images/Campus/NewHostel.JPG",
    icon: Palette,
    color: "from-pink-400 to-rose-500",
  },
  {
    name: "Ishaan Verma",
    category: "Leadership",
    achievement: "Selected for Model United Nations, representing India at international level",
    image: "/Images/Campus/NewHostel.JPG",
    icon: Users2,
    color: "from-purple-400 to-indigo-600",
  },
];

const StudentAchievers: React.FC = () => {
  return (
    <section id="student-achievers" className="py-20 bg-linear-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playpen font-semibold text-gray-900 mb-3">
            Student Achievers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every achievement at Montessori Cambridge School reflects curiosity, discipline, and the courage to shine — inside and beyond the classroom.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACHIEVERS.map((student, index) => {
            const Icon = student.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-yellow-100"
              >
                <div className="relative">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full shadow-sm">
                    <Icon className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-800">{student.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                  <p className="text-gray-700 text-sm mt-2">{student.achievement}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/gallery/achievers"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-full shadow transition"
          >
            View More Achievements
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudentAchievers;

