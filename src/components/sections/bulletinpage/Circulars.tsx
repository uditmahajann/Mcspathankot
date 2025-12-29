import { useEffect, useState } from "react"
import { Search, ChevronRight, X, Download } from "lucide-react"
import { urlFor } from "../../../lib/sanity";


interface Circular {
  _id: string
  category: "academic" | "administrative" | "events"
  date: string
  title: string
  description: string
  image?: any
}

const CIRCULARS_PER_PAGE = 6

const Circulars = ({ circulars }: { circulars: Circular[] }) => {

  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  // modal state: index of circular opened or null
  const [openCircularId, setOpenCircularId] = useState<number | null>(null)


  const mappedCirculars = circulars.map((c, index) => ({
  id: index + 1, // used for modal logic
  category:
    c.category === "academic"
      ? "Academic"
      : c.category === "administrative"
      ? "Administrative"
      : "Events",
  date: new Date(c.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }),
  title: c.title,
  description: c.description,
  image: c.image ? urlFor(c.image).width(1200).auto("format").url() : null,
}));


  const filteredCirculars = mappedCirculars.filter((circular) => {
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
  const getCircularById = (id: number | null) => mappedCirculars.find((c) => c.id === id) ?? null

  return (
    <section className="py-4 sm:py-10 my-10 bg-white">
      <div className="container mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium inline-block relative leading-normal">
            MCS Latest
            <span className="relative z-10 inline-block pl-4 pr-0.5">
              Circulars &
              <span className="absolute inset-0 -z-10 -top-4">
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
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-12 gap-4">
          <div className="flex flex-wrap justify-center space-x-2 space-y-2">
            {["All", "Academic", "Events", "Administrative"].map((filter) => (
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
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-6 sm:p-10"
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
        
      </div>
    </div>
  )
}

export default Circulars