"use client";
import React from "react";

const FACILITIES = [
  {
    title: "Dance Studio",
    desc: "A fully equipped studio with sprung flooring, wall-length mirrors, barres, and acoustic-treated walls — built for movement, precision, and performance.",
    img: "/Images/PerformingArts/DanceStudio.jpg",
  },
  {
    title: "Music Rooms & Recording Bay",
    desc: "Sound-treated rehearsal rooms and a digital recording space where students experiment with voice, rhythm, and composition.",
    img: "/Images/PerformingArts/MusicRoom.jpg",
  },
  {
    title: "Black Box Theatre",
    desc: "A flexible rehearsal space designed for stagecraft, acting technique, script work, and multi-format performances.",
    img: "/Images/PerformingArts/TheatreRoom.jpg",
  },
  {
    title: "Art & Design Studio",
    desc: "A creative lab with professional supplies, easels, sculpting tools and space to paint, explore texture, form and design.",
    img: "/Images/PerformingArts/ArtStudio.jpg",
  },
];

const PerformingArtsFacilitiesA = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-28">
        {FACILITIES.map((item, i) => (
          <div
            key={i}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <img
              src={item.img}
              className="w-full h-105 object-cover rounded-3xl shadow-xl"
              alt={item.title}
            />
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerformingArtsFacilitiesA;
