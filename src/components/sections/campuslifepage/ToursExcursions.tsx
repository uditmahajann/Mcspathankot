"use client"

import React, { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Tour {
  id: number
  title: string
  description: string
  images: string[]
  bgColor?: string
}

const tours: Tour[] = [
  {
    id: 1,
    title: "National Science Museum, Delhi",
    description:
      "Students explored exhibits on space, robotics, and physics during this interactive learning trip.",
    images: [
      "/Images/Campus/NewHostel.JPG",
      "/Images/Campus/NewHostel.JPG",
      "/Images/Campus/NewHostel.JPG",
      "/Images/Campus/NewHostel.JPG",
    ],
    bgColor: "bg-sky-100",
  },
  {
    id: 2,
    title: "Adventure Camp, Rishikesh",
    description:
      "A thrilling outdoor experience that built leadership, confidence, and teamwork through adventure sports.",
    images: [
      "/Images/Campus/NewHostel.JPG",
      "/Images/Campus/NewHostel.JPG",
      "/Images/Campus/NewHostel.JPG",
      "/Images/Campus/NewHostel.JPG",
    ],
    bgColor: "bg-purple-100",
  },
  {
    id: 3,
    title: "Cultural Heritage Tour – Jaipur",
    description:
      "An unforgettable journey into India’s rich history — exploring forts, palaces, and art at every turn.",
    images: [
      "/Images/Campus/NewHostel.JPG",
      "/Images/Campus/NewHostel.JPG",
      "/Images/Campus/NewHostel.JPG",
      "/Images/Campus/NewHostel.JPG",
    ],
    bgColor: "bg-yellow-100",
  },
]

const ToursExcursions = () => {
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([])

  const scroll = (index: number, direction: "left" | "right") => {
    const container = scrollRefs.current[index]
    if (!container) return
    const { scrollLeft, clientWidth } = container
    const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
    container.scrollTo({ left: scrollTo, behavior: "smooth" })
  }

  return (
    <section id="tours-excursions" className="py-12 my-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Tours &{" "}
            <span className="relative inline-block">
              Excursions
              <img
                src="/Images/Doodles/LineGreen.png"
                alt="Underline"
                className="absolute w-[90%] left-12 -bottom-4 sm:-bottom-6 md:-bottom-8"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
            Beyond the classroom — our tours and excursions bring learning to life through
            real-world exploration and shared adventure.
          </p>
        </div>

        {/* Tour Carousels */}
        <div className="space-y-15">
          {tours.map((tour, index) => (
            <div
              key={tour.id}
              className={`rounded-3xl ${tour.bgColor} py-10 lg:py-12 px-5 sm:px-12 lg:px-16 shadow-sm`}
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-poppins font-semibold text-gray-900 tracking-wide">
                    {tour.title}
                  </h3>
                  <p className="text-gray-700 font-inter mt-2 text-sm sm:text-base">
                    {tour.description}
                  </p>
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={() => scroll(index, "left")}
                  className="absolute -left-3 sm:-left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-10 cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>

                <div
                  ref={(el) => (scrollRefs.current[index] = el)}
                  className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar pb-4"
                >
                  {tour.images.map((src, i) => (
                    <div
                      key={i}
                      className="min-w-[260px] sm:min-w-[320px] md:min-w-[380px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
                    >
                      <img
                        src={src}
                        alt={`${tour.title} ${i + 1}`}
                        className="w-full h-64 sm:h-80 object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scroll(index, "right")}
                  className="absolute -right-3 sm:-right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-10 cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToursExcursions









// import { CircleCheck } from "lucide-react"

// const ToursExcursions = () => {
//   const excursions = [
//     {
//       title: "Educational Field Trips",
//       description: "Curriculum-related visits to museums, science centers, historical sites, and industries",
//       grades: "All grades",
//       frequency: "Quarterly",
//       image: "/Images/Campus/NewHostel.JPG",
//     },
//     {
//       title: "Adventure Camps",
//       description: "Outdoor adventure activities focusing on team building, survival skills, and personal growth",
//       grades: "Grades 6-12",
//       frequency: "Annual",
//       image: "/Images/Campus/NewHostel.JPG",
//     },
//     {
//       title: "International Exchange Programs",
//       description: "Cultural exchange with partner schools in different countries, providing global exposure",
//       grades: "Grades 9-12",
//       frequency: "Annual (Selected students)",
//       image: "/Images/Campus/NewHostel.JPG",
//     },
//     {
//       title: "Heritage Tours",
//       description: "Visits to cultural and historical sites to understand India's rich heritage and diversity",
//       grades: "Grades 5-12",
//       frequency: "Annual",
//       image: "/Images/Campus/NewHostel.JPG",
//     },
//     {
//       title: "Heritage Tours",
//       description: "Visits to cultural and historical sites to understand India's rich heritage and diversity",
//       grades: "Grades 5-12",
//       frequency: "Annual",
//       image: "/Images/Campus/NewHostel.JPG",
//     },
//     {
//       title: "Heritage Tours",
//       description: "Visits to cultural and historical sites to understand India's rich heritage and diversity",
//       grades: "Grades 5-12",
//       frequency: "Annual",
//       image: "/Images/Campus/NewHostel.JPG",
//     },
//   ]

//   const upcomingTours = [
//     {
//       destination: "Science City, Kolkata",
//       dates: "September 15-16, 2023",
//       grades: "Grades 6-8",
//       highlights: "Interactive exhibits, 3D shows, workshops",
//     },
//     {
//       destination: "Himalayan Adventure Camp, Manali",
//       dates: "October 10-15, 2023",
//       grades: "Grades 9-10",
//       highlights: "Trekking, rock climbing, river rafting",
//     },
//     {
//       destination: "NASA Space Center, USA",
//       dates: "November 20-30, 2023",
//       grades: "Grades 11-12 (Science Stream)",
//       highlights: "Space workshops, astronaut training experience",
//     },
//   ]

//   return (
//     <section id="tours" className="pb-10 sm:pb-16 my-10 bg-white">
//       <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40">
//         <div className="text-center mb-10 sm:mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
//             Tours <span className="relative inline-block"> & Excursions
//               <img
//                 src="/Images/Doodles/LineYellow.png"
//                 alt="Underline"
//                 className="absolute w-[80%] left-12 -bottom-4 sm:-bottom-6 md:-bottom-8"
//               />
//             </span>
//           </h2>
//           <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
//             Learning beyond the classroom through carefully planned educational tours and excursions
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 mb-12">
//           {excursions.map((excursion, index) => (
//             <div key={index} className="bg-white group relative rounded-xl overflow-hidden shadow-lg">
//               <img
//                 src={excursion.image || "/placeholder.svg"}
//                 alt={excursion.title}
//                 className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="p-5">
//                 <h3 className="text-xl font-poppins tracking-wide font-semibold text-gray-900 mb-2">{excursion.title}</h3>
//                 <p className="text-gray-700 mb-4 font-inter">{excursion.description}</p>
//                 <div className="flex flex-wrap gap-3 text-sm font-medium font-inter">
//                   <div className="bg-secondarylight text-secondarydark px-4 py-1.5 rounded-full">{excursion.grades}</div>
//                   <div className="bg-secondarylight text-secondarydark px-4 py-1.5 rounded-full">{excursion.frequency}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="bg-blue-50 rounded-lg p-12">
//           <h3 className="text-2xl font-poppins font-semibold text-gray-900 tracking-wide mb-6">Upcoming Tours</h3>
//           <div className="space-y-4">
//             {upcomingTours.map((tour, index) => (
//               <div key={index} className="bg-white p-6 rounded-md shadow-sm">
//                 <h4 className="font-semibold font-poppins text-primary text-lg mb-2 tracking-wide">{tour.destination}</h4>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base">
//                   <div>
//                     <span className="text-gray-500 block mb-1">Dates:</span>
//                     <span className="text-gray-700 font-medium ">{tour.dates}</span>
//                   </div>
//                   <div>
//                     <span className="text-gray-500 block mb-1">Eligible Grades:</span>
//                     <span className="text-gray-700 font-medium">{tour.grades}</span>
//                   </div>
//                   <div>
//                     <span className="text-gray-500 block mb-1">Highlights:</span>
//                     <span className="text-gray-700 font-medium">{tour.highlights}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* <div className="grid md:grid-cols-2 gap-8">
//           <div>
//             <h3 className="text-2xl font-poppins tracking-wide font-semibold text-gray-900 mb-1">Educational Benefits</h3>
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <CircleCheck className="w-5 h-5 flex-shrink-0 text-indigo-600 mr-1.5 mt-1" />
//                   <div>
//                     <h4 className="text-lg font-poppins tracking-wide font-semibold text-blue-700 mb-1">Experiential Learning</h4>
//                     <p className="text-gray-700 text-sm font-inter">Hands-on experiences that reinforce classroom learning</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <CircleCheck className="w-5 h-5 flex-shrink-0 text-indigo-600 mr-1.5 mt-1" />
//                   <div>
//                     <h4 className="text-lg font-poppins tracking-wide font-semibold text-blue-700 mb-1">Cultural Awareness</h4>
//                     <p className="text-gray-700 text-sm font-inter">
//                       Exposure to diverse cultures, traditions, and perspectives
//                     </p>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <CircleCheck className="w-5 h-5 flex-shrink-0 text-indigo-600 mr-1.5 mt-1" />
//                   <div>
//                     <h4 className="text-lg font-poppins tracking-wide font-semibold text-blue-700 mb-1">Independence</h4>
//                     <p className="text-gray-700 text-sm font-inter">Development of self-reliance and responsibility</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <CircleCheck className="w-5 h-5 flex-shrink-0 text-indigo-600 mr-1.5 mt-1" />
//                   <div>
//                     <h4 className="text-lg font-poppins tracking-wide font-semibold text-blue-700 mb-1">Team Building</h4>
//                     <p className="text-gray-700 text-sm font-inter">Strengthening peer relationships and collaborative skills</p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-2xl font-poppins tracking-wide font-semibold text-gray-900 mb-1">Tour Policies</h3>
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="text-lg font-poppins tracking-wide font-semibold text-blue-700 mb-1">Safety Measures</h4>
//                   <p className="text-gray-700 text-sm font-inter">
//                     All tours are conducted with comprehensive safety protocols, including trained staff, first aid
//                     facilities, and emergency procedures.
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-poppins tracking-wide font-semibold text-blue-700 mb-1">Participation</h4>
//                   <p className="text-gray-700 text-sm font-inter">
//                     While most tours are optional, we strongly encourage participation as they are integral to our
//                     educational program.
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-poppins tracking-wide font-semibold text-blue-700 mb-1">Financial Assistance</h4>
//                   <p className="text-gray-700 text-sm font-inter">
//                     Scholarships and financial aid are available to ensure all students can participate in educational
//                     tours.
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-poppins tracking-wide font-semibold text-blue-700 mb-1">Documentation</h4>
//                   <p className="text-gray-700 text-sm font-inter">
//                     Students document their experiences through journals, presentations, and projects to maximize
//                     learning outcomes.
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
//                   Download Complete Tour Policy
//                   <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   )
// }

// export default ToursExcursions
