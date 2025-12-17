"use client"

import React, { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, Film } from "lucide-react"

const DigitalGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const galleryItems = [
    {
      id: 1,
      src: "/Images/Campus/NewHostel.JPG",
      alt: "Campus Main Building",
      category: "campus",
      width: 2,
      height: 2,
    },
    {
      id: 2,
      src: "/Images/Campus/NewHostel.JPG",
      alt: "Science Exhibition",
      category: "academics",
      width: 1,
      height: 1,
    },
    {
      id: 3,
      src: "/Images/Campus/NewHostel.JPG",
      alt: "Annual Sports Day",
      category: "sports",
      width: 1,
      height: 2,
    },
    {
      id: 4,
      src: "/Images/Campus/NewHostel.JPG",
      alt: "Cultural Performance",
      category: "arts",
      width: 2,
      height: 1,
    },
    {
      id: 5,
      src: "/Images/Campus/NewHostel.JPG",
      alt: "Library",
      category: "campus",
      width: 2,
      height: 1,
    },
    {
      id: 6,
      src: "/Images/Campus/NewHostel.JPG",
      alt: "Basketball Tournament",
      category: "sports",
      width: 1,
      height: 1,
    },
    {
      id: 7,
      src: "/Images/Campus/NewHostel.JPG",
      alt: "Classroom Session",
      category: "academics",
      width: 2,
      height: 1,
    },
    {
      id: 8,
      src: "/Images/Campus/NewHostel.JPG",
      alt: "Annual Day Celebration",
      category: "events",
      width: 2,
      height: 2,
    },
    {
      id: 9,
      src: "/Images/Campus/NewHostel.JPG",
      alt: "Art Exhibition",
      category: "arts",
      width: 1,
      height: 1,
    },
    {
      id: 10,
      src: "/Images/Campus/NewHostel.JPG",
      alt: "Swimming Competition",
      category: "sports",
      width: 1,
      height: 1,
    },
  ]

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImage((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen])

  return (
    <section id="digital-gallery" className="py-10 sm:py-12 bg-white">
      <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Our <span className="relative inline-block">Digital Gallery
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[80%] left-12 -bottom-4 sm:-bottom-6 md:-bottom-8"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our vibrant campus life through a collection of photos and videos capturing memorable moments,
            events, and achievements.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${
                item.width === 2 ? "sm:col-span-2" : ""
              } ${item.height === 2 ? "row-span-2" : ""}`}
              onClick={() => openLightbox(index)}
            >
              <img src={item.src || "/placeholder.svg"} alt={item.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">{item.alt}</p>
                  <p className="text-sm text-gray-300 capitalize">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-8 text-center flex items-center justify-center gap-2">
            <Film size={24} className="text-blue-600" />
            <span>Featured Videos</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Campus Tour",
                description: "Take a virtual tour of our state-of-the-art campus facilities.",
                thumbnail: "/Videos/Mcs2023.mp4",
              },
              {
                title: "Annual Day Highlights",
                description: "Relive the magical moments from our Annual Day celebration.",
                thumbnail: "/Videos/Mcs2023.mp4",
              },
            ].map((video, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600/80 flex items-center justify-center cursor-pointer hover:bg-blue-700/80 transition-colors duration-300">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">{video.title}</h4>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
              onClick={goToPrevious}
            >
              <ChevronLeft size={32} />
            </button>

            <img
              src={galleryItems[currentImage].src || "/placeholder.svg"}
              alt={galleryItems[currentImage].alt}
              className="max-w-[90%] max-h-[90vh] object-contain"
            />

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
              onClick={goToNext}
            >
              <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="font-medium">{galleryItems[currentImage].alt}</p>
              <p className="text-sm text-gray-300 capitalize">{galleryItems[currentImage].category}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default DigitalGallery
