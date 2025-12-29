import type React from "react";
import { Video } from "lucide-react";
import CtaButton from "../../interface/CtaButton";
import type { LucideIcon } from "lucide-react";
import {
  School,
  FlaskConical,
  Monitor,
  LibraryBig,
  Volleyball,
  BedDouble,
  MicVocal,
  BusFront
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  School,
  FlaskConical,
  Monitor,
  LibraryBig,
  Volleyball,
  BedDouble,
  MicVocal,
  BusFront,
};

const Infrastructure: React.FC = () => {
  const facilities = [
    {
      name: "Modern Classrooms",
      description:
        "Smart classrooms equipped with interactive whiteboards, projectors, and ergonomic furniture for an optimal learning environment.",
      icon: "School",
      url: "/facilities/modern-classrooms",
    },
    {
      name: "Science Laboratories",
      description:
        "State-of-the-art physics, chemistry, and biology labs with advanced equipment for hands-on learning and experimentation.",
      icon: "FlaskConical",
      url: "/facilities/science-laboratories",
    },
    {
      name: "Computer Labs",
      description:
        "Cutting-edge computer labs with the latest hardware and software to develop digital literacy and programming skills.",
      icon: "Monitor",
      url: "/facilities/computer-labs",
    },
    {
      name: "Library & Resource Center",
      description:
        "Extensive collection of books, digital resources, and collaborative study spaces to foster a love for reading and research.",
      icon: "LibraryBig",
      url: "/facilities/library",
    },
    {
      name: "Sports Facilities",
      description:
        "Comprehensive sports infrastructure including cricket ground, basketball courts, swimming pool, and indoor sports complex.",
      icon: "Volleyball",
      url: "/o-curriculars/sports-&-athletics",
    },
    {
      name: "Boarding Facilities",
      description:
        "Comfortable and secure boarding facilities with modern amenities, nutritious meals, and a homely atmosphere for residential students.",
      icon: "BedDouble",
      url: "/facilities/boarding",
    },
    {
      name: "Performing Arts Center",
      description:
        "Dedicated spaces for music, dance, drama, and other performing arts with professional equipment and training.",
      icon: "MicVocal",
      url: "/co-curriculars/performing-arts",
    },
    {
      name: "Transport Fleet",
      description:
        "Fleet of school buses covering all major routes with GPS tracking and trained staff for safe transportation.",
      icon: "BusFront",
      url: "/facilities/transport-facility",
    },
  ];

  return (
    <section id="our-infrastructure" className="py-4 sm:py-10 my-10 bg-white">
      <div className="mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium inline-block relative leading-normal">
            Our
            <span className="relative z-10 inline-block pl-5 pr-1">
              World-Class
              <span className="absolute inset-0 -z-10 -top-6 md:-top-9">
                <img
                  src="/Images/Doodles/CircleGreen.png"
                  alt="Circle Doodle"
                  className="w-full h-auto object-contain"
                />
              </span>
            </span>{" "}
            Infrastructure
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Our modern facilities empower every learner with the tools, spaces and environment needed to thrive academically, creatively, and personally.
          </p>
        </div>

        {/* Banner Image */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-8 sm:mb-12 lg:mb-20 shadow-2xl">
          <img
            src="/Images/Heros/samplehero.JPG"
            alt="MCS Campus Overview"
            className="h-100 sm:h-120 w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/95 via-blue-900/1 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Modern Campus</h3>
            <p className="hidden md:block mt-2 max-w-2xl text-blue-100">
              Our sprawling campus features modern architecture, green spaces, and purpose-built facilities designed to create an optimal learning environment away from the dins of the city.
            </p>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility, index) => {
            const IconComponent = iconMap[facility.icon];

            return (
              <a
                key={index}
                href={facility.url}
                className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer block"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {IconComponent && <IconComponent className="h-6 w-6" />}
                </div>

                <h4 className="mt-4 text-lg font-medium text-gray-900">{facility.name}</h4>
                <p className="mt-2 text-gray-600">{facility.description}</p>
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <CtaButton text="Take a Virtual Tour" href="/preview" icon={Video} />
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;