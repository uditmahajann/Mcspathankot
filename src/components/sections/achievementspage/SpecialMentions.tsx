import React from "react";

const UNIVERSITIES = [
  { name: "University of Toronto", logo: "/Images/Heros/samplehero.JPG" },
  { name: "London School of Economics", logo: "/Images/Heros/samplehero.JPG" },
  { name: "IIT Delhi", logo: "/Images/Heros/samplehero.JPG" },
  { name: "University of Melbourne", logo: "/Images/Heros/samplehero.JPG" },
  { name: "Nanyang Technological University", logo: "/Images/Heros/samplehero.JPG" },
  { name: "Delhi University", logo: "/Images/Heros/samplehero.JPG" },
  { name: "New York University", logo: "/Images/Heros/samplehero.JPG" },
  { name: "University of British Columbia", logo: "/Images/Heros/samplehero.JPG" },
];

const SpecialMentions: React.FC = () => {
  return (
    <section id="global-recognition" className="my-10 md:my-20 py-15 md:py-20 bg-linear-to-br from-violet-950 via-blue-900 to-indigo-950">
      <div className="max-w-7xl mx-auto px-6 min-[540px]:px-12 sm:px-16 lg:px-20 text-center">
        <div className="text-center mb-10">
        {/* Header */}
        <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium leading-normal">
          Student Achievers Showcase
        </h2>
        <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
          Every achievement at Montessori Cambridge School reflects curiosity, discipline, and the courage to shine — inside and beyond the classroom.
        </p>
        </div>

        {/* University Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center justify-center">
          {UNIVERSITIES.map((u, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
            >
              <img
                src={u.logo}
                alt={u.name}
                className="object-contain lg:grayscale hover:grayscale-0 transition rounded-xl"
                loading="lazy"
              />
              <p className="mt-3 text-base md:text-lg font-inter font-medium text-gray-100">{u.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialMentions;
