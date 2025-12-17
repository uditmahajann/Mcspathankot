"use client"

import React, { useState } from "react"
import MCSSpotlight from "../../elements/McsSpotlight"
import ClassXToppers from "../../elements/ClassXToppers"
import ClassXIIToppers from "../../elements/ClassXIIToppers"
import StudentAchievers from "../../elements/StudentAchievers"
import AlumniChronicles from "../../elements/AlumniChronicles"

const categories = [
  { key: "class-12", label: "Class XII Toppers" },
  { key: "class-10", label: "Class X Toppers" },
  // { key: "mcs-spotlight", label: "MCS Spotlight" },
  { key: "student-achievers", label: "Student Achievers" },
  { key: "alumni-chronicles", label: "Alumni Chronicles" },
]

const Achievements: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("class-12")

  return (
    <section
      className="h-full px-5 min-[480px]:px-12 sm:px-10 py-25 bg-white"
    >
      {/* <picture>
          <img
            src="/Images/Doodles/VictoryL.png"
            alt="MCS"
            className="hidden lg:block absolute scale-x-[-1] lg:w-75 right-0 -mt-25"
          />
        </picture>

        <picture>
          <img
            src="/Images/Doodles/VictoryL.png"
            alt="MCS"
            className="hidden lg:block absolute lg:w-85 left-0 -rotate-10"
          />
        </picture> */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-playpen font-medium inline-block relative">
            Our Annual
            <span className="relative z-10 inline-block pl-5 pr-1">
              Hall of Fame
              <span className="absolute inset-0 -z-10 -top-4 sm:-top-6 md:-top-9">
                <img
                  src="/Images/Doodles/CircleBlue.png"
                  alt="Circle Doodle"
                  className="w-full h-auto object-contain"
                />
              </span>
            </span>{" "}
            2024-25
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Celebrating the outstanding talents and achievements of our students across academics, arts, sports & co-curricular excellence.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-sm sm:text-base font-inter font-medium cursor-pointer border-2 transition ${activeCategory === cat.key
                  ? "bg-primary text-white"
                  : "bg-white text-primary border-blue-200"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Conditional rendering of section components */}
        <div className="mt-8">
          {activeCategory === "class-12" && <ClassXIIToppers />}
          {activeCategory === "class-10" && <ClassXToppers />}
          {activeCategory === "mcs-spotlight" && <MCSSpotlight />}
          {activeCategory === "student-achievers" && <StudentAchievers />}
          {activeCategory === "alumni-chronicles" && <AlumniChronicles />}
          
        </div>
      </div>
    </section>
  )
}

export default Achievements