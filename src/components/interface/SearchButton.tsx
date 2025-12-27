"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"

export default function SearchButton() {
  const [isOpen, setIsOpen] = useState(false)
  const searchOverlayRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const openSearch = () => {
    setIsOpen(true)
    document.body.classList.add("overflow-hidden")
    setTimeout(() => searchInputRef.current?.focus(), 100)
  }

  const closeSearch = () => {
    setIsOpen(false)
    document.body.classList.remove("overflow-hidden")
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      {/* Search icon button */}
      <button
        type="button"
        onClick={openSearch}
        aria-label="Search"
        className="flex text-white/80 hover:text-white cursor-pointer items-center font-inter"
      >
        <Search className="h-4.5 w-4.5 mr-2 text-amber-300"/>Search...
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          ref={searchOverlayRef}
          onClick={(e) => e.target === searchOverlayRef.current && closeSearch()}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
        >
          <div className="bg-white w-full max-w-2xl rounded-lg p-6 mx-4 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-inter font-semibold text-black">Search the website</h2>
              <button onClick={closeSearch}>
                <X className="h-6 w-6 text-gray-500 hover:text-secondarydark cursor-pointer" />
              </button>
            </div>

            <form action="/search" method="GET">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  name="q"
                  placeholder="Search for admissions, fees, curriculum..."
                  className="w-full pl-12 pr-4 py-3 font-inter text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </form>

            <p className="text-sm font-inter text-gray-600 mt-4">
              Popular searches: admissions, curriculum, fees, results
            </p>
          </div>
        </div>
      )}
    </>
  )
}
