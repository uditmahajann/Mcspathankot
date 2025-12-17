"use client"

import { useState } from "react"
import { Search, ChevronRight } from "lucide-react"

const bulletinData = [
  {
    id: 1,
    category: "Academic",
    date: "May 18, 2025",
    title: "Final Examination Schedule Released",
    description:
      "The schedule for final examinations for all grades has been released. Please check the detailed timetable.",
    link: "#",
  },
  {
    id: 2,
    category: "Administrative",
    date: "May 15, 2025",
    title: "Fee Structure Update for Next Academic Year",
    description: "The school management has released the updated fee structure for the upcoming academic year 2025-26.",
    link: "#",
  },
  {
    id: 3,
    category: "Events",
    date: "May 12, 2025",
    title: "Annual Sports Day Announcement",
    description: "The Annual Sports Day will be held on June 10, 2025. Registration for various events is now open.",
    link: "#",
  },
  {
    id: 4,
    category: "Academic",
    date: "May 10, 2025",
    title: "Summer Vacation Homework Guidelines",
    description:
      "Guidelines for summer vacation homework have been issued for all classes. Please download from the student portal.",
    link: "#",
  },
  {
    id: 5,
    category: "Administrative",
    date: "May 8, 2025",
    title: "School Timing Change Notice",
    description:
      "Due to the summer season, school timings will be changed from May 15. New timings: 7:30 AM to 1:30 PM.",
    link: "#",
  },
  {
    id: 6,
    category: "Events",
    date: "May 5, 2025",
    title: "Inter-School Debate Competition",
    description:
      "Our school will be hosting the Inter-School Debate Competition on May 25. Interested students can register with their class teachers.",
    link: "#",
  },
  // {
  //   id: 7,
  //   category: "Events",
  //   date: "May 5, 2025",
  //   title: "Inter-School Debate Competition",
  //   description:
  //     "Our school will be hosting the Inter-School Debate Competition on May 25. Interested students can register with their class teachers.",
  //   link: "#",
  // },
]

const BULLETINS_PER_PAGE = 6

const Bulletin = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredBulletins = bulletinData.filter((bulletin) => {
    const matchesCategory = activeFilter === "All" || bulletin.category === activeFilter
    const matchesSearch =
      bulletin.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bulletin.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const totalPages = Math.ceil(filteredBulletins.length / BULLETINS_PER_PAGE)
  const paginatedBulletins = filteredBulletins.slice(
    (currentPage - 1) * BULLETINS_PER_PAGE,
    currentPage * BULLETINS_PER_PAGE
  )

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page)
  }

  return (
    <section className="py-10 sm:py-16 my-10 bg-white">
      <div className="container mx-auto px-5 sm:px-12 lg:px-20 xl:px-40">
        <div className="text-center mb-10 sm:mb-12 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            MCS <span className="relative inline-block">
              News Bulletin
              <img src="/Images/Doodles/SparkGreen.png" alt="Spark" className="absolute w-10 -top-6 -right-10" />
            </span>
          </h2>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div className="flex space-x-2">
            {["All", "Academic", "Administrative", "Events"].map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter)
                  setCurrentPage(1)
                }}
                className={`px-5 py-2 rounded-full text-base font-medium transition-colors cursor-pointer ${
                  activeFilter === filter ? "bg-primary text-white" : "bg-gray-200/60 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search bulletins..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          </div>
        </div>

        {/* Bulletins Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedBulletins.map((bulletin) => (
            <div key={bulletin.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div
                className={`h-2 ${
                  bulletin.category === "Academic"
                    ? "bg-primary"
                    : bulletin.category === "Administrative"
                    ? "bg-purple-600"
                    : "bg-green-600"
                }`}
              ></div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`text-xs font-inter font-semibold px-2 py-1.5 rounded ${
                      bulletin.category === "Academic"
                        ? "bg-blue-100 text-blue-800"
                        : bulletin.category === "Administrative"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {bulletin.category}
                  </span>
                  <span className="font-inter font-medium text-sm text-gray-600">{bulletin.date}</span>
                </div>
                <h3 className="text-lg font-inter font-semibold text-gray-900 mb-2">{bulletin.title}</h3>
                <p className="text-gray-700 text-sm mb-4 font-inter line-clamp-3">{bulletin.description}</p>
                <a href={bulletin.link} className="inline-flex items-center text-primarydark hover:text-secondarydark font-inter font-medium text-sm">
                  Read more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        

        {/* No Results */}
        {filteredBulletins.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">No bulletins found matching your criteria.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed font-inter"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`px-4 py-2 rounded-full cursor-pointer font-medium font-inter ${
                  currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer font-inter"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Bulletin
