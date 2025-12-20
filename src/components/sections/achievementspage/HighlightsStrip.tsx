"use client";

import React from "react";
import { Trophy, BookOpen, Users, Palette, Globe } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Trophy,
    title: "Academic Excellence",
    description: "100+ students achieved distinction in CBSE board exams.",
    color: "bg-yellow-400 text-gray-900",
  },
  {
    icon: Users,
    title: "Sports Achievements",
    description: "Medalists at state and national-level championships.",
    color: "bg-blue-500 text-white",
  },
  {
    icon: Palette,
    title: "Cultural Triumphs",
    description: "Winners at inter-school art, music, and theatre competitions.",
    color: "bg-pink-400 text-white",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Students representing MCS in international academic exchanges.",
    color: "bg-green-500 text-white",
  },
  {
    icon: BookOpen,
    title: "Innovation & Leadership",
    description: "Recognized for creativity and leadership across India.",
    color: "bg-purple-500 text-white",
  },
];

const HighlightsGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 flex flex-col items-start justify-center ${item.color} shadow-md hover:scale-[1.02] transition-transform`}
              >
                <Icon className="h-8 w-8 mb-3 opacity-90" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsGrid;

