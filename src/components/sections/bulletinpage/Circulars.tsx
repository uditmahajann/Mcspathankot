"use client"

import { useEffect, useState } from "react"
import { Search, ChevronRight, X, Download } from "lucide-react"

const circularData = [
  {
    id: 1,
    category: "Academic",
    date: "May 18, 2025",
    title: "Final Examination Schedule Released",
    description:
      "The schedule for final examinations for all grades has been released. Please check the detailed timetable.",
    link: "#",
    // sample image — replace with the actual circular image path/url
    image: "/Images/Sample/Circular.jpg",
  },
  {
    id: 2,
    category: "Administrative",
    date: "May 15, 2025",
    title: "Fee Structure Update for Next Academic Year",
    description: "The school management has released the updated fee structure for the upcoming academic year 2025-26.",
    link: "#",
    image: "/Images/Sample/Circular1.jpg",
  },
  {
    id: 3,
    category: "Events",
    date: "May 12, 2025",
    title: "Annual Sports Day Announcement",
    description: "The Annual Sports Day will be held on June 10, 2025. Registration for various events is now open.",
    link: "#",
    image: "/Images/Sample/Circular.jpg",
  },
  {
    id: 4,
    category: "Academic",
    date: "May 10, 2025",
    title: "Summer Vacation Homework Guidelines",
    description:
      "Guidelines for summer vacation homework have been issued for all classes. Please download from the student portal.",
    link: "#",
    image: "/Images/Sample/Circular.jpg",
  },
  {
    id: 5,
    category: "Administrative",
    date: "May 8, 2025",
    title: "School Timing Change Notice",
    description:
      "Due to the summer season, school timings will be changed from May 15. New timings: 7:30 AM to 1:30 PM.",
    link: "#",
    image: "/Images/Sample/Circular.jpg",
  },
  {
    id: 6,
    category: "Events",
    date: "May 5, 2025",
    title: "Inter-School Debate Competition",
    description:
      "Our school will be hosting the Inter-School Debate Competition on May 25. Interested students can register with their class teachers.",
    link: "#",
    image: "/Images/Sample/Circular.jpg",
  },
  {
    id: 7,
    category: "Events",
    date: "May 5, 2025",
    title: "Inter-School Debate Competition",
    description:
      "Our school will be hosting the Inter-School Debate Competition on May 25. Interested students can register with their class teachers.",
    link: "#",
    image: "/Images/Sample/Circular.jpg",
  },
]

const CIRCULARS_PER_PAGE = 6

const Circulars = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  // modal state: index of circular opened or null
  const [openCircularId, setOpenCircularId] = useState<number | null>(null)

  const filteredCirculars = circularData.filter((circular) => {
    const matchesCategory = activeFilter === "All" || circular.category === activeFilter
    const matchesSearch =
      circular.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      circular.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const totalPages = Math.ceil(filteredCirculars.length / CIRCULARS_PER_PAGE)
  const paginatedCirculars = filteredCirculars.slice(
    (currentPage - 1) * CIRCULARS_PER_PAGE,
    currentPage * CIRCULARS_PER_PAGE
  )

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page)
  }

  // close modal on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenCircularId(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // find circular by id helper
  const getCircularById = (id: number | null) => circularData.find((c) => c.id === id) ?? null

  return (
    <section className="py-10 my-10 bg-white">
      <div className="container mx-auto px-5 sm:px-12 lg:px-20 xl:px-40">
        <div className="text-center mb-10">
          <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-playpen font-medium inline-block relative mb-10 sm:mb-12">
            Latest
            <span className="relative z-10 inline-block pl-5 pr-1">
              Circulars &
              <span className="absolute inset-0 -z-10 -top-4 sm:-top-6">
                <img
                  src="/Images/Doodles/CircleGreen.png"
                  alt="Circle Doodle"
                  className="w-[90%] h-auto object-contain"
                />
              </span>
            </span>{" "}
            Announcements
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
              placeholder="Search circulars..."
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

        {/* Circulars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCirculars.map((circular) => (
            <div key={circular.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div
                className={`h-2 ${
                  circular.category === "Academic"
                    ? "bg-blue-500"
                    : circular.category === "Administrative"
                    ? "bg-emerald-500"
                    : "bg-purple-500"
                }`}
              ></div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`text-xs font-inter font-semibold px-2 py-1.5 rounded ${
                      circular.category === "Academic"
                        ? "bg-blue-100 text-blue-800"
                        : circular.category === "Administrative"
                        ? "bg-green-100 text-emerald-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {circular.category}
                  </span>
                  <span className="font-inter font-medium text-sm text-gray-600">{circular.date}</span>
                </div>
                <h3 className="text-lg font-inter font-semibold text-gray-900 mb-2">{circular.title}</h3>
                <p className="text-gray-700 text-sm mb-4 font-inter line-clamp-3">{circular.description}</p>

                {/* View Circular => open modal showing circular.image */}
                <button
                  onClick={() => setOpenCircularId(circular.id)}
                  className="inline-flex items-center text-primarydark hover:text-secondarydark font-inter font-medium text-sm cursor-pointer"
                >
                  View Circular <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCirculars.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">No circulars found matching your criteria.</p>
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

      {/* ---------- Circular Image Modal ---------- */}
      {openCircularId !== null && (
        <ModalCircular
          circular={getCircularById(openCircularId)}
          onClose={() => setOpenCircularId(null)}
        />
      )}
    </section>
  )
}

