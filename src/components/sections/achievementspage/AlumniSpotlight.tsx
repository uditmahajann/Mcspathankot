import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Alumni = {
  _id: string;
  title: string;
  personName: string;
  personDesignation?: string;
  description: string;
  date: string;
  image: {
    asset: {
      url: string;
    };
  };
};

type Props = {
  alumni: Alumni[];
};


const AlumniSpotlight: React.FC<Props> = ({ alumni }) => {
  if (!alumni || alumni.length === 0) return null;

  const MAX = 10;
  const items = alumni.slice(0, MAX);

  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % items.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + items.length) % items.length);

  const alum = items[index];

  return (
    <section id="alumni-spotlight" className="relative py-4 sm:py-10 my-10 bg-white">
    <div className="container mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium leading-normal">
            Recognizing Our <br className="block md:hidden"/>
            <span className="relative inline-block">
              Alumni Success
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkPurple.png"
                alt="Spark"
                className="absolute w-10 sm:w-12 md:w-14 -top-6 md:-top-8 -right-12 md:-right-15"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Our alumni make their mark across the world. Their journeys are a testament to the values and vision nurtured at Montessori Cambridge School.
          </p>
        </div>

      <div className="max-w-7xl mx-auto sm:px-8 flex flex-col lg:flex-row items-center gap-8 sm:gap-10">
        
        {/* Image */}
        <div className="relative w-full lg:w-1/2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
          <img
            src={alum.image.asset.url}
            alt={alum.personName}
            className="w-full h-105 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Text */}
        <div className="lg:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-poppins tracking-wide font-semibold text-gray-900 mb-3 sm:mb-4">
            {alum.title}
          </h2>
          <p className="font-inter text-base sm:text-lg text-gray-600 mb-6 max-w-xl">{alum.description}</p>
          <h3 className="text-lg sm:text-xl font-poppins tracking-wide font-semibold text-gray-900">{alum.personName}</h3>
          <p className="text-sm sm:text-base font-inter text-yellow-700 font-medium">
            {alum.personDesignation} — {alum.date}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-9 sm:left-12 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-md transition cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-9 sm:right-12 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-md transition cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
    </section>
  );
};

export default AlumniSpotlight;
