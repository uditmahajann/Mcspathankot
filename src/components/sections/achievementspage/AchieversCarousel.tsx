import React, { useState, useMemo } from "react";
import { Trophy } from "lucide-react";


type Achievement = {
  _id: string;
  category: "academics" | "sports" | "cultural" | "leadership";
  title: string;
  description: string;
  date: string;
  personName: string;
  personDesignation?: string;
  image: {
    asset: {
      url: string;
    };
  };
};

type Props = {
  achievements: Achievement[];
};

const CATEGORIES = [
  { label: "Academics", value: "academics" },
  { label: "Sports", value: "sports" },
  { label: "Cultural", value: "cultural" },
  { label: "Leadership", value: "leadership" },
];

const ITEMS_PER_PAGE = 6;



const StudentAchieversGrid = ({ achievements }: Props) => {
  const [activeCategory, setActiveCategory] = useState("academics");
  const [currentPage, setCurrentPage] = useState(1);


  /* ---------- FILTER + SORT ---------- */
  
  const filteredAndSorted = useMemo(() => {
    return achievements
      .filter((a) => a.category === activeCategory)
      .sort(
        (a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      );
  }, [achievements, activeCategory]);



  /* ---------- PAGINATION ---------- */

  const totalPages = Math.ceil(
    filteredAndSorted.length / ITEMS_PER_PAGE
  );

  const paginatedAchievers = filteredAndSorted.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section
      id="achievers"
      className="relative bg-white py-4 sm:py-10 my-10"
    >
      <div className="mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 xl:px-0">

        {/* ---------- HEADER ---------- */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Our Proud <span className="relative inline-block">Achievers
              <img
                src="/Images/Doodles/LinePink.png"
                alt="Underline"
                className="absolute w-[95%] -bottom-4"
              />
            </span>{" "} in 2025–26
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Meet the shining stars of Montessori Cambridge School —
            students who bring pride through their outstanding achievements.
          </p>
        </div>

        {/* ---------- CATEGORY FILTER ---------- */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm min-[540px]:text-base font-outfit font-medium transition cursor-pointer ${
                activeCategory === cat.value
                  ? "bg-amber-300 text-gray-900"
                  : "bg-white border border-gray-300 hover:bg-gray-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ---------- GRID ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedAchievers.map((achiever, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={achiever.image.asset.url}
                  alt={achiever.personName}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />

                <div className="absolute bottom-4 left-3 flex items-center gap-2 bg-white/85 px-3 py-1 rounded-full shadow-sm">
                  <Trophy className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-outfit font-semibold text-gray-700 uppercase">
                    {new Date(achiever.date).getFullYear()} •{" "}
                    {activeCategory.charAt(0).toUpperCase() +
                      activeCategory.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-inter font-semibold text-gray-900">
                  {achiever.personName}
                </h3>
                <p className="text-blue-800 font-inter font-medium mt-1">
                  {achiever.title}
                </p>
                <p className="text-gray-600 font-inter text-sm mt-1">
                  {achiever.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- EMPTY STATE ---------- */}
        {paginatedAchievers.length === 0 && (
          <div className="text-center mt-12 text-gray-300">
            No achievements found in this category.
          </div>
        )}

        {/* ---------- PAGINATION ---------- */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  currentPage === i + 1
                    ? "bg-yellow-400 text-gray-900"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentAchieversGrid;