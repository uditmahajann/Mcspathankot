import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

type CalendarEvent = {
  title: string
  description?: string
  date: string
  location?: string
  audience?: string
}

type NewsItem = {
  title: string
  description: string
  date: string
  image: string
  slug: string
}

const NewsEvents = ({
  news,
  events,
}: {
  news: NewsItem[]
  events: CalendarEvent[]
}) => {

  const getDateParts = (dateStr: string) => {
  const date = new Date(dateStr)

  return {
    month: date.toLocaleString("en-US", { month: "long" }),
    day: date.getDate(),
    year: date.getFullYear(),
  }
}

  const FEATURED_COUNT = 3

  const featuredNews = news.slice(0, FEATURED_COUNT)
  const remainingNews = news.slice(FEATURED_COUNT)

  const [activeIndex, setActiveIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const newsPerPage = 6

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredNews.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const indexOfLast = currentPage * newsPerPage
  const indexOfFirst = indexOfLast - newsPerPage
  const currentNews = remainingNews.slice(indexOfFirst, indexOfLast)
  const totalPages = Math.ceil(remainingNews.length / newsPerPage)

  return (
    <section className="relative bg-white py-4 sm:py-10 my-10">

      {/* HERO */}
      <div className="mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="text-center mb-20">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Campus News & {" "}
            <span className="relative inline-block">
              Highlights
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkPurple.png"
                alt="Spark"
                className="absolute w-8 sm:w-12 -top-6 -right-8 sm:-right-12"
              />
            </span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Catch up on the highlights, triumphs, and everyday magic that make our school truly special. Celebrating the people, passions, and progress that define life at MCS.
          </p>
        </div>
      </div>

      {/* UPCOMING EVENTS – Warm Glowy Horizontal Scroll */}
      <div className="relative mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 xl:px-0">
        <h2 className="text-xl sm:text-2xl font-poppins font-semibold mb-8 text-gray-900">
          Upcoming Events
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-5 sm:gap-6 lg:gap-8 overflow-x-auto scroll-smooth no-scrollbar scrollbar-hide pb-4">
          {events.map((event, idx) => {
            const { month, day, year } = getDateParts(event.date)
            return (
              <div
                key={idx}
                className="relative flex flex-col sm:flex-row min-w-65 min-[540px]:min-w-75 sm:min-w-125 md:min-w-130 xl:min-w-140 bg-white border border-gray-100 rounded-3xl overflow-hidden  transition-all duration-500"
              >
                {/* Left Date Section */}
                <div className="sm:w-1/3 font-inter bg-linear-to-br from-yellow-50 to-yellow-100 flex flex-col justify-center items-center p-6 text-center border-b sm:border-b-0 sm:border-r border-amber-200 relative">
                  <div className="absolute inset-0 bg-yellow-200/20 blur-3xl opacity-30"></div>
                  <p className="text-base font-semibold text-amber-800 uppercase tracking-wide mb-1">
                    {month}
                  </p>
                  <p className="text-5xl font-bold text-gray-900 leading-tight">{day}</p>
                  <p className="text-base font-medium text-gray-700 mt-1">{year}</p>
                </div>

                {/* Right Details Section */}
                <div className="flex-1 flex flex-col justify-between p-6 lg:p-7 relative">
                  {/* Soft Glow on Hover */}
                  <div className="absolute inset-0 bg-white"></div>

                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 font-poppins tracking-wide line-clamp-1">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-2 text-sm sm:text-base font-inter line-clamp-3">
                      {event.description}
                    </p>
                  </div>

                  <div className="mt-auto relative z-10">
                    <p className="text-sm font-inter font-medium text-amber-700 flex items-center gap-1">
                      {event.location} - {event.audience}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>



      {/* FEATURED SLIDER */}
      <div className="relative overflow-hidden my-12 sm:my-20">
        <div
          className="w-full h-120 lg:h-135 relative transition-all duration-1000 ease-in-out"
          key={featuredNews[activeIndex].slug}
        >
          <img
            src={featuredNews[activeIndex].image}
            alt={featuredNews[activeIndex].title}
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/40 to-transparent"></div>
          <div className="absolute bottom-16 left-6 sm:left-8 md:left-12 lg:left-16 max-w-xl sm:max-w-2xl text-white">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-poppins mb-2 tracking-wide line-clamp-1">
              {featuredNews[activeIndex].title}
            </h2>
            <p className="font-inter text-sm sm:text-base text-yellow-400 mb-2">
              {new Date(featuredNews[activeIndex].date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="text-sm sm:text-base font-inter text-gray-100 leading-relaxed mb-4 line-clamp-2">
              {featuredNews[activeIndex].description}
            </p>
            <a
              href={`/news/${featuredNews[activeIndex].slug}`}
              className="group inline-flex items-center justify-center px-5 py-2.5 sm:px-8 sm:py-3 text-inter text-sm lg:text-base font-medium text-white bg-primary rounded-full transition-all duration-300 ease-in-out hover:font-semibold hover:text-white hover:bg-secondarydark hover:scale-105 active:scale-95 shadow-md cursor-pointer"
            >
              Read More <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          {featuredNews.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full cursor-pointer transition-all ${i === activeIndex ? "bg-white w-6" : "bg-gray-400"
                }`}
              onClick={() => setActiveIndex(i)}
            ></div>
          ))}
        </div>
      </div>


      {/* ALL NEWS SECTION */}
      <div className="mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 xl:px-0">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8">
          {currentNews.map((item) => (
            <div
              key={item.slug}
              className="bg-white transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 lg:h-72 object-cover rounded-2xl"
              />
              <div className="p-2">
                <p className="font-inter text-sm lg:text-base text-blue-800 font-semibold my-2 sm:my-3">
                  {new Date(item.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <h3 className="text-lg lg:text-xl font-poppins font-semibold text-gray-900 mb-2 line-clamp-2 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-inter text-sm lg:text-base line-clamp-3 mb-2">
                  {item.description}
                </p>
                <a
                  href={`/news/${item.slug}`}
                  className="text-primary hover:text-secondarydark font-inter text-sm lg:text-base font-medium flex items-center gap-1 underline"
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`w-12 h-12 rounded-full font-inter text-base font-medium transition-all ${currentPage === idx + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsEvents