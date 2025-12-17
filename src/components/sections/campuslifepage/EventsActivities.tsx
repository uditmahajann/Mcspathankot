"use client"

import { useState, useEffect, useRef } from "react"
import {
  Calendar,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react"

interface EventMedia {
  type: "image" | "video"
  src: string
  alt?: string
}

interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  media: EventMedia[]
  featured: boolean
  tags: string[]
}

export default function EventsActivities() {
  const [currentFeaturedEvent, setCurrentFeaturedEvent] = useState<number>(0)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({})
  const bgColors = [
    "bg-purple-100/80",
    "bg-yellow-100/60",
    "bg-emerald-100/60",
    "bg-rose-100/60",
  ]

  // 🎯 Events Data
  const events: Event[] = [
    {
      id: "1",
      title: "Annual Science Fair 2024",
      description:
        "Students showcased innovative projects and experiments in our annual science exhibition.",
      date: "March 15, 2024",
      location: "Main Auditorium",
      media: [
        { type: "image", src: "/Images/Campus/NewHostel.JPG", alt: "Science Fair" },
      ],
      featured: true,
      tags: ["innovation", "STEM", "research", "competition"],
    },
    {
      id: "2",
      title: "Inter-House Sports Championship",
      description:
        "Thrilling sports competition between all four houses with various athletic events.",
      date: "February 20–22, 2024",
      location: "Sports Complex",
      media: [
        { type: "image", src: "/Images/Campus/NewHostel.JPG", alt: "Sports Championship" },
      ],
      featured: true,
      tags: ["competition", "teamwork", "athletics", "championship"],
    },
    {
      id: "3",
      title: "Cultural Fest - Kaleidoscope 2024",
      description:
        "A vibrant celebration of music, dance, and drama performances by our talented students.",
      date: "January 28, 2024",
      location: "Open Air Theatre",
      media: [
        { type: "image", src: "/Images/Campus/NewHostel.JPG", alt: "Cultural Fest" },
      ],
      featured: true,
      tags: ["culture", "performance", "arts", "diversity"],
    },
    {
      id: "4",
      title: "Independence Day Celebration 2024",
      description:
        "Students showcased their patriotism through songs, speeches, and parades celebrating India’s freedom.",
      date: "August 15, 2024",
      location: "School Ground",
      media: [
        { type: "video", src: "/Videos/Mcs2023.mp4" },
      ],
      featured: false,
      tags: ["patriotism", "celebration", "unity"],
    },
    {
      id: "5",
      title: "Book Week & Literary Fest",
      description:
        "An exciting week of debates, storytelling, and creative writing promoting reading culture among students.",
      date: "September 10–15, 2024",
      location: "Library Wing",
      media: [
        { type: "video", src: "/Videos/Mcs2023.mp4" },
      ],
      featured: false,
      tags: ["literature", "reading", "creativity"],
    },
    {
      id: "6",
      title: "Art & Craft Exhibition",
      description:
        "Students displayed creative art, crafts, and sculptures showcasing imagination and skill.",
      date: "October 5, 2024",
      location: "Activity Hall",
      media: [
        { type: "video", src: "/Videos/Mcs2023.mp4" },
      ],
      featured: false,
      tags: ["art", "craft", "creativity", "design"],
    },
    // {
    //   id: "7",
    //   title: "Art & Craft Exhibition",
    //   description:
    //     "Students displayed creative art, crafts, and sculptures showcasing imagination and skill.",
    //   date: "October 5, 2024",
    //   location: "Activity Hall",
    //   media: [
    //     { type: "video", src: "/Videos/Mcs2023.mp4" },
    //   ],
    //   featured: false,
    //   tags: ["art", "craft", "creativity", "design"],
    // },
  ]

  // 🎯 Split Featured & Non-featured
  const featuredEvents = events.filter((event) => event.featured).slice(0, 3)
  const otherEvents = events.filter((event) => !event.featured)

  // 🎯 Auto-rotate featured images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeaturedEvent((prev) => (prev + 1) % featuredEvents.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [featuredEvents.length])

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
    <section id="events-activities" className="py-10 my-10 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            School Events{" "}
            <span className="relative inline-block">
              & Activities
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[80%] left-12 -bottom-4 sm:-bottom-6 md:-bottom-8"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
            Our vibrant campus life is enriched by diverse events and
            activities that foster holistic development, teamwork, and
            creative expression.
          </p>
        </div>

        {/* 🖼️ Featured Events Carousel (Images) */}
        <div className="bg-white px-5 sm:px-16 xl:px-40 pb-20">
          {featuredEvents.length > 0 && (
            <div className="relative mx-auto">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative h-96 md:h-[500px]">
                  <img
                    src={featuredEvents[currentFeaturedEvent]?.media[0]?.src}
                    alt={featuredEvents[currentFeaturedEvent]?.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent rounded-2xl"></div>

                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="flex items-center gap-2 mb-5">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm font-inter font-medium">
                        Featured Event
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-raleway font-bold mb-2">
                      {featuredEvents[currentFeaturedEvent]?.title}
                    </h3>
                    <p className="text-lg opacity-90 mb-4 font-inter">
                      {featuredEvents[currentFeaturedEvent]?.description}
                    </p>
                    <div className="flex items-center gap-4 text-base font-inter">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredEvents[currentFeaturedEvent]?.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{featuredEvents[currentFeaturedEvent]?.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <button
                onClick={() =>
                  setCurrentFeaturedEvent(
                    (prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() =>
                  setCurrentFeaturedEvent((prev) => (prev + 1) % featuredEvents.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {featuredEvents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeaturedEvent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentFeaturedEvent === index
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
        <section className="px-5 sm:px-16 xl:px-40 pt-20 pb-40 bg-no-repeat bg-cover bg-center sm:bg-[url('/Svg/PaperTorn.svg')] bg-[url('/Svg/PaperTornM.svg')]">
          <div className="mt-16 space-y-16">
            {paginatedEvents.map((event, index) => {
              const actualIndex = (currentPage - 1) * eventsPerPage + index
              const videoId = event.id
              return (
                <div
                  key={event.id}
                  className={`flex flex-col md:flex-row ${
                    actualIndex % 2 === 1 ? "md:flex-row-reverse" : ""
                  } gap-12 items-stretch relative`}
                >
                  {/* Video Section */}
                  <div
                    className="relative w-full md:w-1/2 rounded-xl shadow-md overflow-hidden cursor-pointer"
                    onClick={() => handlePlayVideo(videoId)}
                  >
                    <video
                      ref={(el) => (videoRefs.current[videoId] = el)}
                      src={event.media[0].src}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    {!activeVideo || activeVideo !== videoId ? (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="w-16 h-16 text-white opacity-90" />
                      </div>
                    ) : null}
                  </div>

                  {/* Text Section */}
                  <div
                    className={`w-full md:w-1/2 rounded-xl shadow-md flex flex-col justify-center border-15 border-white ${bgColors[index % bgColors.length]}`}
                  >
                    <div className="p-10">
                      <h3 className="text-3xl font-raleway font-bold text-gray-900 mb-4 tracking-wide">
                        {event.title}
                      </h3>
                      <p className="text-lg text-gray-700 mb-4 font-inter">
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

                      {/* <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-white text-primary px-4 py-2 text-sm rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div> */}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-16 space-x-5 text-lg">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-60 cursor-pointer"
              >
                Previous
              </button>

              <div className="flex gap-4 flex-wrap justify-center">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-5 py-2.5 rounded-full font-medium cursor-pointer ${
                      currentPage === i + 1
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







// "use client"

// import type React from "react"
// import { useState, useRef, useEffect } from "react"
// import {
//     Calendar,
//     Users,
//     MapPin,
//     Star,
//     ChevronLeft,
//     ChevronRight
// } from "lucide-react"

// interface EventMedia {
//     type: "image" | "video"
//     src: string
//     alt?: string
//     thumbnail?: string
//     views?: number
//     likes?: number
// }

// interface Event {
//     id: string
//     title: string
//     description: string
//     date: string
//     location: string
//     media: EventMedia[]
//     featured: boolean
//     tags: string[]
// }


// export default function EventsActivities() {
//     const [currentFeaturedEvent, setCurrentFeaturedEvent] = useState<number>(0)
//     const bgColors = ["bg-purple-100/80", "bg-yellow-100/60", "bg-emerald-100/60", "bg-rose-100/60"]


//     const events: Event[] = [
//         {
//             id: "1",
//             title: "Annual Science Fair 2024",
//             description: "Students showcased innovative projects and experiments in our annual science exhibition.",
//             date: "March 15, 2024",
//             location: "Main Auditorium",
//             media: [
//                 { type: "video", src: "/Videos/Mcs2023.mp4", thumbnail: "/Images/Campus/NewHostel.JPG", views: 850, likes: 67 },
//                 { type: "image", src: "/Images/Campus/NewHostel.JPG", alt: "Basketball match", views: 950, likes: 56 },
//             ],
//             featured: true,
//             tags: ["innovation", "STEM", "research", "competition"],
//         },
//         {
//             id: "2",
//             title: "Inter-House Sports Championship",
//             description: "Thrilling sports competition between all four houses with various athletic events.",
//             date: "February 20-22, 2024",
//             location: "Sports Complex",
//             media: [
//                 { type: "video", src: "/Videos/Mcs2023.mp4", thumbnail: "/Images/Campus/NewHostel.JPG", views: 850, likes: 67 },
//                 { type: "image", src: "/Images/Campus/NewHostel.JPG", alt: "Basketball match", views: 950, likes: 56 },
//             ],
//             featured: true,
//             tags: ["competition", "teamwork", "athletics", "championship"],
//         },
//         {
//             id: "3",
//             title: "Cultural Fest - Kaleidoscope 2024",
//             description: "A vibrant celebration of music, dance, and drama performances by our talented students.",
//             date: "January 28, 2024",
//             location: "Open Air Theatre",
//             media: [
//                 { type: "video", src: "/Videos/Mcs2023.mp4", thumbnail: "/Images/Campus/NewHostel.JPG", views: 850, likes: 67 },
//                 { type: "image", src: "/Images/Campus/NewHostel.JPG", alt: "Basketball match", views: 950, likes: 56 },
//             ],
//             featured: true,
//             tags: ["culture", "performance", "arts", "diversity"],
//         },
//         {
//             id: "4",
//             title: "Cultural Fest - Kaleidoscope 2024",
//             description: "A vibrant celebration of music, dance, and drama performances by our talented students.",
//             date: "January 28, 2024",
//             location: "Open Air Theatre",
//             media: [
//                 { type: "video", src: "/Videos/Mcs2023.mp4", thumbnail: "/Images/Campus/NewHostel.JPG", views: 850, likes: 67 },
//                 { type: "image", src: "/Images/Campus/NewHostel.JPG", alt: "Basketball match", views: 950, likes: 56 },
//             ],
//             featured: false,
//             tags: ["culture", "performance", "arts", "diversity"],
//         },
//         // {
//         //     id: "5",
//         //     title: "Cultural Fest - Kaleidoscope 2024",
//         //     description: "A vibrant celebration of music, dance, and drama performances by our talented students.",
//         //     date: "January 28, 2024",
//         //     location: "Open Air Theatre",
//         //     media: [
//         //         { type: "video", src: "/Videos/Mcs2023.mp4", thumbnail: "/Images/Campus/NewHostel.JPG", views: 850, likes: 67 },
//         //         { type: "image", src: "/Images/Campus/NewHostel.JPG", alt: "Basketball match", views: 950, likes: 56 },
//         //     ],
//         //     featured: false,
//         //     tags: ["culture", "performance", "arts", "diversity"],
//         // },
//         // {
//         //     id: "6",
//         //     title: "Cultural Fest - Kaleidoscope 2024",
//         //     description: "A vibrant celebration of music, dance, and drama performances by our talented students.",
//         //     date: "January 28, 2024",
//         //     location: "Open Air Theatre",
//         //     media: [
//         //         { type: "video", src: "/Videos/Mcs2023.mp4", thumbnail: "/Images/Campus/NewHostel.JPG", views: 850, likes: 67 },
//         //         { type: "image", src: "/Images/Campus/NewHostel.JPG", alt: "Basketball match", views: 950, likes: 56 },
//         //     ],
//         //     featured: false,
//         //     tags: ["culture", "performance", "arts", "diversity"],
//         // },
//         // {
//         //     id: "7",
//         //     title: "Cultural Fest - Kaleidoscope 2024",
//         //     description: "A vibrant celebration of music, dance, and drama performances by our talented students.",
//         //     date: "January 28, 2024",
//         //     location: "Open Air Theatre",
//         //     media: [
//         //         { type: "video", src: "/Videos/Mcs2023.mp4", thumbnail: "/Images/Campus/NewHostel.JPG", views: 850, likes: 67 },
//         //         { type: "image", src: "/Images/Campus/NewHostel.JPG", alt: "Basketball match", views: 950, likes: 56 },
//         //     ],
//         //     featured: false,
//         //     tags: ["culture", "performance", "arts", "diversity"],
//         // },
//         // Add more events...
//     ]


//     const featuredEvents = events.filter((event) => event.featured)


//     // Auto-rotate featured events
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentFeaturedEvent((prev) => (prev + 1) % featuredEvents.length)
//         }, 5000)
//         return () => clearInterval(interval)
//     }, [featuredEvents.length])

//     const eventsPerPage = 3
//     const [currentPage, setCurrentPage] = useState(1)

//     const totalPages = Math.ceil(events.length / eventsPerPage)

//     const paginatedEvents = events.slice(
//         (currentPage - 1) * eventsPerPage,
//         currentPage * eventsPerPage
//     )

//     const handleNextPage = () => {
//         if (currentPage < totalPages) setCurrentPage(currentPage + 1)
//     }

//     const handlePrevPage = () => {
//         if (currentPage > 1) setCurrentPage(currentPage - 1)
//     }

//     return (
//         <section id="events-activities" className="py-10 my-10 bg-white">
//             <div className="container mx-auto">
//                 <div className="text-center mb-10 sm:mb-16">
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
//                         School Events <span className="relative inline-block">& Activities
//                             <img
//                                 src="/Images/Doodles/LineYellow.png"
//                                 alt="Underline"
//                                 className="absolute w-[80%] left-12 -bottom-4 sm:-bottom-6 md:-bottom-8"
//                             />
//                         </span>
//                     </h2>
//                     <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
//                         Our vibrant campus life is enriched by a diverse range of events and activities that foster holistic
//                         development, teamwork, and creative expression.
//                     </p>
//                 </div>

//                 {/* Featured Events Carousel */}

//                 <div className="bg-white px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40 pb-20">
//                     {featuredEvents.length > 0 && (
//                         <div className="relative mx-auto">
//                             <div className="overflow-hidden rounded-2xl shadow-2xl">
//                                 <div className="relative h-96 md:h-[500px]">

//                                     <img
//                                         src={featuredEvents[currentFeaturedEvent]?.media[1]?.src || "/Images/Campus/NewHostel.JPG"}
//                                         alt={featuredEvents[currentFeaturedEvent]?.title}
//                                         className="w-full h-full object-cover"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

//                                     <div className="absolute bottom-8 left-8 right-8 text-white">
//                                         <div className="flex items-center gap-2 mb-2">
//                                             <Star className="w-5 h-5 text-yellow-500" />
//                                             <span className="text-sm font-inter font-medium">Featured Event</span>
//                                         </div>
//                                         <h3 className="text-3xl md:text-4xl font-outfit font-bold mb-2">
//                                             {featuredEvents[currentFeaturedEvent]?.title}
//                                         </h3>
//                                         <p className="text-lg opacity-90 mb-4 font-inter">{featuredEvents[currentFeaturedEvent]?.description}</p>

//                                         <div className="flex items-center gap-4 text-sm font-inter">
//                                             <div className="flex items-center gap-1">
//                                                 <Calendar className="w-4 h-4" />
//                                                 <span>{featuredEvents[currentFeaturedEvent]?.date}</span>
//                                             </div>
//                                             {/* <div className="flex items-center gap-1">
//                                                 <Users className="w-4 h-4" />
//                                                 <span>{featuredEvents[currentFeaturedEvent]?.participants} participants</span>
//                                             </div> */}
//                                             <div className="flex items-center gap-1">
//                                                 <MapPin className="w-4 h-4" />
//                                                 <span>{featuredEvents[currentFeaturedEvent]?.location}</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Navigation */}
//                             <button
//                                 onClick={() =>
//                                     setCurrentFeaturedEvent((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length)
//                                 }
//                                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 cursor-pointer"
//                             >
//                                 <ChevronLeft className="w-6 h-6" />
//                             </button>
//                             <button
//                                 onClick={() => setCurrentFeaturedEvent((prev) => (prev + 1) % featuredEvents.length)}
//                                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 cursor-pointer"
//                             >
//                                 <ChevronRight className="w-6 h-6" />
//                             </button>

//                             {/* Indicators */}
//                             <div className="flex justify-center gap-2 mt-6 ">
//                                 {featuredEvents.map((_, index) => (
//                                     <button
//                                         key={index}
//                                         onClick={() => setCurrentFeaturedEvent(index)}
//                                         className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${currentFeaturedEvent === index ? "bg-primarydark scale-110" : "bg-gray-300 hover:bg-gray-400"
//                                             }`}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Additional Events Section with Separate Torn Paper Containers */}

//                 <section
//                     className="h-full px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40 pt-25 pb-45 bg-no-repeat bg-cover bg-center sm:bg-[url('/Svg/PaperTorn.svg')] bg-[url('/Svg/PaperTornM.svg')]"
//                 >
//                     <div className="mt-16 space-y-16">
//                         {paginatedEvents.map((event, index) => {
//                             const actualIndex = (currentPage - 1) * eventsPerPage + index
//                             return (
//                                 <div
//                                     key={event.id}
//                                     className={`flex flex-col md:flex-row ${actualIndex % 2 === 1 ? "md:flex-row-reverse" : ""} gap-12 items-stretch relative`}
//                                 >

//                                     {/* Media Container */}
//                                     <div
//                                         className="w-full md:w-1/2 border-15 border-white rounded-xl shadow-md flex justify-center items-center"
//                                     >
//                                         <div className="w-full h-80 overflow-hidden rounded-lg">
//                                             {event.media[0].type === "video" ? (
//                                                 <video
//                                                     src={event.media[0].src}
//                                                     poster={event.media[0].thumbnail}
//                                                     controls
//                                                     className="w-full h-full object-cover rounded-lg"
//                                                 />
//                                             ) : (
//                                                 <img
//                                                     src={event.media[0].src}
//                                                     alt={event.media[0].alt}
//                                                     className="w-full h-full object-cover rounded-lg"
//                                                 />
//                                             )}
//                                         </div>
//                                     </div>

//                                     {/* Text Content Container */}
//                                     <div
//                                         className={`w-full md:w-1/2 border-15 border-white rounded-xl shadow-md flex flex-col justify-center ${bgColors[index % bgColors.length]}`}
//                                     >
//                                         <div className="h-full rounded-xl p-10 items-center">
//                                             <h3 className="text-3xl font-playpen font-bold text-gray-900 mb-4 tracking-wide">{event.title}</h3>
//                                             <p className="text-gray-700 mb-4 font-inter">{event.description}</p>

//                                             <div className="text-base text-gray-700 space-y-1 mb-4 font-inter">
//                                                 <p><Calendar className="inline w-5 h-5 mr-1" /> {event.date}</p>
//                                                 <p><MapPin className="inline w-5 h-5 mr-1" /> {event.location}</p>
//                                                 {/* <p><Users className="inline w-4 h-4 mr-1" /> {event.participants} Participants</p> */}
//                                             </div>

//                                             <div className="flex flex-wrap gap-2">
//                                                 {event.tags.map((tag, i) => (
//                                                     <span
//                                                         key={i}
//                                                         className="bg-white text-primary px-4 py-2 text-sm rounded-full font-medium"
//                                                     >
//                                                         {tag}
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Hand Image (optional) */}

//                                     {/* {index % 2 === 0 ? (
//                                     <img
//                                         src="/Svg/Hand.svg"
//                                         alt="Decorative Hand"
//                                         className="absolute -bottom-10 left-[-30px] w-28 hidden md:block pointer-events-none"
//                                     />
//                                 ) : (
//                                     <img
//                                         src="/Svg/Hand.svg"
//                                         alt="Decorative Hand"
//                                         className="absolute -bottom-10 right-[-30px] w-28 hidden md:block pointer-events-none"
//                                     />
//                                 )} */}
//                                     {/* <img
//                                     src="/Svg/Hand.svg"
//                                     alt="Decorative Hand"
//                                     className="absolute -bottom-10 left-[-30px] w-28 hidden md:block pointer-events-none"
//                                 /> */}
//                                 </div>
//                             )
//                         })}
//                     </div>
//                     {totalPages > 1 && (
//                         <div className="flex justify-center items-center mt-16 space-x-4">
//                             <button
//                                 onClick={handlePrevPage}
//                                 disabled={currentPage === 1}
//                                 className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed font-inter"
//                             >
//                                 Previous
//                             </button>
//                             {/* Page Numbers */}
//                             <div className="flex gap-2 flex-wrap justify-center">
//                                 {Array.from({ length: totalPages }, (_, i) => (
//                                     <button
//                                         key={i + 1}
//                                         onClick={() => setCurrentPage(i + 1)}
//                                         className={`px-4 py-2 rounded-full cursor-pointer font-medium font-inter ${currentPage === i + 1
//                                                 ? "bg-blue-600 text-white"
//                                                 : "bg-gray-200 hover:bg-gray-300"
//                                             }`}
//                                     >
//                                         {i + 1}
//                                     </button>
//                                 ))}
//                             </div>


//                             <button
//                                 onClick={handleNextPage}
//                                 disabled={currentPage === totalPages}
//                                 className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer font-inter"
//                             >
//                                 Next
//                             </button>

//                         </div>
//                     )}


//                 </section>

//             </div>
//         </section>
//     )
// }
