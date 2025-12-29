"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PHOTOS = [
  {
    image: "/Images/Heros/samplehero.JPG",
    caption: "Annual Awards Ceremony - Celebrating Excellence",
  },
  {
    image: "/Images/Heros/samplehero.JPG",
    caption: "Our athletes shine at the State Sports Meet",
  },
  {
    image: "/Images/Heros/samplehero.JPG",
    caption: "Science Expo winners with their innovative projects",
  },
  {
    image: "/Images/Heros/samplehero.JPG",
    caption: "Students showcasing their art at the Cultural Fest",
  },
  {
    image: "/Images/Heros/samplehero.JPG",
    caption: "Team MCS receiving the Green School Award",
  },
];

const PhotoHighlightsCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % PHOTOS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + PHOTOS.length) % PHOTOS.length);

  return (
    <section className="relative w-full bg-gray-900 overflow-hidden">
      <div className="relative h-[80vh] w-full overflow-hidden">
        {PHOTOS.map((photo, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={photo.image}
              alt={photo.caption}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/90 via-black/60 to-transparent px-6 py-15 xl:p-9 text-white">
              <p className="text-xl md:text-2xl font-poppins tracking-wide font-semibold">{photo.caption}</p>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 sm:p-3 rounded-full transition cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4.5 h-4.5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 sm:p-3 rounded-full transition cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4.5 h-4.5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === current ? "bg-yellow-400" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default PhotoHighlightsCarousel;
