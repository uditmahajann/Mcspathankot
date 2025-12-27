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
      className="mt-10 md:mt-20 py-16 bg-linear-to-br from-violet-950 via-blue-900 to-indigo-950"
    >
      <div className="mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 lg:px-20">

        {/* ---------- HEADER ---------- */}
        <div className="text-center mb-10">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium">
            Our Proud Achievers in 2025–26
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
            Meet the shining stars of Montessori Cambridge School —
            students who bring pride through their outstanding achievements.
          </p>
        </div>

        {/* ---------- CATEGORY FILTER ---------- */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full text-base font-outfit font-medium transition ${
                activeCategory === cat.value
                  ? "bg-yellow-400 text-gray-900"
                  : "bg-white border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ---------- GRID ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
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
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-900">
                    {new Date(achiever.date).getFullYear()} •{" "}
                    {activeCategory.charAt(0).toUpperCase() +
                      activeCategory.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-poppins font-semibold text-gray-900">
                  {achiever.personName}
                </h3>
                <p className="text-gray-700 font-inter text-sm mt-1">
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