"use client"

import React, { useState, useEffect } from "react"
import {
  BookOpen,
  Palette,
  GraduationCap,
  Trophy,
  Users,
  Star,
  Medal,
  Award,
  Badge,
  Sparkles,
} from "lucide-react"

const hallOfFame = [
  {
    key: "blog",
    title: "Blog of the Year",
    bookmark: "WRITER",
    winner: "Aarav Sharma",
    subtitle: "Class 10 | Tech Blogger",
    description:
      "Blog 'The Future of AI in Education' inspired students and teachers alike, earning him the top spot this year.",
    image: "/Images/People/SampleStudent.png",
    icon: BookOpen,
    badge: { label: "Blog Star", icon: Star },
    month: "May 2025",
    medalImage: "/Icons/BronzeMedal.png",
  },
  {
    key: "art",
    title: "Artist of the Year",
    bookmark: "ARTIST",
    winner: "Mira Patel",
    subtitle: "Class 9 | Visual Artist",
    description:
      "Vibrant painting 'Harmony in Nature' was awarded for its creativity and emotional depth, standing out in the annual art exhibition.",
    image: "/Images/People/SampleStudent.png",
    icon: Palette,
    badge: { label: "Art Maestro", icon: Award },
    month: "May 2025",
    medalImage: "/Icons/SilverMedal.png",
  },
  {
    key: "academic",
    title: "Academic Star of the Year",
    bookmark: "ACADEMICS",
    winner: "Rahul Verma",
    subtitle: "Class 12 | Science Stream",
    description:
      "Achieved the highest aggregate score across all subjects, demonstrating exceptional academic excellence.",
    image: "/Images/People/SampleStudent.png",
    icon: GraduationCap,
    badge: { label: "Top Scholar", icon: Medal },
    month: "May 2025",
    medalImage: "/Icons/GoldMedal.png",
  },
  {
    key: "sports",
    title: "Sportsperson of the Year",
    bookmark: "SPORTS",
    winner: "Sneha Singh",
    subtitle: "Class 11 | Athletics",
    description:
      "Broke school records in track and field, leading the team to victory at the inter-school championships.",
    image: "/Images/People/SampleStudent.png",
    icon: Badge,
    badge: { label: "Sports Champ", icon: Trophy },
    month: "May 2025",
    medalImage: "/Icons/SilverMedal.png",
  },
  {
    key: "cocurricular",
    title: "Co-curricular Achiever of the Year",
    bookmark: "CULTURAL",
    winner: "Kabir Joshi",
    subtitle: "Class 8 | Debate & Drama",
    description:
      "Excelled in debate, winning at multiple inter-school events and inspiring peers.",
    image: "/Images/People/SampleStudent.png",
    icon: Users,
    badge: { label: "All-rounder", icon: Sparkles },
    month: "May 2025",
    medalImage: "/Icons/BronzeMedal.png",
  },
]

const McsSpotlight = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  // Handle screen size and default open card
  useEffect(() => {
    const updateSize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) setOpenIdx(2) // open middle card for desktop
      else setOpenIdx(null) // no card open for mobile
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  // Dynamic card sizes based on screen
  const CARD_OPEN_WIDTH = isMobile ? 320 : 400
  const CARD_MIN_WIDTH = isMobile ? 80 : 100
  const CARD_HOVER_WIDTH = isMobile ? 100 : 120
  const CARD_HEIGHT = isMobile ? 490 : 580

  return (
    <div className="flex flex-row items-stretch justify-center min-h-[400px] md:min-h-[480px] px-5">
      {hallOfFame.map((item, idx) => {
        const isOpen = idx === openIdx
        const isHovered = hoveredIdx === idx && !isOpen
        let cardWidth = CARD_MIN_WIDTH
        if (isOpen) cardWidth = CARD_OPEN_WIDTH
        else if (isHovered) cardWidth = CARD_HOVER_WIDTH

        return (
          <div
            key={item.key}
            className={`group relative bg-gradient-to-b from-[#c1d5f0] via-[#f8fcff] to-[#ffffff] rounded-xl shadow-xl border border-gray-200 flex flex-col items-center justify-between cursor-pointer transition-all duration-500 ${isOpen ? "z-20" : "opacity-90"}`}
            style={{
              height: CARD_HEIGHT,
              width: cardWidth,
              minWidth: cardWidth,
              maxWidth: cardWidth,
              transition: "all 0.5s cubic-bezier(.77,0,.18,1)",
              boxShadow: isOpen ? "0 8px 32px 0 rgba(31,38,135,0.15)" : undefined,
            }}
            onClick={() => setOpenIdx(idx)}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <img
              src={item.medalImage}
              alt="Medal"
              className="absolute md:left-3 w-auto h-24 md:h-30 z-20"
              style={{ pointerEvents: "none" }}
            />

            {!isOpen && (
              <div className="relative h-full w-full">
                <div className="absolute top-30 md:top-36 left-2/3 transform rotate-90 origin-top-left text-slate-800 text-4xl md:text-5xl font-baloo font-bold tracking-wide whitespace-nowrap">
                  {item.bookmark}
                </div>
                <div className="md:hidden absolute -bottom-1">
                  <img
                    src={item.image}
                    alt={item.winner}
                    className="w-40 h-40 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {isOpen && (
              <div className="flex flex-col items-center w-full px-6 py-8 animate-fadeIn">
                <div className="absolute w-full flex justify-end right-6 top-6">
                  <span className="flex items-center gap-1.5 bg-slate-100 text-slate-800 px-3 py-2 rounded-full font-medium text-sm shadow">
                    <item.badge.icon size={16} /> {item.badge.label}
                  </span>
                </div>
                <div className="relative mb-4">
                  <img
                    src={item.image}
                    alt={item.winner}
                    className="w-60 h-60 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-center w-full">
                  <div className="px-4 text-lg sm:text-xl xl:text-2xl font-playpen font-semibold text-gray-900 ">'{item.title}'</div>
                  <div className="text-xl font-semibold text-secondary mt-3 mb-1 tracking-wide uppercase">{item.winner}</div>
                  <div className="text-base font-inter text-gray-500 mb-3">{item.subtitle}</div>
                  <div className="px-2 text-sm font-inter text-gray-400">{item.description}</div>
                </div>
                <div className="flex items-center gap-2 mt-6 bg-primarydark text-white px-4 py-2 rounded-full font-semibold text-sm shadow">
                  <Trophy size={16} /> {item.month}
                </div>
              </div>
            )}
          </div>
        )
      })}

      <style jsx global>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.9s;
        }
      `}</style>
    </div>
  )
}

export default McsSpotlight