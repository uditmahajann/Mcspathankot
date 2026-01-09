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
    <section id="alumni-spotlight" className="relative bg-linear-to-r from-blue-950 via-blue-900 to-blue-950 my-10 py-12 md:py-16 overflow-hidden">
    <div className="container mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 lg:px-20">
      <div className="mb-8 md:mb-12 flex flex-col items-center">
        <h2 className="text-2xl min-[540px]:text-3xl font-playpen font-medium text-yellow-400 leading-normal">
            Recognizing Our Alumni Success
          </h2>
        </div>

      <div className="mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        {/* Image */}
        <div className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={alum.image.asset.url}
            className="w-full h-72 md:h-90 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <p className="mb-4 text-sm sm:text-base font-inter text-amber-400 font-medium">
             {new Date(alum.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
              })}
          </p>
          <h2 className="text-xl lg:text-2xl font-poppins tracking-wide font-semibold text-white mb-4">
            {alum.title}
          </h2>
          <p className="font-inter text-base sm:text-lg text-gray-400 mb-6 max-w-xl">{alum.description}</p>
          <h3 className="text-lg lg:text-xl font-inter font-medium text-gray-200 uppercase">{alum.personName}</h3>
          <p className="mt-2 text-sm sm:text-base font-inter text-amber-400 font-medium">
            {alum.personDesignation}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-9 min-[540px]:left-15 sm:left-20 md:left-8 xl:left-15 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-900 p-2 xl:p-3 rounded-full shadow-md transition cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-9 min-[540px]:right-15 sm:right-20 md:right-8 xl:right-15 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-900 p-2 xl:p-3 rounded-full shadow-md transition cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
    </section>
  );
};

export default AlumniSpotlight;
