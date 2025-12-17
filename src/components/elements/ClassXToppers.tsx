"use client"

import React, { useState, useEffect } from "react"
import { X, ChevronRight, ChevronLeft } from "lucide-react"

const images = [
  "/Images/People/Class10Result1.jpg",
  "/Images/People/Class10Result2.jpg",
  "/Images/People/Class10Result3.jpg",
]

const ClassXToppers: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)

  const openModal = (index: number) => {
    setCurrentIdx(index)
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false)

  const prevImage = () => setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const nextImage = () => setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  // Optional: Close with Esc key and arrow navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") closeModal()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isOpen])

  return (
    <>
      {/* Image Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(idx)}
          >
            <img
              src={src}
              alt={`Class XII Result ${idx + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
            onClick={closeModal}
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
            onClick={prevImage}
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={images[currentIdx]}
            alt={`Full Preview ${currentIdx + 1}`}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg transition duration-300"
          />

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
            onClick={nextImage}
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  )
}

export default ClassXToppers