"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
};

const slides: Slide[] = [
  {
    src: "/Images/Sample/Kidsdance.jpg",
    alt: "Kids running in fancy dress race",
    title: "Sports Day Fun",
    caption:
      "Tiny racers, big smiles — our annual sports day is packed with joy and teamwork.",
  },
  {
    src: "/Images/Sample/Kidsplay.jpg",
    alt: "Children painting together",
    title: "Creative Studio",
    caption:
      "Hands-on art and sensory play to develop fine motor skills and imagination.",
  },
  {
    src: "/Images/Sample/Kidsdance.jpg",
    alt: "Children gardening",
    title: "Nature Time",
    caption:
      "Gardening & outdoor exploration to build curiosity about the natural world.",
  },
];

const KindergartenCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Optional autoplay
  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => next(), 7000);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index]);

  return (
    <section
      id="why-kindergarten"
      className="relative py-30 bg-white"
    >
      <img
        src="/Images/Academics/Mright.png"
        alt="Cute monkey illustration"
        className="absolute w-212.5 h-full top-0 right-0 pointer-events-none select-none"
      />
      <img
        src="/Images/Academics/Mleft.png"
        alt="Cute monkey illustration"
        className="absolute w-212.5 h-full top-0 pointer-events-none select-none"
      />
       


      <div className="relative w-full sm:px-4 mt-30">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Middle Wing Highlights
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Learning in motion — glimpses of projects, performances, and moments that spark confidence and teamwork.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-[60%] rounded-2xl shadow-2xl overflow-hidden">
          {/* Left arrow */}
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-white/90 transition cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          {/* Slides */}
          <div className="relative w-full min-h-95 md:min-h-137.5 ">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  i === index
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95 z-0"
                }`}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading={i === index ? "eager" : "lazy"}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            aria-label="Next slide"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-white/90 transition cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default KindergartenCarousel;