import React from "react";
import { Star, Award, Building, Users } from "lucide-react";

const MILESTONES = [
  {
    year: "1997",
    title: "School Founded",
    description: "Montessori Cambridge School begins its journey in Pathankot.",
    icon: Building,
  },
  {
    year: "2005",
    title: "Senior Secondary Expansion",
    description: "Introduced specialized streams and new learning blocks.",
    icon: Users,
  },
  {
    year: "2015",
    title: "Top CBSE School Recognition",
    description: "Honored for academic and co-curricular excellence.",
    icon: Award,
  },
  {
    year: "2020",
    title: "Smart Campus Initiative",
    description: "Adoption of AI-enabled classrooms and digital learning tools.",
    icon: Star,
  },
  {
    year: "2024",
    title: "National Innovation Award",
    description: "Recognized for pioneering education innovation.",
    icon: Award,
  },
];

const MilestonesJourney: React.FC = () => {
  return (
    <section id="mcs-journey" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 lg:px-20">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">The
          <span className="relative z-10 inline-block pl-3 pr-1">
          MCS Journey
          <span className="absolute inset-0 -z-10 -top-6">
          <img
          src="/Images/Doodles/CircleYellow.png"
          alt="Circle Doodle"
          className="w-full h-auto object-contain"
          />
         </span>
        </span>{" "}
        so far...
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
        From a humble beginning to a leading educational institution — a story of growth, milestones, and excellence.
        </p>
        </div>

        {/* Timeline */}
        <div className="flex items-start space-x-6 lg:space-x-10 overflow-x-auto pb-6 no-scrollbar hide-scrollbar">
          {MILESTONES.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div
                key={index}
                className="shrink-0 w-72 bg-linear-to-br from-yellow-50 to-white border border-yellow-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 text-white rounded-full mb-4 shadow">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold font-outfit text-yellow-600">{milestone.year}</h3>
                <h4 className="text-lg text-gray-900 font-poppins tracking-wide font-semibold mt-1">{milestone.title}</h4>
                <p className="font-inter text-gray-600 mt-2 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Connector line */}
        <div className="mt-4 h-1 bg-yellow-300 rounded-full"></div>
      </div>
    </section>
  );
};

export default MilestonesJourney;
