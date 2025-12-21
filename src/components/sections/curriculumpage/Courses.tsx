import React, { useState } from "react"

interface Course {
  name: string;
  description?: string;
  components?: string[];
}

interface CourseGroup {
  _id: string;
  gradeGroup: "I-V" | "VI-VIII" | "IX-X" | "XI-XII";
  title: string;
  description?: string;
  courses: Course[];
}

type GradeGroup = "I-V" | "VI-VIII" | "IX-X" | "XI-XII";



const Courses = ({ courseGroups }: { courseGroups: CourseGroup[] }) => {

  const tabs: { label: string; value: GradeGroup }[] = [
  { label: "Grade I–V", value: "I-V" },
  { label: "Grade VI–VIII", value: "VI-VIII" },
  { label: "Grade IX–X", value: "IX-X" },
  { label: "Grade XI–XII", value: "XI-XII" },
];


const [activeTab, setActiveTab] = useState<"I-V" | "VI-VIII" | "IX-X" | "XI-XII">("I-V");


  // Define color palette for cards
  const colorClasses = [
    "bg-fuchsia-100 border-fuchsia-200 hover:shadow-fuchsia-200",
    "bg-sky-100 border-sky-200 hover:shadow-sky-200",
    "bg-lime-100 border-lime-200 hover:shadow-lime-200",
    "bg-amber-100 border-amber-200 hover:shadow-amber-200",
    "bg-indigo-100 border-indigo-200 hover:shadow-indigo-200",
    "bg-purple-100 border-purple-200 hover:shadow-purple-200",
  ]

  const coursesData = courseGroups.reduce<Record<string, any>>((acc, group) => {
  acc[group.gradeGroup] = {
    title: group.title,
    desc: group.description,
    courses: group.courses,
  };
  return acc;
}, {});


  const current = coursesData[activeTab]

  return (
    <section id="courses" className="py-4 sm:py-10 my-10 bg-white">
      <div className="container mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium inline-block relative leading-normal">
            Academic Courses{" "}
            <span className="relative inline-block">
              & Curriculum
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[80%] left-8 -bottom-4 sm:-bottom-6"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            A comprehensive academic framework designed to build knowledge, character, and curiosity at every grade level.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-20">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-2 rounded-full font-inter font-medium text-base transition-all duration-200 ${
                activeTab === tab.value
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
              }`}
            >
              {tab.label}

            </button>
          ))}
        </div>

        {/* Active Content */}
        <div className="transition-all duration-300 ease-in-out">
          <h3 className="text-xl sm:text-2xl font-poppins font-semibold text-gray-900 mb-3 text-center">
            {current.title}
          </h3>
          <p className="text-gray-700 text-center font-inter mb-10 max-w-4xl mx-auto">
            {current.desc}
          </p>

          {/* For Regular Courses */}
          {current.courses && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {current.courses.map((course: any, i: number) => (
                <div
                  key={i}
                  className={`rounded-xl border p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 ${colorClasses[i % colorClasses.length]}`}
                >
                  <h4 className="text-xl font-poppins font-semibold text-gray-900 mb-2">
                    {course.name}
                  </h4>
                  <p className="text-gray-700 font-inter mb-3">{course.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {course.components.map((comp: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-white/70 text-gray-800 text-sm px-4 py-2 rounded-full font-medium border border-gray-100"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* For Streams */}
          {current.streams && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {current.streams.map((stream: any, i: number) => (
                <div
                  key={i}
                  className={`p-6 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 ${stream.color}`}
                >
                  <h4 className="text-xl font-poppins font-semibold text-gray-900 mb-3 tracking-wide">
                    {stream.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stream.subjects.map((subject: string, j: number) => (
                      <span
                        key={j}
                        className="bg-white/70 text-gray-800 text-sm px-3 py-1 rounded-full border border-gray-200"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Courses