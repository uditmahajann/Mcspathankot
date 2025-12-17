import React from "react";
import { ArrowUpRight } from "lucide-react";
import CtaButton from "../../interface/CtaButton";

const imagesRow1 = [
  '/Images/McsLife/Box10.JPG', '/Images/McsLife/Box11.JPG', '/Images/McsLife/Box12.JPG', '/Images/McsLife/Box13.JPG', '/Images/McsLife/Box14.JPG',
  '/Images/McsLife/Box15.JPG', '/Images/McsLife/Box16.JPG', '/Images/McsLife/Box17.jpeg', '/Images/McsLife/Box18.jpg', '/Images/McsLife/Box19.JPG'
];
const imagesRow2 = [
  '/Images/McsLife/Box20.JPG', '/Images/McsLife/Box21.JPG', '/Images/McsLife/Box22.jpeg', '/Images/McsLife/Box23.JPG', '/Images/McsLife/Box24.JPG',
  '/Images/McsLife/Box25.JPG', '/Images/McsLife/Box26.JPG', '/Images/McsLife/Box27.JPG', '/Images/McsLife/Box28.JPG', '/Images/McsLife/Box29.JPG' 
];

const McsLife = () => {
  return (
    <section className="py-10 sm:py-16 my-10 bg-white overflow-hidden">
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
          Student <span className="relative inline-block">Life @MCS
            <img
              src="/Images/Doodles/LinePink.png"
              alt="Underline"
              className="absolute left-8 -bottom-4 sm:-bottom-6 md:-bottom-8"
            />
          </span>
        </h2>
      </div>

      {/* Top Carousel */}
      <div className="overflow-hidden mb-3 md:mb-5 carousel-group">
        <div className="flex animate-scroll-left space-x-2 sm:space-x-4 w-max">
          {[...imagesRow1, ...imagesRow1].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`life-${i}`}
              className={`rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 ${
                i % 2 === 0 ? "w-40 h-40 sm:w-64 sm:h-64" : "w-72 h-40 sm:w-96 sm:h-64"
              } object-cover`}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Bottom Carousel */}
      <div className="overflow-hidden carousel-group">
        <div className="flex animate-scroll-right space-x-2 sm:space-x-4 w-max">
          {[...imagesRow2, ...imagesRow2].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`life2-${i}`}
              className={`rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 ${
                i % 2 === 0 ? "w-72 h-40 sm:w-96 sm:h-64" : "w-40 h-40 sm:w-64 sm:h-64"
              } object-cover`}
            />
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 flex items-center justify-center">
        <CtaButton text="More About Campus Life" href="" />
      </div>
    </section>
  );
};

export default McsLife;