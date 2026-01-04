import React from "react";
import CtaButton from "../..//interface/CtaButton";
import {
  Atom,
  FlaskConical,
  Microscope,
  Calculator,
  Laptop,
  Bot,
  ArrowRight,
} from "lucide-react";

const labs = [
  {
    id: "physics",
    icon: Atom,
    title: "Physics Lab",
    image: "/Images/Heros/samplehero.JPG",
    desc:
      "A hands-on environment for learning mechanics, motion, electricity, optics, and energy.",
    features: [
      "Laser and light experiments",
      "Electric circuits and electromagnetism setups",
      "Precision measurement and timing systems",
      "Board-exam aligned lab workbooks",
    ],
    outcome:
      "Students verify theories, analyze real data, and strengthen scientific reasoning.",
  },
  {
    id: "chemistry",
    icon: FlaskConical,
    title: "Chemistry Lab",
    image: "/Images/Heros/samplehero.JPG",
    desc:
      "A fully equipped space designed for safe exploration of reactions, compounds, and chemical behaviour.",
    features: [
      "Fume hood and ventilation systems",
      "Digital pH meters and titration instruments",
      "Reagent-safe storage and safety cabinets",
      "Mandatory protective equipment",
    ],
    outcome:
      "Learners master lab safety, accurate measurement, and analytical methods.",
  },
  {
    id: "biology",
    icon: Microscope,
    title: "Biology Lab",
    image: "/Images/Heros/samplehero.JPG",
    desc:
      "A discovery-based learning space to study life systems from cells to ecosystems.",
    features: [
      "High-resolution microscopes",
      "Prepared slides and lab specimens",
      "DNA model kits and dissection tools",
      "Research corner for advanced study",
    ],
    outcome:
      "Students strengthen observation, classification, and scientific documentation skills.",
  },
  {
    id: "math",
    icon: Calculator,
    title: "Mathematics Lab",
    image: "/Images/Heros/samplehero.JPG",
    desc:
      "A space for hands-on mathematical thinking through puzzles, models, and logic activities.",
    features: [
      "Geometry kits & 3D models",
      "Logical reasoning and olympiad modules",
      "Hands-on measurement tools",
      "Interactive learning corners",
    ],
    outcome:
      "Math becomes visual, memorable, and enjoyable — strengthening reasoning and problem-solving.",
  },
  {
    id: "computer",
    icon: Laptop,
    title: "Computers Lab",
    image: "/Images/Heros/samplehero.JPG",
    desc:
      "A modern digital workspace where students build foundational and advanced computing skills.",
    features: [
      "Python and web development modules",
      "Cyber safety protocols",
      "Project-based coding and design learning",
      "Productivity and digital fluency tools",
    ],
    outcome:
      "Students become confident digital creators — not just technology users.",
  },
  {
    id: "robotics",
    icon: Bot,
    title: "Robotics & AI Lab",
    image: "/Images/Heros/samplehero.JPG",
    desc:
      "A hub for hands-on engineering using robotics, electronics, and programming.",
    features: [
      "Arduino, sensors & servo motors",
      "Block and text-based coding",
      "Prototype building and testing",
      "3D printing and engineering design",
    ],
    outcome:
      "Students learn to design, build, and automate — bringing imagination to life.",
  },
];

const ProfessionalLabs = () => {
  return (
    <section className="relative py-4 sm:py-10 lg:py-16 my-10 bg-white">
      <div className="container mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Professional {" "}
            <span className="relative inline-block">
              Laboratories
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkYellow.png"
                alt="Spark"
                className="absolute w-8 sm:w-12 -top-6 -right-8 sm:-right-12"
              />
            </span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Our professional laboratories provide hands-on learning experiences from qualified experts and state-of-the-art equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
          {labs.map((lab) => {
            const Icon = lab.icon;
            return (
              <div
                key={lab.id}
                className="rounded-xl sm:rounded-2xl xl:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white"
              >
                <img
                  src={lab.image}
                  alt={lab.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5 xl:p-6 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-6 h-6 text-sky-500" />
                    <h3 className="text-lg xl:text-xl font-poppins tracking-wide font-semibold text-gray-900">
                      {lab.title}
                    </h3>
                  </div>

                  <p className="font-inter text-gray-700 text-sm xl:text-base mb-4">{lab.desc}</p>

                  <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside mb-4 font-inter">
                    {lab.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>

                  <p className="font-inter text-sm text-gray-800 font-medium">
                    <span className="text-green-500 font-inter font-semibold">Outcome:</span>{" "}
                    {lab.outcome}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* CTA Button */}
        <div className="mt-8 lg:mt-12 xl:mt-16 text-center">
          <CtaButton text="View More Details" href="/co-curriculars/research-&-innovation" icon={ArrowRight} />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalLabs;