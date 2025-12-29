import React, { useState } from "react"
import { FileText, SquarePen, School, ChartColumnBig, CircleSmall, Heart } from "lucide-react"

type SyllabusItem = {
  _id: string;
  group: GradeGroup;
  className: string;
  classOrder: number;
  description: string;
  downloadFile: {
    asset: {
      url: string;
    };
  };
};

interface Props {
  syllabus: SyllabusItem[];
}


type GradeGroup = "I-V" | "VI-VIII" | "IX-X" | "XI-XII";


const Syllabus: React.FC<Props> = ({ syllabus }) => {


  const tabs: GradeGroup[] = ["I-V", "VI-VIII", "IX-X", "XI-XII"];
  const [activeTab, setActiveTab] = useState<GradeGroup>("I-V");


  const filteredSyllabus = syllabus.filter(
  (item) => item.group === activeTab
);


  return (
    <section id="syllabus" className="py-4 sm:py-10 my-10 bg-white">
      <div className="container mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium leading-normal">
            Latest Curriculum <span className="relative inline-block">Syllabus
              <img
                src="/Images/Doodles/LinePink.png"
                alt="Underline"
                className="absolute w-[95%] left-2 -bottom-4 sm:-bottom-6"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Download detailed syllabus documents by grade level for the current academic session.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-inter font-medium text-base ${activeTab === tab
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                }`}
            >
              Grade {tab}
            </button>
          ))}
        </div>

        {/* Syllabus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredSyllabus.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-poppins font-bold text-gray-900 mb-2 tracking-wide">{item.className}</h3>
                  <p className="text-gray-700 mb-4 font-inter">{item.description}</p>
                </div>
                <div>
                  <a href={item.downloadFile.asset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2 text-base bg-primary hover:bg-primarydark text-white font-outfit font-semibold rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Download Syllabus
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 -mr-1 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Syllabus Development */}
        <div className="mt-12 sm:mt-16 bg-blue-50 rounded-lg p-6 md:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl font-poppins font-semibold text-primarydark mb-8 sm:mb-12 tracking-wide leading-normal">Syllabus Development & Review</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex">
              <div className="shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                <FileText className="w-6 h-6 shrink-0 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-poppins tracking-wide font-semibold text-gray-900">CBSE Alignment</h4>
                <p className="text-gray-700 font-inter mt-1">
                  Our syllabus is meticulously aligned with the CBSE curriculum framework, ensuring comprehensive
                  coverage of all required topics and learning outcomes while maintaining academic rigor.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                <SquarePen className="w-6 h-6 shrink-0 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-poppins tracking-wide font-semibold text-gray-900">Annual Review</h4>
                <p className="text-gray-700 font-inter mt-1">
                  Our syllabus undergoes a comprehensive annual review by subject experts, incorporating the latest
                  educational research, CBSE updates, and feedback from teachers, students, and parents.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                <School className="w-6 h-6 shrink-0 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-poppins tracking-wide font-semibold text-gray-900">Enrichment</h4>
                <p className="text-gray-700 font-inter mt-1">
                  While adhering to the CBSE framework, our syllabus includes enrichment components that provide
                  additional depth, real-world applications, and interdisciplinary connections.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                <ChartColumnBig className="w-6 h-6 shrink-0 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-poppins tracking-wide font-semibold text-gray-900">Progression</h4>
                <p className="text-gray-700 font-inter mt-1">
                  Our syllabus is designed with careful attention to vertical progression, ensuring smooth transitions
                  between grade levels and building upon previously learned concepts in a structured manner.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Syllabus
