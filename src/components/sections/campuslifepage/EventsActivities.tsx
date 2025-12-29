import { useState, useEffect, useRef } from "react"
import {
  Calendar,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react"

interface Event {
  _id: string
  title: string
  description: string
  date: string
  location?: string
  featured: boolean
  tags?: string[]
  video: {
    asset: {
      url: string
    }
  }
}

export default function EventsActivities({ events }: { events: Event[] }) {

  const [currentFeaturedEvent, setCurrentFeaturedEvent] = useState<number>(0)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({})
  const bgColors = [
    "bg-purple-100/80",
    "bg-yellow-100/60",
    "bg-emerald-100/60",
    "bg-rose-100/60",
  ]


  // 🎯 Split Featured & Non-featured
  const featuredEvents = events.filter((event) => event.featured).slice(0, 3)
  const otherEvents = events.filter((event) => !event.featured)

  const handlePrevFeatured = () => {
    setCurrentFeaturedEvent((prev) =>
      prev === 0 ? featuredEvents.length - 1 : prev - 1
    )
  }

  const handleNextFeatured = () => {
    setCurrentFeaturedEvent((prev) =>
      prev === featuredEvents.length - 1 ? 0 : prev + 1
    )
  }

  // 🎯 Pagination for other events (videos)
  const eventsPerPage = 3
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(otherEvents.length / eventsPerPage)

  const paginatedEvents = otherEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  )

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  // 🎬 Video click handler
  const handlePlayVideo = (id: string) => {
    // Pause all other videos
    Object.entries(videoRefs.current).forEach(([key, ref]) => {
      if (ref && key !== id) {
        ref.pause()
      }
    })
    // Play selected
    const video = videoRefs.current[id]
    if (video) {
      if (activeVideo === id) {
        video.pause()
        setActiveVideo(null)
      } else {
        video.play()
        setActiveVideo(id)
      }
    }
  }

  return (
    <section id="events-activities" className="py-4 sm:py-10 my-10 bg-white">
      <div className="container mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium leading-normal">
            School Events{" "}
            <span className="relative inline-block">
              & Activities
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[80%] left-12 -bottom-4 sm:-bottom-6"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Our vibrant campus life is enriched by diverse events and
            activities that foster holistic development, teamwork, and
            creative expression.
          </p>
        </div>

        {/* 🖼️ Featured Events Carousel (Images) */}
        <div className="bg-white pb-6 lg:pb-8">
          {featuredEvents.length > 0 && (
            <div className="relative mx-auto">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative h-96 md:h-125">
                  <video
                    key={featuredEvents[currentFeaturedEvent]?._id}
                    src={featuredEvents[currentFeaturedEvent]?.video.asset.url}
                    className="w-full h-full object-cover rounded-2xl"
                    muted
                    autoPlay
                    loop
                    playsInline
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent rounded-2xl"></div>

                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="flex items-center gap-2 mb-2 md:mb-5">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm font-inter font-medium">
                        Featured Event
                      </span>
                    </div>
                    <h3 className="text-lg min-[540px]:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-raleway font-semibold sm:font-bold mb-2 tracking-wide">
                      {featuredEvents[currentFeaturedEvent]?.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg opacity-90 sm:mb-4 font-inter">
                      {featuredEvents[currentFeaturedEvent]?.description}
                    </p>
                    <div className="hidden md:flex items-center gap-4 text-base font-inter">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredEvents[currentFeaturedEvent]?.date}</span>
                      </div>
                      <div className="hidden md:flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{featuredEvents[currentFeaturedEvent]?.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <button
                onClick={handlePrevFeatured}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300 cursor-pointer"
              >
                <ChevronLeft className="w-4.5 h-4.5 md:w-6 md:h-6" />
              </button>

              <button
                onClick={handleNextFeatured}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300 cursor-pointer"
              >
                <ChevronRight className="w-4.5 h-4.5 md:w-6 md:h-6" />
              </button>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-4 md:mt-6">
                {featuredEvents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeaturedEvent(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${currentFeaturedEvent === index
                      ? "bg-primarydark scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                      }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 🎥 Other Events (Videos) */}
        <section className="mx-auto lg:pt-20 pb-8 sm:pb-12 lg:pb-20 bg-no-repeat bg-cover bg-center sm:bg-[url('/Svg/PaperTorn.svg')] bg-[url('/Svg/PaperTornM.svg')]">
          <div className="mt-10 xl:mt-16 space-y-16">
            {paginatedEvents.map((event, index) => {
              const actualIndex = (currentPage - 1) * eventsPerPage + index
              const videoId = event._id
              return (
                <div
                  key={event._id}
                  className={`flex flex-col lg:flex-row ${actualIndex % 2 === 1 ? "lg:flex-row-reverse" : ""
                    } gap-6 sm:gap-8 lg:gap-12 items-stretch relative`}
                >
                  {/* Video Section */}
                  <div
                    className="relative w-full lg:w-1/2 rounded-xl shadow-md overflow-hidden cursor-pointer"
                    onClick={() => handlePlayVideo(videoId)}
                  >
                    <video
                      ref={(el) => {
                        videoRefs.current[videoId] = el;
                      }}
                      src={event.video.asset.url}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {!activeVideo || activeVideo !== videoId ? (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="w-12 h-12 lg:w-16 lg:h-16 text-white opacity-90" />
                      </div>
                    ) : null}
                  </div>

                  {/* Text Section */}
                  <div
                    className={`w-full lg:w-1/2 rounded-xl shadow-md flex flex-col justify-center border-15 border-white ${bgColors[index % bgColors.length]}`}
                  >
                    <div className="p-6 sm:p-8 md:p-10">
                      <h3 className="text-2xl sm:text-3xl font-raleway font-bold text-gray-900 mb-4 tracking-wide">
                        {event.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 mb-4 font-inter">
                        {event.description}
                      </p>

                      <div className="text-base text-gray-700 space-y-2 font-inter">
                        <p>
                          <Calendar className="inline w-5 h-5 mr-1" /> {event.date}
                        </p>
                        <p>
                          <MapPin className="inline w-5 h-5 mr-1" /> {event.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 md:mt-16 space-x-2 md:space-x-3 xl:space-x-5 text-base sm:text-lg">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-60 cursor-pointer"
              >
                Previous
              </button>

              <div className="flex gap-3 md:gap-4 flex-wrap justify-center">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-5 py-2.5 rounded-full font-medium cursor-pointer ${currentPage === i + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-60 cursor-pointer"
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>
    </section>
  )
}