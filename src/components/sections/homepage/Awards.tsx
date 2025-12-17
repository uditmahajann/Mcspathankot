"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Award, Trophy, Medal, Star, BookOpen, GraduationCap } from "lucide-react"

interface AwardCategory {
  title: string
  icon: React.ReactNode
}

interface AwardData {
  title: string
  subtitle: string
  awardTitle: string
  awardImages: string[] // Array of 3 images per award
  awardDetails: string
  awardPromoter: string
  awardCategories: AwardCategory[]
}

export default function Awards() {
  // Array of award data, each with 3 images
  const awards: AwardData[] = [
    {
      title: "Honored by Hon'ble Education Minister, Punjab",
      subtitle: "Sh. Harjot Singh Bains",
      awardTitle: "EDUCATIONAL EXCELLENCE AWARD",
      awardImages: [
        "/Images/Awards/Award11.jpg",
        "/Images/Awards/Award12.jpeg",
        "/Images/Awards/Award13.jpg",
      ],
      awardDetails: "",
      awardPromoter: "(Presented at News18 Network Education Conclave 2025)",
      awardCategories: [
        { title: "Outstanding contributions in academics & co-curriculars", icon: <Award className="w-5 h-5" /> },
        { title: "Shaping young minds with a holistic approach", icon: <Trophy className="w-5 h-5" /> },
      ],
    },
    {
      title: "Our esteemed Principle, Mrs. Rashmi Ahluwalia",
      subtitle: "bestowed with the prestigious",
      awardTitle: "AWARD OF EXCELLENCE 2024-25",
      awardImages: [
        "/Images/Awards/Award21.jpeg",
        "/Images/Awards/Award22.jpeg",
        "/Images/Awards/Award23.jpeg",
      ],
      awardDetails: "",
      awardPromoter: "(From the Department of School Education, Punjab)",
      awardCategories: [
        { title: "Remarkable work in the field of Sports", icon: <Medal className="w-5 h-5" /> },
        { title: "Unparallel contributions to Education", icon: <GraduationCap className="w-5 h-5" /> },
      ],
    },
    {
      title: "Received by Principle, Mrs. Rashmi Ahluwalia",
      subtitle: "INDIA's MOST IMPACTFUL SCHOOL LEADERS in 2024",
      awardTitle: "IPN IMPACT LEADER 2024",
      awardImages: [
        "/Images/Awards/Award31.jpeg",
        "/Images/Awards/Award32.jpeg",
        "/Images/Awards/Award33.jpeg",
      ],
      awardDetails: "",
      awardPromoter: "(By IPN Foundation & Amrita Vishwa Vidyapeetham)",
      awardCategories: [
        { title: "For creating a Legacy of Impact", icon: <Star className="w-5 h-5" /> },
        { title: "Transformative Approach to Education", icon: <BookOpen className="w-5 h-5" /> },
      ],
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayedAward, setDisplayedAward] = useState(awards[0])
  const sectionRef = useRef<HTMLDivElement>(null)

  // Handle automatic rotation
  useEffect(() => {
    const rotationTimer = setTimeout(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % awards.length
        setCurrentIndex(nextIndex)
        setDisplayedAward(awards[nextIndex])
        setTimeout(() => {
          setIsTransitioning(false)
        }, 300)
      }, 500)
    }, 6000)

    return () => clearTimeout(rotationTimer)
  }, [currentIndex, awards])

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el as Element))

    return () => {
      elements?.forEach((el) => observer.unobserve(el as Element))
    }
  }, [])

  return (
    <section ref={sectionRef}
      className="relative z-10 w-full h-full bg-cover bg-center bg-no-repeat text-white overflow-hidden awards-section"
      style={{ backgroundImage: "url('/Images/Awards/AwardsBg.png')" }}>

      <div className="relative">
        {/* Award title section */}
        <div
          className={`relative z-20 text-center px-5 my-12 pt-16 transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
            }`}
        >
          <p className="text-lg md:text-xl mb-1">{displayedAward.title}</p>
          <p className="text-lg md:text-xl mb-4">{displayedAward.subtitle}</p>

          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-16 md:w-24 h-px bg-amber-200/60"></div>
            <Award className="w-6 h-6 text-amber-200" />
            <div className="w-16 md:w-24 h-px bg-amber-200/60"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-4 bg-linear-to-r from-yellow-950 via-yellow-200 to-yellow-950 text-transparent bg-clip-text">
            {displayedAward.awardTitle}
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-white">{displayedAward.awardPromoter}</h3>
        </div>
      </div>

      {/* Award images - 3 images side by side */}
      <div className="relative mx-auto w-full px-5 py-5 mb-28">
        <div
          className={`w-full flex flex-row gap-4 justify-center items-center transition-all duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"
            }`}
        >
          {displayedAward.awardImages.map((img, idx) => (
            <div key={img} className="flex-1 max-w-100">
              <img
                src={img}
                alt={`${displayedAward.awardTitle} AWARD ${idx + 1}`}
                className="w-full aspect-[3/2.5] rounded-lg object-cover shadow-xl transition-transform duration-600 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}