/* ---------- Modal component (kept simple) ---------- */
const ModalCircular = ({ circular, onClose }: { circular: any; onClose: () => void }) => {
  if (!circular) return null

  // close on click outside handled on container
  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-gray-100 rounded shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header actions */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          {/* Download */}
          <a
            href={circular.image}
            download
            className="inline-flex items-center gap-2 bg-white/90 px-3 py-2 rounded shadow-sm hover:bg-gray-100 hover:text-blue-600 text-gray-800 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download
          </a>

          {/* Close */}
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow hover:bg-gray-100 cursor-pointer"
            aria-label="Close circular"
          >
            <X className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Image area */}
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="w-full h-[90vh] overflow-auto flex items-center justify-center bg-gray-200">
            <img
              src={circular.image}
              alt={circular.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        {/* caption / meta */}
        
        {/* <div className="p-4 border-t">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">{circular.date} • {circular.category}</div>
              <div className="text-lg font-semibold text-gray-900">{circular.title}</div>
            </div>
            <div className="text-sm text-gray-600"></div>
          </div>
        </div> */}
        
      </div>
    </div>
  )
}

export default Circulars




// "use client"

// import { useState } from "react"
// import { Search, ChevronRight } from "lucide-react"

// const circularData = [
//   {
//     id: 1,
//     category: "Academic",
//     date: "May 18, 2025",
//     title: "Final Examination Schedule Released",
//     description:
//       "The schedule for final examinations for all grades has been released. Please check the detailed timetable.",
//     link: "#",
//   },
//   {
//     id: 2,
//     category: "Administrative",
//     date: "May 15, 2025",
//     title: "Fee Structure Update for Next Academic Year",
//     description: "The school management has released the updated fee structure for the upcoming academic year 2025-26.",
//     link: "#",
//   },
//   {
//     id: 3,
//     category: "Events",
//     date: "May 12, 2025",
//     title: "Annual Sports Day Announcement",
//     description: "The Annual Sports Day will be held on June 10, 2025. Registration for various events is now open.",
//     link: "#",
//   },
//   {
//     id: 4,
//     category: "Academic",
//     date: "May 10, 2025",
//     title: "Summer Vacation Homework Guidelines",
//     description:
//       "Guidelines for summer vacation homework have been issued for all classes. Please download from the student portal.",
//     link: "#",
//   },
//   {
//     id: 5,
//     category: "Administrative",
//     date: "May 8, 2025",
//     title: "School Timing Change Notice",
//     description:
//       "Due to the summer season, school timings will be changed from May 15. New timings: 7:30 AM to 1:30 PM.",
//     link: "#",
//   },
//   {
//     id: 6,
//     category: "Events",
//     date: "May 5, 2025",
//     title: "Inter-School Debate Competition",
//     description:
//       "Our school will be hosting the Inter-School Debate Competition on May 25. Interested students can register with their class teachers.",
//     link: "#",
//   },
//   {
//     id: 7,
//     category: "Events",
//     date: "May 5, 2025",
//     title: "Inter-School Debate Competition",
//     description:
//       "Our school will be hosting the Inter-School Debate Competition on May 25. Interested students can register with their class teachers.",
//     link: "#",
//   },
// ]

// const CIRCULARS_PER_PAGE = 6

// const Circulars = () => {
//   const [activeFilter, setActiveFilter] = useState("All")
//   const [searchQuery, setSearchQuery] = useState("")
//   const [currentPage, setCurrentPage] = useState(1)

