import { useState, useEffect, useRef } from "react"
import {
  FileText,
  Download,
  Calendar,
  Search,
  ChevronDown,
  ChevronUp,
  Filter,
} from "lucide-react"

const circularsData = [
  {
    id: "CIR-2025-042",
    date: "May 15, 2025",
    subject: "Guidelines for Annual Examination 2025",
    category: "Examination",
    fileSize: "245 KB",
    downloadUrl: "#",
  },
  {
    id: "CIR-2025-041",
    date: "May 10, 2025",
    subject: "Summer Vacation Schedule and Holiday Homework",
    category: "Academic",
    fileSize: "320 KB",
    downloadUrl: "#",
  },
  {
    id: "CIR-2025-040",
    date: "May 5, 2025",
    subject: "Fee Structure for Academic Year 2025-26",
    category: "Administrative",
    fileSize: "180 KB",
    downloadUrl: "#",
  },
  {
    id: "CIR-2025-039",
    date: "April 28, 2025",
    subject: "School Transportation Routes Update",
    category: "Administrative",
    fileSize: "210 KB",
    downloadUrl: "#",
  },
  {
    id: "CIR-2025-038",
    date: "April 20, 2025",
    subject: "Annual Sports Day Schedule and Registration",
    category: "Events",
    fileSize: "275 KB",
    downloadUrl: "#",
  },
  {
    id: "CIR-2025-037",
    date: "April 15, 2025",
    subject: "Parent-Teacher Meeting Schedule for Term End",
    category: "Academic",
    fileSize: "195 KB",
    downloadUrl: "#",
  },
  {
    id: "CIR-2025-036",
    date: "April 10, 2025",
    subject: "Uniform Requirements for New Academic Session",
    category: "Administrative",
    fileSize: "230 KB",
    downloadUrl: "#",
  },
  {
    id: "CIR-2025-035",
    date: "April 5, 2025",
    subject: "School Calendar for Academic Year 2025-26",
    category: "Academic",
    fileSize: "350 KB",
    downloadUrl: "#",
  },
  {
    id: "CIR-2025-036",
    date: "April 5, 2025",
    subject: "School Calendar for Academic Year 2024-25",
    category: "Academic",
    fileSize: "350 KB",
    downloadUrl: "#",
  },
]

type Circular = typeof circularsData[number]
type CircularKeys = keyof Circular

export default function ImportantCirculars() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortConfig, setSortConfig] = useState<{ key: CircularKeys; direction: "asc" | "desc" }>({
    key: "date",
    direction: "desc",
  })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const sortedCirculars = [...circularsData].sort((a, b) => {
    const aVal = a[sortConfig.key]
    const bVal = b[sortConfig.key]
    if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1
    if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1
    return 0
  })

  const filteredCirculars = sortedCirculars.filter((circular) => {
    const matchesCategory = selectedCategory === "All" || circular.category === selectedCategory
    const matchesSearch =
      circular.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      circular.id.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const totalPages = Math.ceil(filteredCirculars.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedCirculars = filteredCirculars.slice(startIndex, startIndex + itemsPerPage)

  const requestSort = (key: CircularKeys) => {
    let direction: "asc" | "desc" = "asc"
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }
    setSortConfig({ key, direction })
  }

  const getSortIndicator = (key: CircularKeys) => {
    if (sortConfig.key !== key) return null
    return sortConfig.direction === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <section id="circulars" className="my-10 pb-10 sm:pb-16 bg-white">
      <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40">
        <div className="text-center mb-10 sm:mb-12 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Important{" "}
            <span className="relative inline-block">
              Circulars
              <img
                src="/Images/Doodles/SparkGreen.png"
                alt="Spark"
                className="absolute w-10 sm:w-12 md:w-14 -top-6 -right-15"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Official circulars and notifications issued by the school administration. They contain
            important information regarding policies, schedules, and other official announcements.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <Filter size={18} className="mr-2 text-gray-500" />
              <span className="text-gray-700">Filter by Category</span>
              <ChevronDown size={18} className="ml-2 text-gray-500" />
            </button>

            {isFilterOpen && (
              <div className="absolute mt-2 w-full md:w-64 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                {["All", "Academic", "Administrative", "Examination", "Events"].map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setIsFilterOpen(false)
                      setCurrentPage(1)
                    }}
                    className={`block w-full text-left px-5 py-3 font-inter text-base cursor-pointer ${
                      selectedCategory === category
                        ? "bg-blue-50 text-primary"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
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
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          </div>
        </div>

        {/* Circulars Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {["id", "date", "subject", "category"].map((key) => (
                    <th
                      key={key}
                      className="px-6 py-4 text-left text-xs font-inter font-medium text-gray-600 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort(key as CircularKeys)}
                    >
                      <div className="flex items-center capitalize">
                        {key}
                        {getSortIndicator(key as CircularKeys)}
                      </div>
                    </th>
                  ))}
                  <th className="px-6 py-4 text-right text-xs font-inter font-medium text-gray-600 uppercase tracking-wider">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedCirculars.map((circular) => (
                  <tr key={circular.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">{circular.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-inter text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-gray-400" />
                        {circular.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-inter font-medium text-gray-900">{circular.subject}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-inter font-medium ${
                          circular.category === "Academic"
                            ? "bg-blue-100 text-blue-800"
                            : circular.category === "Administrative"
                            ? "bg-purple-100 text-purple-800"
                            : circular.category === "Examination"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {circular.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href={circular.downloadUrl}
                        className="inline-flex items-center text-gray-500 hover:text-primarydark bg-gray-100 hover:bg-blue-50 px-3 py-1 rounded-full transition-colors"
                      >
                        <Download size={16} className="mr-1" />
                        <span>{circular.fileSize}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredCirculars.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No circulars found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
  <div className="flex justify-center items-center mt-12 space-x-4">
    <button
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className={`px-4 py-2 font-inter rounded ${
        currentPage === 1
          ? "bg-gray-200 cursor-not-allowed opacity-60"
          : "bg-gray-100 cursor-pointer hover:bg-gray-200"
      }`}
    >
      Previous
    </button>

    {Array.from({ length: totalPages }).map((_, index) => (
      <button
        key={index}
        onClick={() => handlePageChange(index + 1)}
        className={`px-4 py-2 rounded-full cursor-pointer font-medium font-inter ${
          currentPage === index + 1
            ? "bg-blue-600 text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        {index + 1}
      </button>
    ))}

    <button
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={`px-4 py-2 font-inter rounded ${
        currentPage === totalPages
          ? "bg-gray-200 cursor-not-allowed opacity-60"
          : "bg-gray-100 cursor-pointer hover:bg-gray-200"
      }`}
    >
      Next
    </button>
  </div>
)}

      </div>
    </section>
  )
}