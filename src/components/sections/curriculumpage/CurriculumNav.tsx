"use client"

import { useState, useEffect } from "react"

interface NavItem {
  id: string
  label: string
}

const CurriculumNav = () => {
  const [activeSection, setActiveSection] = useState("annual-calendar")

  const navItems: NavItem[] = [
    { id: "annual-calendar", label: "Annual Calendar" },
    { id: "academics", label: "Academics" },
    { id: "co-curricular", label: "Co-curricular" },
    { id: "sports", label: "Sports" },
    { id: "performing-arts", label: "Performing Arts" },
    { id: "competitions", label: "Competitions" },
    { id: "outreach", label: "Outreach Programs" },
    { id: "tours", label: "Tours & Excursions" },
    { id: "courses", label: "Courses" },
    { id: "syllabus", label: "Syllabus" },
    { id: "booklist", label: "Booklist" },
    { id: "uniforms", label: "Uniforms" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        if (!section) return

        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="sticky top-20 z-30 bg-white shadow-md py-3">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 min-w-max pb-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-blue-600 text-white font-medium"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurriculumNav
