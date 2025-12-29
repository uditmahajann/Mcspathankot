"use client"

import React from "react"
import { HeartHandshake, Leaf, Users, BookOpen, HelpingHand } from "lucide-react"

const programs = [
  {
    id: 1,
    title: "Community Service & Awareness Drives",
    description:
      "Our students actively organize and participate in cleanliness drives, donation campaigns, and local awareness initiatives. From tree plantations to traffic safety rallies — they learn compassion, responsibility, and teamwork.",
    image: "/Images/Heros/samplehero.JPG",
    tag: "Social Responsibility",
    icon: <HeartHandshake className="w-6 h-6 text-rose-600" />,
    bg: "bg-rose-100",
  },
  {
    id: 2,
    title: "Environmental Stewardship Program",
    description:
      "Through sustainability clubs and ‘Go Green’ initiatives, our learners engage in eco-projects like composting, waste segregation, and creating school gardens — nurturing a lifelong respect for nature.",
    image: "/Images/Heros/samplehero.JPG",
    tag: "Eco Initiative",
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    bg: "bg-green-100",
  },
  {
    id: 3,
    title: "Rural Education & Literacy Support",
    description:
      "Partnering with local NGOs, our students volunteer their time to teach underprivileged children — sharing knowledge, organizing donation drives, and creating learning materials for community schools.",
    image: "/Images/Heros/samplehero.JPG",
    tag: "Education for All",
    icon: <BookOpen className="w-6 h-6 text-purple-600" />,
    bg: "bg-purple-100",
  },
  {
    id: 4,
    title: "Health & Wellness Awareness Camps",
    description:
      "In collaboration with health organizations, MCS conducts free check-up camps, hygiene awareness sessions, and blood donation drives to build a healthier, more informed society.",
    image: "/Images/Heros/samplehero.JPG",
    tag: "Public Health",
    icon: <Users className="w-6 h-6 text-amber-600" />,
    bg: "bg-amber-100",
  },
]

const OutreachPrograms = () => {
  return (
    <section id="outreach-programs" className="py-4 sm:py-10 my-10 bg-white">
      <div className="mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium leading-normal">
            Outreach <span className="relative inline-block">
              Programs
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[90%] left-12 -bottom-4 sm:-bottom-6"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            At Montessori Cambridge School, we believe education extends beyond academics — it’s about shaping kind, aware, and socially responsible citizens.
          </p>
        </div>

        {/* Program Sections */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-15">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} items-stretch gap-3 sm:gap-6 lg:gap-10 rounded-2xl lg:rounded-3xl shadow-sm overflow-hidden ${program.bg}`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-80 md:h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  {program.icon}
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 bg-white/60 px-3 py-1 rounded-full">
                    {program.tag}
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-poppins font-semibold text-gray-900 mb-4 tracking-wide">
                  {program.title}
                </h3>
                <p className="text-gray-700 text-base lg:text-lg font-inter leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OutreachPrograms