"use client"

import React from "react"
import { Lightbulb, Atom, Palette, Leaf, FlaskRoundIcon as Flask } from "lucide-react"

const exhibitions = [
  {
    id: 1,
    title: "Science Innovation Fair 2024",
    description:
      "A platform where young scientists showcased their ingenuity through sustainable, real-world solutions.",
    cover: "/Images/Heros/samplehero.JPG",
    icon: <Flask className="w-6 h-6 text-blue-500" />,
    projects: [
      {
        title: "Solar-Powered Irrigation System",
        desc: "A sustainable solution designed by Class 9 students to reduce water and power waste in agriculture.",
        image: "/Images/Heros/samplehero.JPG",
      },
      {
        title: "Natural Water Filtration Model",
        desc: "Demonstrated a multi-layer filtration process using sand, charcoal, and gravel for clean drinking water.",
        image: "/Images/Heros/samplehero.JPG",
      },
      {
        title: "Smart Energy Saver",
        desc: "An Arduino-based device that automatically controls room lighting and appliances to conserve power.",
        image: "/Images/Heros/samplehero.JPG",
      },
    ],
    color: "from-blue-100 to-indigo-100",
  },
  {
    id: 2,
    title: "STEM Expo 2023",
    description:
      "From robots to drones, students blended science and creativity to solve modern-day challenges.",
    cover: "/Images/Heros/samplehero.JPG",
    icon: <Atom className="w-6 h-6 text-emerald-500" />,
    projects: [
      {
        title: "Line-Following Robot",
        desc: "Built by middle school students, this robot uses sensors to detect and follow black paths autonomously.",
        image: "/Images/Heros/samplehero.JPG",
      },
      {
        title: "3D Printed Prosthetic Hand",
        desc: "A student-led project that used open-source design to create low-cost prosthetic solutions.",
        image: "/Images/Heros/samplehero.JPG",
      },
      {
        title: "Drone for Crop Monitoring",
        desc: "High-schoolers programmed a drone to scan and analyze crop health using aerial imagery.",
        image: "/Images/Heros/samplehero.JPG",
      },
    ],
    color: "from-green-50 to-teal-100",
  },
  {
    id: 3,
    title: "Art & Design Exhibition 2024",
    description:
      "A colourful fusion of imagination and skill — from recycled crafts to modern digital art installations.",
    cover: "/Images/Heros/samplehero.JPG",
    icon: <Palette className="w-6 h-6 text-pink-500" />,
    projects: [
      {
        title: "Recycled Material Sculptures",
        desc: "Creative 3D models designed entirely from upcycled waste — turning trash into artistic treasure.",
        image: "/Images/Heros/samplehero.JPG",
      },
      {
        title: "Thematic Wall Mural",
        desc: "Students collaborated on a 20-ft mural celebrating unity, culture, and sustainability.",
        image: "/Images/Heros/samplehero.JPG",
      },
      {
        title: "Digital Art Gallery",
        desc: "Showcased original illustrations and graphic compositions created using tablets and software tools.",
        image: "/Images/Heros/samplehero.JPG",
      },
    ],
    color: "from-sky-50 to-teal-100",
  },
  {
    id: 4,
    title: "Eco Awareness Fair 2024",
    description:
      "Students explored sustainable innovations through eco-friendly prototypes and live demonstrations.",
    cover: "/Images/Heros/samplehero.JPG",
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    projects: [
      {
        title: "Waste-to-Compost Machine",
        desc: "A working model that converts kitchen waste into usable compost within days using microbial culture.",
        image: "/Images/Heros/samplehero.JPG",
      },
      {
        title: "Plastic-Free School Initiative",
        desc: "An awareness campaign encouraging reusable alternatives across campus through creative posters and skits.",
        image: "/Images/Heros/samplehero.JPG",
      },
      {
        title: "Rainwater Harvesting Model",
        desc: "Demonstrating the collection and utilization of rainwater for school gardening and sanitation.",
        image: "/Images/Heros/samplehero.JPG",
      },
    ],
    color: "from-sky-50 to-sky-100",
  },
]

const EnrichingExhibitions = () => {
  return (
    <section
      id="exhibitions"
      className="relative my-10 md:my-20 py-15 md:py-20 bg-linear-to-br from-violet-950 via-blue-900 to-indigo-950"
    >
      <div className="mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 lg:px-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium leading-normal">
            Enriching Exhibitions
          </h2>
          <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
            Each exhibition at Montessori Cambridge School is a celebration of discovery — 
            where curiosity transforms into creativity and innovation takes shape through student projects.
          </p>
        </div>

        {/* Exhibitions */}
        <div className="space-y-12 lg:space-y-16">
          {exhibitions.map((exhibit, index) => (
            <div
              key={exhibit.id}
              className={`rounded-xl sm:rounded-2xl bg-linear-to-br color from-indigo-100 to-violet-100 shadow-md overflow-hidden`}
            >
              {/* Exhibition Cover */}
              <div className="relative">
                <img
                  src={exhibit.cover}
                  alt={exhibit.title}
                  className="w-full h-100 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 mx-5 sm:mx-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl lg:text-3xl font-semibold font-poppins tracking-wide">{exhibit.title}</h3>
                  </div>
                  <p className="text-base lg:text-lg opacity-90">
                    {exhibit.description}
                  </p>
                </div>
              </div>

              {/* Project Highlights */}
              <div className="p-5 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {exhibit.projects.map((project, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-5">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 font-poppins tracking-wide">
                          {project.title}
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base font-inter leading-relaxed">
                          {project.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EnrichingExhibitions

