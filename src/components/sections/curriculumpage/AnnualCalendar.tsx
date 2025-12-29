import { useState } from "react"
import {
  ChevronRight,
  ChevronLeft,
} from "lucide-react"

interface CalendarCMSItem {
  _id: string
  title: string
  description?: string
  category: "academic" | "sports" | "cultural" | "administrative"
  date: string
  time?: string
  location?: string
  audience?: string
}


type EventType = {
  id: number
  title: string
  date: string
  time: string
  location: string
  category: string
  description: string
  audience: string
  image?: string
}

// Calendar View
const CalendarView: React.FC<{
  events: EventType[]
  activeFilter: string
  onEventClick: (event: EventType) => void
}> = ({ events, activeFilter, onEventClick }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const days: (number | null)[] = []
  for (let i = 0; i < firstDayOfMonth; i++) days.push(null)
  for (let i = 1; i <= daysInMonth; i++) days.push(i)

  const monthEvents = events.filter((event) => {
    const eventDate = new Date(event.date)
    return (
      eventDate.getMonth() === currentMonth.getMonth() &&
      eventDate.getFullYear() === currentMonth.getFullYear() &&
      (activeFilter === "All" || event.category === activeFilter)
    )
  })

  const getEventsForDay = (day: number) =>
    monthEvents.filter((event) => new Date(event.date).getDate() === day)

  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 font-inter">
          {currentMonth.toLocaleString("default", { month: "long" })} {currentMonth.getFullYear()}
        </h3>
        <div className="flex space-x-2">
          <button onClick={prevMonth} className="p-2 rounded-full hover:bg-gray-100" aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextMonth} className="p-2 rounded-full hover:bg-gray-100" aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="bg-gray-50 p-2 text-center text-sm font-inter font-medium text-gray-500">
            {day}
          </div>
        ))}
        {days.map((day, idx) => {
          const events = day ? getEventsForDay(day) : []
          return (
            <div key={idx} className={`bg-white p-2 h-28 ${day ? "cursor-pointer hover:bg-blue-50" : ""}`}>
              {day && (
                <>
                  <div className="text-right text-sm  text-gray-600 font-inter py-2">{day}</div>
                  {events.slice(0, 2).map((event) => (
                    <div
                      key={event.id}
                      className={`mt-1 px-2 py-1 text-sm truncate rounded font-medium font-inter ${
                        event.category === "Sports"
                           ? "bg-green-100 text-green-800"
                           : event.category === "Academic"
                           ? "bg-blue-100 text-blue-800"
                           : event.category === "Cultural"
                           ? "bg-purple-100 text-purple-800"
                           : event.category === "Administrative"
                           ? "bg-yellow-100 text-yellow-800"
                           : "bg-gray-100 text-gray-800"
                      }`}
                      onClick={() => onEventClick(event)}
                    >
                      {event.title}
                    </div>
                  ))}
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// List View with Pagination
const ListView: React.FC<{
  events: EventType[]
  activeFilter: string
  onEventClick: (event: EventType) => void
}> = ({ events, activeFilter, onEventClick }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const EVENTS_PER_PAGE = 3

  const filtered = events.filter((e) => activeFilter === "All" || e.category === activeFilter)
  const totalPages = Math.ceil(filtered.length / EVENTS_PER_PAGE)
  const paginated = filtered.slice((currentPage - 1) * EVENTS_PER_PAGE, currentPage * EVENTS_PER_PAGE)


  return (
    <>
      <div className="space-y-6">
        {paginated.map((event) => (
          <div
            key={event.id}
            onClick={() => onEventClick(event)}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition cursor-pointer"
          >
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className={`text-sm px-5 py-2 font-inter rounded-full font-medium ${
                event.category === "Sports"
                           ? "bg-green-100 text-green-800"
                           : event.category === "Academic"
                           ? "bg-blue-100 text-blue-800"
                           : event.category === "Cultural"
                           ? "bg-purple-100 text-purple-800"
                           : event.category === "Administrative"
                           ? "bg-yellow-100 text-yellow-800"
                           : "bg-gray-100 text-gray-800"
              }`}>
                {event.category}
              </span>
              <span className="text-sm bg-gray-100 text-gray-700 px-5 py-2 font-inter rounded-full font-medium">{event.audience}</span>
            </div>
            <h3 className="text-lg font-poppins tracking-wide font-semibold text-gray-900">{event.title}</h3>
            <p className="text-md text-gray-700 font-inter mt-2"><strong>Date:</strong> {event.date}</p>
            <p className="text-md text-gray-700 font-inter mt-2">{event.description}</p>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 space-x-4">
          <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed font-inter">Previous</button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => setCurrentPage(i + 1)} className={`px-4 py-2 rounded-full cursor-pointer font-medium font-inter ${
              currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}>{i + 1}</button>
          ))}
          <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer font-inter">Next</button>
        </div>
      )}
    </>
  )
}

// ---------- MAIN COMPONENT ----------
const AnnualCalendar = ({ events }: { events: CalendarCMSItem[] }) => {

  const mappedEvents: EventType[] = events.map((e, index) => ({
  id: index + 1,
  title: e.title,
  date: e.date,
  time: e.time ?? "",
  location: e.location ?? "",
  category:
    e.category === "academic"
      ? "Academic"
      : e.category === "sports"
      ? "Sports"
      : e.category === "cultural"
      ? "Cultural"
      : "Administrative",
  description: e.description ?? "",
  audience: e.audience ?? "",
}));


  const [activeView, setActiveView] = useState<"calendar" | "list">("calendar")
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null)

  return (
    <section className="py-4 sm:py-10 my-10 bg-white" id="events">
      <div className="container mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
        <div className="text-center mb-8 sm:mb-16">
           <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
             Academic{" "}
             <span className="relative inline-block">
               Calendar (2025-2026)
               <img
                 src="/Images/Doodles/SparkGreen.png"
                 alt="Spark"
                 className="absolute w-10 sm:w-12 md:w-14 -top-6 -right-10 sm:-right-15"
               />
             </span>
           </h2>
           <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
             Stay updated with all the upcoming events and activities at our school.
           </p>
         </div>

        <div className="flex flex-wrap justify-center lg:justify-between items-center mb-6 gap-12">
          <div className="hidden md:flex justify-center">
            <button onClick={() => setActiveView("calendar")} className={`px-4 py-2 rounded-lg text-sm font-inter font-medium ${
              activeView === "calendar" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer"
            }`}>Calendar View</button>
            <button onClick={() => setActiveView("list")} className={`ml-2 px-4 py-2 rounded-lg text-sm font-medium ${
              activeView === "list" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer"
            }`}>List View</button>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {["All", "Academic", "Sports", "Cultural", "Administrative"].map(filter => (
              <button key={filter} onClick={() => setActiveFilter(filter)} className={`text-sm rounded-full px-5 py-2 font-inter font-medium ${
                activeFilter === filter ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900 cursor-pointer"
              }`}>{filter}</button>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
        {activeView === "calendar" ? (
          <CalendarView events={mappedEvents} activeFilter={activeFilter} onEventClick={setSelectedEvent} />
        ) : (
          <ListView events={mappedEvents} activeFilter={activeFilter} onEventClick={setSelectedEvent} />
        )}
        </div>

        <div className="block md:hidden">
        {activeView === "list" ? (
          <CalendarView events={mappedEvents} activeFilter={activeFilter} onEventClick={setSelectedEvent} />
        ) : (
          <ListView events={mappedEvents} activeFilter={activeFilter} onEventClick={setSelectedEvent} />
        )}
        </div>

        {selectedEvent && (
          <div className="fixed inset-0 bg-black/80 bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg relative mx-4">
              <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-6 text-gray-600 hover:text-secondarydark cursor-pointer">✕</button>
              <h3 className="text-xl lg:text-2xl font-poppins font-semibold text-primarydark mb-2">{selectedEvent.title}</h3>
              <p className="text-md text-gray-600 mb-4 font-inter">{selectedEvent.description}</p>
              <div className="space-y-2 text-md text-gray-700 font-inter">
                <p><strong>Date:</strong> {selectedEvent.date}</p>
                <p><strong>Time:</strong> {selectedEvent.time}</p>
                <p><strong>Location:</strong> {selectedEvent.location}</p>
                <p><strong>Audience:</strong> {selectedEvent.audience}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default AnnualCalendar