import React, { useState, useEffect } from "react"
import {
  CalendarDays,
  Award,
  Newspaper,
  Clock,
  ArrowRight,
} from "lucide-react"

const upcomingEvents = [
  {
    title: "Summer Camp 2025",
    date: "June 5–15, 2025",
    location: "MCS Campus Grounds",
    desc: "A fun-filled learning experience featuring art, robotics, and sports workshops for all grades.",
    icon: Award,
  },
  {
    title: "Parent-Teacher Meet (Term 1)",
    date: "July 12, 2025",
    location: "Main Auditorium",
    desc: "An open dialogue between teachers and parents to review student progress and academic goals.",
    icon: CalendarDays,
  },
  {
    title: "Independence Day Celebration",
    date: "August 15, 2025",
    location: "School Grounds",
    desc: "Students will perform plays, dances, and songs to commemorate India’s independence.",
    icon: Newspaper,
  },
  {
    title: "Independence Day Celebration",
    date: "August 15, 2025",
    location: "School Grounds",
    desc: "Students will perform plays, dances, and songs to commemorate India’s independence.",
    icon: Newspaper,
  },
  {
    title: "Independence Day Celebration",
    date: "August 15, 2025",
    location: "School Grounds",
    desc: "Students will perform plays, dances, and songs to commemorate India’s independence.",
    icon: Newspaper,
  },
]

type NewsItem = {
  title: string
  description: string
  date: string
  image: string
  slug: string
}

