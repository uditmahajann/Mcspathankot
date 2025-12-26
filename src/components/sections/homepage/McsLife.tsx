import React from "react";
import { ArrowUpRight } from "lucide-react";
import CtaButton from "../../interface/CtaButton";

const imagesRow1 = [
  '/Images/Heros/samplehero.JPG', '/Images/Heros/samplehero.JPG', '/Images/Heros/samplehero.JPG', '/Images/Heros/samplehero.JPG', '/Images/Heros/samplehero.JPG',
  '/Images/Heros/samplehero.JPG', '/Images/Heros/samplehero.JPG', '/Images/Heros/samplehero.JPG', '/Images/Heros/samplehero.JPG', '/Images/Heros/samplehero.JPG'
];
const imagesRow2 = [
  '/Images/Heros/samplehero.JPG', '/Images/McsLife/Box21.JPG', '/Images/Heros/samplehero.JPG', '/Images/Heros/samplehero.JPG', '/Images/Heros/samplehero.JPG',
  '/Images/Heros/samplehero.JPG', '/Images/Heros/samplehero.JPG', '/Images/Heros/samplehero.JPG', '/Images/Heros/samplehero.JPG', '/Images/Heros/samplehero.JPG' 
];

const McsLife = () => {
  return (
    <section className="py-12 md:py-20 bg-blue-950 overflow-hidden">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl min-[540px]:text-3xl font-playpen font-medium text-amber-400 leading-normal">
          Student Life @MCS
        </h2>
      </div>

      {/* Top Carousel */}
      <div className="overflow-hidden mb-4 md:mb-6 carousel-group">
        <div className="flex animate-scroll-left space-x-4 sm:space-x-5 w-max">
          {[...imagesRow1, ...imagesRow1].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`life-${i}`}
              className={`rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 ${
                i % 2 === 0 ? "w-52 h-52 sm:w-64 sm:h-64" : "w-80 h-52 sm:w-96 sm:h-64"
              } object-cover`}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Bottom Carousel */}
      <div className="overflow-hidden carousel-group">
        <div className="flex animate-scroll-right space-x-4 sm:space-x-5 w-max">
          {[...imagesRow2, ...imagesRow2].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`life2-${i}`}
              className={`rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 ${
                i % 2 === 0 ? "w-80 h-52 sm:w-96 sm:h-64" : "w-52 h-52 sm:w-64 sm:h-64"
              } object-cover`}
            />
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-8 sm:mt-12 flex items-center justify-center">
        <CtaButton text="More About Campus Life" href="" />
      </div>
    </section>
  );
};

export default McsLife;