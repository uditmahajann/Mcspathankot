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
      "/Images/Heros/samplehero.JPG",
      "/Images/Heros/samplehero.JPG",
      "/Images/Heros/samplehero.JPG",
      "/Images/Heros/samplehero.JPG",
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
    <section id="tours-excursions" className="py-4 sm:py-10 my-10 bg-white">
      <div className="mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium leading-normal">
            Tours &{" "}
            <span className="relative inline-block">
              Excursions
              <img
                src="/Images/Doodles/LineGreen.png"
                alt="Underline"
                className="absolute w-[90%] left-6 -bottom-4 sm:-bottom-6"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Beyond the classroom — our tours and excursions bring learning to life through
            real-world exploration and shared adventure.
          </p>
        </div>

        {/* Tour Carousels */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-15">
          {tours.map((tour, index) => (
            <div
              key={tour.id}
              className={`rounded-2xl md:rounded-3xl ${tour.bgColor} py-8 sm:py-10 lg:py-12 px-5 sm:px-8 lg:px-16 shadow-sm`}
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-5 md:mb-8 gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins font-semibold text-gray-900 tracking-wide">
                    {tour.title}
                  </h3>
                  <p className="text-gray-700 font-inter mt-2 text-sm md:text-base">
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
                  ref={(el) => {scrollRefs.current[index] = el}}
                  className="flex gap-3 md:gap-6 overflow-x-auto scroll-smooth hide-scrollbar pb-4"
                >
                  {tour.images.map((src, i) => (
                    <div
                      key={i}
                      className="min-w-65 sm:min-w-[320px] md:min-w-95 rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
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