//   const filteredCirculars = circularData.filter((circular) => {
//     const matchesCategory = activeFilter === "All" || circular.category === activeFilter
//     const matchesSearch =
//       circular.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       circular.description.toLowerCase().includes(searchQuery.toLowerCase())
//     return matchesCategory && matchesSearch
//   })

//   const totalPages = Math.ceil(filteredCirculars.length / CIRCULARS_PER_PAGE)
//   const paginatedCirculars = filteredCirculars.slice(
//     (currentPage - 1) * CIRCULARS_PER_PAGE,
//     currentPage * CIRCULARS_PER_PAGE
//   )

//   const goToPage = (page: number) => {
//     if (page >= 1 && page <= totalPages) setCurrentPage(page)
//   }

//   return (
//     <section className="py-10 my-10 bg-white">
//       <div className="container mx-auto px-5 sm:px-12 lg:px-20 xl:px-40">
//         <div className="text-center mb-10">
//           <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-playpen font-medium inline-block relative mb-10 sm:mb-12">
//             Latest
//             <span className="relative z-10 inline-block pl-5 pr-1">
//               Circulars &
//               <span className="absolute inset-0 -z-10 -top-4 sm:-top-6">
//                 <img
//                   src="/Images/Doodles/CircleGreen.png"
//                   alt="Circle Doodle"
//                   className="w-[90%] h-auto object-contain"
//                 />
//               </span>
//             </span>{" "}
//             Announcements
//           </h2>
//         </div>
        

//         {/* Filters & Search */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
//           <div className="flex space-x-2">
//             {["All", "Academic", "Administrative", "Events"].map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => {
//                   setActiveFilter(filter)
//                   setCurrentPage(1)
//                 }}
//                 className={`px-5 py-2 rounded-full text-base font-medium transition-colors cursor-pointer ${
//                   activeFilter === filter ? "bg-primary text-white" : "bg-gray-200/60 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>

//           <div className="relative w-full md:w-64">
//             <input
//               type="text"
//               placeholder="Search circulars..."
//               value={searchQuery}
//               onChange={(e) => {
//                 setSearchQuery(e.target.value)
//                 setCurrentPage(1)
//               }}
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
//           </div>
//         </div>

//         {/* Circulars Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {paginatedCirculars.map((circular) => (
//             <div key={circular.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
//               <div
//                 className={`h-2 ${
//                   circular.category === "Academic"
//                     ? "bg-blue-500"
//                     : circular.category === "Administrative"
//                     ? "bg-emerald-500"
//                     : "bg-purple-500"
//                 }`}
//               ></div>
//               <div className="p-5">
//                 <div className="flex justify-between items-start mb-4">
//                   <span
//                     className={`text-xs font-inter font-semibold px-2 py-1.5 rounded ${
//                       circular.category === "Academic"
//                         ? "bg-blue-100 text-blue-800"
//                         : circular.category === "Administrative"
//                         ? "bg-green-100 text-emerald-800"
//                         : "bg-purple-100 text-purple-800"
//                     }`}
//                   >
//                     {circular.category}
//                   </span>
//                   <span className="font-inter font-medium text-sm text-gray-600">{circular.date}</span>
//                 </div>
//                 <h3 className="text-lg font-inter font-semibold text-gray-900 mb-2">{circular.title}</h3>
//                 <p className="text-gray-700 text-sm mb-4 font-inter line-clamp-3">{circular.description}</p>
//                 <a href={circular.link} className="inline-flex items-center text-primarydark hover:text-secondarydark font-inter font-medium text-sm">
//                   View Circular <ChevronRight size={16} className="ml-1" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
        

//         {/* No Results */}
//         {filteredCirculars.length === 0 && (
//           <div className="text-center py-8">
//             <p className="text-gray-600">No circulars found matching your criteria.</p>
//           </div>
//         )}

//         {/* Pagination Controls */}
//         {totalPages > 1 && (
//           <div className="flex justify-center items-center mt-12 space-x-4">
//             <button
//               onClick={() => goToPage(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed font-inter"
//             >
//               Previous
//             </button>
//             {Array.from({ length: totalPages }, (_, i) => (
//               <button
//                 key={i}
//                 onClick={() => goToPage(i + 1)}
//                 className={`px-4 py-2 rounded-full cursor-pointer font-medium font-inter ${
//                   currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
//                 }`}
//               >
//                 {i + 1}
//               </button>
//             ))}
//             <button
//               onClick={() => goToPage(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer font-inter"
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

// export default Circulars