const NewsEvents = ({ news }: { news: NewsItem[] }) => {

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
    <section className="pb-10 sm:pb-16 py-10 my-10 bg-white">

      {/* HERO */}
      <div className="text-center mb-10 sm:mb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
          Campus Stories & {" "}
          <span className="relative inline-block">
            Highlights
            {/* Spark Doodle */}
            <img
              src="/Images/Doodles/SparkPurple.png"
              alt="Spark"
              className="absolute w-10 sm:w-12 md:w-14 -top-8 -right-16"
            />
          </span>
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
          Catch up on the highlights, triumphs, and everyday magic that make our school truly special. Celebrating the people, passions, and progress that define life at MCS.
        </p>
      </div>

      {/* UPCOMING EVENTS – Warm Glowy Horizontal Scroll */}
      <div className="relative pb-20 px-6 sm:px-10 lg:px-20">
        <h2 className="text-2xl font-poppins font-semibold mb-12 text-gray-900">
          Upcoming Events
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar scrollbar-hide pb-4">
          {[
            {
              date: "June 5–15, 2025",
              title: "Summer Camp 2025",
              desc: "A creative summer learning retreat featuring robotics, painting, theatre, and adventure sports.",
              location: "MCS Campus Grounds",
            },
            {
              date: "July 12, 2025",
              title: "Parent-Teacher Meet (Term 1)",
              desc: "Our annual PTM fostering open dialogue and collaboration between parents and educators.",
              location: "Main Auditorium",
            },
            {
              date: "August 15, 2025",
              title: "Independence Day Celebration",
              desc: "A vibrant morning of flag hoisting, cultural performances, and heartfelt tributes to our nation.",
              location: "School Grounds",
            },
            {
              date: "September 10–12, 2025",
              title: "Art & Innovation Fair",
              desc: "A 3-day exhibition where creativity meets curiosity — from student inventions to fine art displays.",
              location: "Multipurpose Hall",
            },
          ].map((event, idx) => {
            const month = event.date.match(/[A-Za-z]+/g)?.[0] ?? "Month"
            const day = event.date.match(/\d+/)?.[0] ?? ""
            const year = event.date.match(/\d{4}/)?.[0] ?? ""

            return (
              <div
                key={idx}
                className="relative flex flex-col sm:flex-row min-w-85 sm:min-w-115 md:min-w-125 lg:min-w-140 bg-white border border-gray-100 rounded-3xl overflow-hidden  transition-all duration-500"
              >
                {/* Left Date Section */}
                <div className="sm:w-1/3 bg-linear-to-br from-yellow-50 to-amber-100 flex flex-col justify-center items-center p-6 sm:p-8 text-center border-b sm:border-b-0 sm:border-r border-amber-200 relative">
                  <div className="absolute inset-0 bg-yellow-200/20 blur-3xl opacity-30"></div>
                  <p className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-1">
                    {month}
                  </p>
                  <p className="text-3xl font-poppins font-bold text-gray-900 leading-tight">{day}</p>
                  <p className="text-sm text-gray-700 font-inter mt-1">{year}</p>
                </div>

                {/* Right Details Section */}
                <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 relative">
                  {/* Soft Glow on Hover */}
                  <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-yellow-100 via-white to-transparent opacity-0 hover:opacity-100 transition-all duration-500"></div>

                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins tracking-wide">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 font-inter">
                      {event.desc}
                    </p>
                  </div>

                  <div className="mt-auto relative z-10">
                    <p className="text-sm font-medium text-amber-700 flex items-center gap-1">
                      📍 {event.location}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Fading edges for soft scroll finish */}
        <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-white to-transparent pointer-events-none"></div>
      </div>



      {/* FEATURED SLIDER */}
      <div className="relative overflow-hidden">
        <div
          className="w-full h-125 relative transition-all duration-1000 ease-in-out"
          key={featuredNews[activeIndex].slug}
        >
          <img
            src={featuredNews[activeIndex].image}
            alt={featuredNews[activeIndex].title}
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/40 to-transparent"></div>
          <div className="absolute bottom-12 left-10 sm:left-20 max-w-2xl text-white">
            <h2 className="text-2xl sm:text-3xl font-semibold font-poppins mb-2">
              {featuredNews[activeIndex].title}
            </h2>
            <p className="text-sm text-gray-300 mb-3">
              {featuredNews[activeIndex].date}
            </p>
            <p className="text-gray-100 leading-relaxed mb-5">
              {featuredNews[activeIndex].description}
            </p>
            <a
              href={`/news/${featuredNews[activeIndex].slug}`}
              className="inline-flex items-center gap-2 bg-white text-blue-900 font-medium px-5 py-2.5 rounded-full hover:bg-blue-50 transition-all"
            >
              Read More <ArrowRight size={18} />
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
      <div className="max-w-7xl mx-auto px-6 my-20 sm:px-10 lg:px-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentNews.map((item) => (
            <div
              key={item.slug}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <p className="text-xs text-sky-600 font-medium mb-1">
                  {item.date}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {item.description}
                </p>
                <a
                  href={`/news/${item.slug}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`w-9 h-9 rounded-full text-sm font-medium transition-all ${currentPage === idx + 1
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








// "use client"

// import { useState } from "react"
// import {
//   ChevronRight,
//   ChevronLeft,
// } from "lucide-react"

// type EventType = {
//   id: number
//   title: string
//   date: string
//   time: string
//   location: string
//   category: string
//   description: string
//   audience: string
//   image?: string
// }

// const eventsData: EventType[] = [
//   {
//     id: 1,
//     title: "Annual Sports Day",
//     date: "2025-06-10",
//     time: "9:00 AM - 4:00 PM",
//     location: "School Sports Ground",
//     category: "Sports",
//     description: "Annual inter-house sports competition featuring track and field events, team sports, and individual competitions.",
//     audience: "All students and parents",
//   },
//   {
//     id: 2,
//     title: "Science Exhibition",
//     date: "2025-06-15",
//     time: "10:00 AM - 3:00 PM",
//     location: "School Auditorium",
//     category: "Academic",
//     description: "Students showcase their science projects and innovations. Open to all parents and visitors.",
//     audience: "All grades",
//   },
//   {
//     id: 3,
//     title: "Orientation Day",
//     date: "2025-06-03",
//     time: "8:00 AM - 11:00 AM",
//     location: "Main Hall",
//     category: "Administrative",
//     description: "Orientation for new students and parents.",
//     audience: "Grade I",
//   },
//   {
//     id: 4,
//     title: "Cultural Fest",
//     date: "2025-06-20",
//     time: "11:00 AM - 5:00 PM",
//     location: "Open Stage",
//     category: "Cultural",
//     description: "Celebrate the diversity of our student body with music, dance, and food.",
//     audience: "All students",
//   },
//   {
//     id: 5,
//     title: "Parent-Teacher Meeting",
//     date: "2025-06-27",
//     time: "9:00 AM - 1:00 PM",
//     location: "Respective Classrooms",
//     category: "Administrative",
//     description: "Regular interaction between parents and teachers for student progress.",
//     audience: "All parents",
//   },
//   {
//     id: 6,
//     title: "Math Olympiad",
//     date: "2025-06-30",
//     time: "10:00 AM - 1:00 PM",
//     location: "Math Lab",
//     category: "Academic",
//     description: "A national level competitive mathematics exam.",
//     audience: "Grades VI–X",
//   },
// ]

// // Calendar View
// const CalendarView: React.FC<{
//   events: EventType[]
//   activeFilter: string
//   onEventClick: (event: EventType) => void
// }> = ({ events, activeFilter, onEventClick }) => {
//   const [currentMonth, setCurrentMonth] = useState(new Date())

//   const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()
//   const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

//   const days: (number | null)[] = []
//   for (let i = 0; i < firstDayOfMonth; i++) days.push(null)
//   for (let i = 1; i <= daysInMonth; i++) days.push(i)

//   const monthEvents = events.filter((event) => {
//     const eventDate = new Date(event.date)
//     return (
//       eventDate.getMonth() === currentMonth.getMonth() &&
//       eventDate.getFullYear() === currentMonth.getFullYear() &&
//       (activeFilter === "All" || event.category === activeFilter)
//     )
//   })

//   const getEventsForDay = (day: number) =>
//     monthEvents.filter((event) => new Date(event.date).getDate() === day)

//   const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
//   const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))

//   return (
//     <div className="bg-white rounded-lg shadow overflow-hidden">
//       <div className="flex items-center justify-between p-6 border-b border-gray-200">
//         <h3 className="text-xl font-semibold text-gray-900 font-inter">
//           {currentMonth.toLocaleString("default", { month: "long" })} {currentMonth.getFullYear()}
//         </h3>
//         <div className="flex space-x-2">
//           <button onClick={prevMonth} className="p-2 rounded-full hover:bg-gray-100" aria-label="Previous">
//             <ChevronLeft size={20} />
//           </button>
//           <button onClick={nextMonth} className="p-2 rounded-full hover:bg-gray-100" aria-label="Next">
//             <ChevronRight size={20} />
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-7 gap-px bg-gray-200">
//         {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//           <div key={day} className="bg-gray-50 p-2 text-center text-sm font-inter font-medium text-gray-500">
//             {day}
//           </div>
//         ))}
//         {days.map((day, idx) => {
//           const events = day ? getEventsForDay(day) : []
//           return (
//             <div key={idx} className={`bg-white p-2 h-28 ${day ? "cursor-pointer hover:bg-blue-50" : ""}`}>
//               {day && (
//                 <>
//                   <div className="text-right text-sm  text-gray-600 font-inter py-2">{day}</div>
//                   {events.slice(0, 2).map((event) => (
//                     <div
//                       key={event.id}
//                       className={`mt-1 px-2 py-1 text-sm truncate rounded font-medium font-inter ${
//                         event.category === "Sports"
//                            ? "bg-green-100 text-green-800"
//                            : event.category === "Academic"
//                            ? "bg-blue-100 text-blue-800"
//                            : event.category === "Cultural"
//                            ? "bg-purple-100 text-purple-800"
//                            : event.category === "Administrative"
//                            ? "bg-yellow-100 text-yellow-800"
//                            : "bg-gray-100 text-gray-800"
//                       }`}
//                       onClick={() => onEventClick(event)}
//                     >
//                       {event.title}
//                     </div>
//                   ))}
//                 </>
//               )}
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// // List View with Pagination
// const ListView: React.FC<{
//   events: EventType[]
//   activeFilter: string
//   onEventClick: (event: EventType) => void
// }> = ({ events, activeFilter, onEventClick }) => {
//   const [currentPage, setCurrentPage] = useState(1)
//   const EVENTS_PER_PAGE = 3

//   const filtered = events.filter((e) => activeFilter === "All" || e.category === activeFilter)
//   const totalPages = Math.ceil(filtered.length / EVENTS_PER_PAGE)
//   const paginated = filtered.slice((currentPage - 1) * EVENTS_PER_PAGE, currentPage * EVENTS_PER_PAGE)


//   return (
//     <>
//       <div className="space-y-6">
//         {paginated.map((event) => (
//           <div
//             key={event.id}
//             onClick={() => onEventClick(event)}
//             className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition cursor-pointer"
//           >
//             <div className="flex flex-wrap items-center gap-2 mb-6">
//               <span className={`text-sm px-5 py-2 font-inter rounded-full font-medium ${
//                 event.category === "Sports"
//                            ? "bg-green-100 text-green-800"
//                            : event.category === "Academic"
//                            ? "bg-blue-100 text-blue-800"
//                            : event.category === "Cultural"
//                            ? "bg-purple-100 text-purple-800"
//                            : event.category === "Administrative"
//                            ? "bg-yellow-100 text-yellow-800"
//                            : "bg-gray-100 text-gray-800"
//               }`}>
//                 {event.category}
//               </span>
//               <span className="text-sm bg-gray-100 text-gray-700 px-5 py-2 font-inter rounded-full font-medium">{event.audience}</span>
//             </div>
//             <h3 className="text-lg font-poppins tracking-wide font-semibold text-gray-900">{event.title}</h3>
//             <p className="text-md text-gray-700 font-inter mt-2"><strong>Date:</strong> {event.date}</p>
//             <p className="text-md text-gray-700 font-inter mt-2">{event.description}</p>
//           </div>
//         ))}
//       </div>

//       {totalPages > 1 && (
//         <div className="flex justify-center items-center mt-12 space-x-4">
//           <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed font-inter">Previous</button>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button key={i} onClick={() => setCurrentPage(i + 1)} className={`px-4 py-2 rounded-full cursor-pointer font-medium font-inter ${
//               currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
//             }`}>{i + 1}</button>
//           ))}
//           <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer font-inter">Next</button>
//         </div>
//       )}
//     </>
//   )
// }

// // ---------- MAIN COMPONENT ----------
// const UpcomingEvents = () => {
//   const [activeView, setActiveView] = useState<"calendar" | "list">("calendar")
//   const [activeFilter, setActiveFilter] = useState("All")
//   const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null)

//   return (
//     <section className="pb-10 sm:pb-16 my-10 bg-white" id="events">
//       <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40">
//         <div className="text-center mb-10 sm:mb-12 lg:mb-20">
//            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
//              Upcoming{" "}
//              <span className="relative inline-block">
//                Events
//                <img
//                  src="/Images/Doodles/SparkGreen.png"
//                  alt="Spark"
//                  className="absolute w-10 sm:w-12 md:w-14 -top-6 -right-15"
//                />
//              </span>
//            </h2>
//            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
//              Stay updated with all the upcoming events and activities at our school.
//            </p>
//          </div>

//         <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
//           <div>
//             <button onClick={() => setActiveView("calendar")} className={`px-4 py-2 rounded-lg text-sm font-inter font-medium ${
//               activeView === "calendar" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer"
//             }`}>Calendar View</button>
//             <button onClick={() => setActiveView("list")} className={`ml-2 px-4 py-2 rounded-lg text-sm font-medium ${
//               activeView === "list" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer"
//             }`}>List View</button>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {["All", "Academic", "Sports", "Cultural", "Administrative"].map(filter => (
//               <button key={filter} onClick={() => setActiveFilter(filter)} className={`text-sm rounded-full px-5 py-2 font-inter font-medium ${
//                 activeFilter === filter ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900 cursor-pointer"
//               }`}>{filter}</button>
//             ))}
//           </div>
//         </div>

//         {activeView === "calendar" ? (
//           <CalendarView events={eventsData} activeFilter={activeFilter} onEventClick={setSelectedEvent} />
//         ) : (
//           <ListView events={eventsData} activeFilter={activeFilter} onEventClick={setSelectedEvent} />
//         )}

//         {selectedEvent && (
//           <div className="fixed inset-0 bg-black/80 bg-opacity-50 z-50 flex items-center justify-center">
//             <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-xl relative mx-4">
//               <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-6 text-gray-600 hover:text-secondarydark cursor-pointer">✕</button>
//               <h3 className="text-2xl font-poppins font-semibold text-primarydark mb-2">{selectedEvent.title}</h3>
//               <p className="text-md text-gray-600 mb-4 font-inter">{selectedEvent.description}</p>
//               <div className="space-y-2 text-md text-gray-700 font-inter">
//                 <p><strong>Date:</strong> {selectedEvent.date}</p>
//                 <p><strong>Time:</strong> {selectedEvent.time}</p>
//                 <p><strong>Location:</strong> {selectedEvent.location}</p>
//                 <p><strong>Audience:</strong> {selectedEvent.audience}</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

// export default UpcomingEvents