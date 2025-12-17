"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"

const SearchButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const searchOverlayRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const openSearch = () => {
    setIsOpen(true)
    document.body.classList.add("overflow-hidden")
    // Focus the search input after a small delay to ensure the overlay is visible
    setTimeout(() => {
      searchInputRef.current?.focus()
    }, 100)
  }

  const closeSearch = () => {
    setIsOpen(false)
    document.body.classList.remove("overflow-hidden")
  }

  // Close search on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeSearch()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  // Handle click outside
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === searchOverlayRef.current) {
      closeSearch()
    }
  }

  return (
    <>
      {/* Search Button */}
      <button
        type="button"
        onClick={openSearch}
        className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
        aria-label="Search"
      >
        <Search className="h-5 w-5 cursor-pointer" />
      </button>

      {/* Search Overlay */}
      <div
        ref={searchOverlayRef}
        onClick={handleOverlayClick}
        className={`fixed inset-0 bg-black/90 bg-opacity-50 z-50 flex items-center justify-center ${isOpen ? "" : "hidden"}`}
      >
        <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl mx-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-inter font-medium text-gray-900">Search for anything</h3>
            <button onClick={closeSearch} className="text-gray-500 hover:text-gray-600">
              <X className="h-6 w-6 cursor-pointer" />
            </button>
          </div>
          <form action="/search" method="GET">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                name="q"
                placeholder="What are you looking for..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button type="submit" className="absolute right-2 top-2 p-1 rounded-md text-gray-500 hover:text-primarydark">
                <Search className="h-6 w-6" />
              </button>
            </div>
          </form>
          <div className="mt-4 text-sm font-inter text-gray-600">
            <p>Popular searches: admissions, curriculum, fees, results, exams</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchButton