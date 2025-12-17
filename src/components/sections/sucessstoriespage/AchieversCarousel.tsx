"use client";

import React, { useState } from "react";
import { Trophy } from "lucide-react";

const CATEGORIES = ["Academics", "Sports", "Cultural", "Leadership"];

const ACHIEVERS = [
  {
    name: "Aarav Sharma",
    category: "Academics",
    achievement: "Topped District in CBSE Grade 10 with 98.6%",
    image: "/Images/Sample/Academics.png",
    year: "2025",
  },
  {
    name: "Aarav Sharma",
    category: "Academics",
    achievement: "Topped District in CBSE Grade 10 with 98.6%",
    image: "/Images/Sample/Academics.png",
    year: "2025",
  },
  {
    name: "Aarav Sharma",
    category: "Academics",
    achievement: "Topped District in CBSE Grade 10 with 98.6%",
    image: "/Images/Sample/Academics.png",
    year: "2025",
  },
  {
    name: "Aarav Sharma",
    category: "Academics",
    achievement: "Topped District in CBSE Grade 10 with 98.6%",
    image: "/Images/Sample/Academics.png",
    year: "2025",
  },
  {
    name: "Aarav Sharma",
    category: "Academics",
    achievement: "Topped District in CBSE Grade 10 with 98.6%",
    image: "/Images/Sample/Academics.png",
    year: "2025",
  },
  {
    name: "Simran Kaur",
    category: "Sports",
    achievement: "Gold Medal - State Level Swimming Championship",
    image: "/Images/Sample/Academics.png",
    year: "2025",
  },
  {
    name: "Simran Kaur",
    category: "Sports",
    achievement: "Gold Medal - State Level Swimming Championship",
    image: "/Images/Sample/Academics.png",
    year: "2025",
  },
  {
    name: "Simran Kaur",
    category: "Sports",
    achievement: "Gold Medal - State Level Swimming Championship",
    image: "/Images/Sample/Academics.png",
    year: "2025",
  },
  {
    name: "Ananya Gupta",
    category: "Cultural",
    achievement: "Winner - National Level Art Fest, Delhi",
    image: "/Images/Sample/Academics.png",
    year: "2024",
  },
  {
    name: "Ananya Gupta",
    category: "Cultural",
    achievement: "Winner - National Level Art Fest, Delhi",
    image: "/Images/Sample/Academics.png",
    year: "2024",
  },
  {
    name: "Ananya Gupta",
    category: "Cultural",
    achievement: "Winner - National Level Art Fest, Delhi",
    image: "/Images/Sample/Academics.png",
    year: "2024",
  },
  {
    name: "Rahul Verma",
    category: "Leadership",
    achievement: "School Captain - Led Student Parliament 2024",
    image: "/Images/Sample/Academics.png",
    year: "2024",
  },
  {
    name: "Rahul Verma",
    category: "Leadership",
    achievement: "School Captain - Led Student Parliament 2024",
    image: "/Images/Sample/Academics.png",
    year: "2024",
  },
  {
    name: "Neha Singh",
    category: "Sports",
    achievement: "Bronze Medal - National Taekwondo Championship",
    image: "/Images/Sample/Academics.png",
    year: "2025",
  },
  {
    name: "Ishita Mehta",
    category: "Academics",
    achievement: "Merit Award - Science Olympiad Foundation",
    image: "/Images/Sample/Academics.png",
    year: "2025",
  },
];

const StudentAchieversGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Academics");

  const filteredAchievers = ACHIEVERS.filter(
    (a) => a.category === activeCategory
  );

  return (
    <section id="achievers" className="py-25 bg-gradient-to-br from-violet-950 via-blue-900 to-indigo-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium">
            Our Proud Achievers in 2025-26
          </h2>
          <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
            Meet the shining stars of Montessori Cambridge School — students who bring pride through their outstanding achievements.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-base font-outfit font-medium transition cursor-pointer ${
                activeCategory === category
                  ? "bg-yellow-400 text-gray-900"
                  : "bg-white border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Achievers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAchievers.map((achiever, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              <div className="relative">
              <img
                src={achiever.image}
                alt={achiever.name}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full shadow-sm">
                    <Trophy className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-inter font-semibold text-gray-900">{achiever.year} - {achiever.category}</span>
                  </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-poppins font-semibold text-gray-900 tracking-wide">
                  {achiever.name}
                </h3>
                <p className="text-gray-700 font-inter text-sm mt-1">
                  {achiever.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredAchievers.length === 0 && (
          <div className="text-center mt-12 text-gray-600">
            No achievers found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentAchieversGrid;


