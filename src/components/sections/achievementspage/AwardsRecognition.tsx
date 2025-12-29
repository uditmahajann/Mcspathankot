"use client";

import React from "react";
import { Award, Medal, Star, Trophy } from "lucide-react";

const AWARDS = [
  {
    icon: Trophy,
    title: "Best CBSE School – Punjab",
    year: "2024",
    description: "Awarded by Education Today for academic excellence, innovation, and holistic development.",
    image: "/Images/SuccessStories/awards/award1.jpg",
  },
  {
    icon: Medal,
    title: "National Excellence Award in Education",
    year: "2023",
    description: "Recognized by The Week Magazine for leadership and innovation in learning design.",
    image: "/Images/SuccessStories/awards/award2.jpg",
  },
  {
    icon: Star,
    title: "Innovation in School Pedagogy",
    year: "2022",
    description: "Received the National Innovation Award by Indian Education Council for smart campus integration.",
    image: "/Images/SuccessStories/awards/award3.jpg",
  },
  {
    icon: Award,
    title: "Green School Certification",
    year: "2021",
    description: "Honored for sustainable practices and eco-conscious campus initiatives by TERI Foundation.",
    image: "/Images/SuccessStories/awards/award4.jpg",
  },
  {
    icon: Star,
    title: "Top 10 Schools in North India",
    year: "2019",
    description: "Ranked among the top institutions by Education World and The Times of India.",
    image: "/Images/SuccessStories/awards/award5.jpg",
  },
];

const AwardsRecognitions: React.FC = () => {
  return (
    <section id="awards" className="py-20 bg-linear-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playpen font-semibold text-gray-900 mb-3">
            Awards & Recognitions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating our journey of excellence, innovation, and impact — recognized by national and international institutions.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {AWARDS.map((award, i) => {
            const Icon = award.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden border border-yellow-100"
              >
                <div className="relative">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{award.year}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{award.title}</h3>
                  <p className="mt-2 text-gray-700 text-sm leading-relaxed">{award.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognitions;
