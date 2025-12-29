"use client"

import React, { useEffect, useRef, useState } from "react"
import { ArrowRight, BookOpen, GraduationCap, School, Users, Backpack } from "lucide-react"

// Import your Lottie JSON files from public/animations/
import prePrimaryAnimation from "../../../../public/animations/PrePrimary.json"
import primaryAnimation from "../../../../public/animations/Primary.json"
import middleAnimation from "../../../../public/animations/Middle.json"
import secondaryAnimation from "../../../../public/animations/Secondary.json"
import seniorSecondaryAnimation from "../../../../public/animations/SeniorSec.json"


const educationalLevels = [
  {
    id: 1,
    title: "Pre-Primary School",
    description:
      "Building a strong foundation through play-based learning, developing social skills and curiosity in a nurturing environment.",
    icon: Users,
    color: "#FF6B6B",
    link: "/pre-primary",
    animation: prePrimaryAnimation,
  },
  {
    id: 2,
    title: "Primary School",
    description:
      "Fostering fundamental literacy, numeracy, and critical thinking skills while encouraging creativity and self-expression.",
    icon: BookOpen,
    color: "#4ECDC4",
    link: "/primary",
    animation: primaryAnimation,
  },
  {
    id: 3,
    title: "Middle School",
    description:
      "Guiding students through the transition years with specialized subject learning and developing independent study habits.",
    icon: Backpack,
    color: "#FFD166",
    link: "/middle",
    animation: middleAnimation,
  },
  {
    id: 4,
    title: "Secondary School",
    description:
      "Preparing students for academic excellence with comprehensive curriculum and opportunities for personal growth.",
    icon: School,
    color: "#6A0572",
    link: "/secondary",
    animation: secondaryAnimation,
  },
  {
    id: 5,
    title: "Senior Secondary School",
    description:
      "Specialized education pathways preparing students for higher education and future careers with advanced coursework.",
    icon: GraduationCap,
    color: "#1A535C",
    link: "/senior-secondary",
    animation: seniorSecondaryAnimation,
  },
]

const EduLevels: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [LottieComponent, setLottieComponent] = useState<any>(null)
  const [animationError, setAnimationError] = useState(false)

  // Dynamically import Lottie only on the client side
  useEffect(() => {
    let isMounted = true
    const loadLottie = async () => {
      try {
        const module = await import("lottie-react")
        if (isMounted) setLottieComponent(() => module.default)
      } catch (error) {
        setAnimationError(true)
      }
    }
    loadLottie()
    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !sectionRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const totalScrollHeight = containerRef.current.offsetHeight - windowHeight
      const scrollPosition = window.scrollY - (containerRect.top + window.scrollY - windowHeight / 2)
      const scrollProgress = Math.max(0, Math.min(1, scrollPosition / totalScrollHeight))
      const newActiveLevel = Math.min(
        Math.floor(scrollProgress * educationalLevels.length),
        educationalLevels.length - 1,
      )
      setActiveLevel(newActiveLevel)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Render animation or fallback icon
  const renderAnimation = (level: (typeof educationalLevels)[0]) => {
    if (animationError || !LottieComponent) {
      return (
        <div className="flex h-full w-full items-center justify-center">
          <level.icon size={80} color={level.color} />
        </div>
      )
    }
    try {
      return (
        <LottieComponent
          animationData={level.animation}
          loop
          autoplay
          className="h-full w-full"
          onError={() => setAnimationError(true)}
        />
      )
    } catch {
      return (
        <div className="flex h-full w-full items-center justify-center">
          <level.icon size={80} color={level.color} />
        </div>
      )
    }
  }

  return (
    <div ref={containerRef} className="relative" style={{ height: `${educationalLevels.length * 100}vh` }}>
      <div
        ref={sectionRef}
        className="bg-neutral-50 px-5 min-[540px]:px-12 sm:px-16 xl:px-0 py-4 sm:py-10 lg:py-20 my-10 sticky top-0 h-screen"
      >

        <div className="container mx-auto h-full">

          <div className="text-center mb-10 sm:mb-30 lg:mb-20">
            <h2 className="text-2xl min-[540px]:text-3xl lg:text-4xl text-gray-900 font-playpen font-medium inline-block relative leading-normal">
              <span className="relative z-10 inline-block pl-3 pr-2">
                Educational
                <span className="absolute inset-0 -z-10 -top-6 md:-top-8">
                  <img
                    src="/Images/Doodles/CircleYellow.png"
                    alt="Circle Doodle"
                    className="w-full h-auto object-contain"
                  />
                </span>
              </span>{" "}
              Levels at MCS
            </h2>
            <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Discover our structured academic journey, nurturing learners from foundational skills to future-ready excellence.
            </p>
          </div>


          {/* Progress indicator (desktop only) */}
          <div className="absolute right-5 xl:right-10 top-1/2 -translate-y-1/2 hidden md:block z-10">
            <div className="flex flex-col items-center space-y-4">
              {educationalLevels.map((_, index) => (
                <div
                  key={`indicator-${index}`}
                  className={`h-2.5 w-2.5 lg:h-3 lg:w-3 rounded-full transition-all duration-300 ${index === activeLevel ? "bg-gray-800 scale-125" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Main Content: Responsive stacking */}
          <div className="w-full flex flex-col sm:flex-row justify-start sm:items-center gap-y-30 gap-x-5 xl:px-40">

            {/* Animation - always first in markup, on top for mobile, left for desktop */}
            <div className="relative w-full flex items-center justify-center">
              {/* Background Circle */}
              <div
                className="absolute w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-100 xl:w-110 xl:h-110 rounded-full"
                style={{
                  backgroundColor: `${educationalLevels[activeLevel].color}25`,
                }}
              />

              {/* Lottie animation */}
              <div className="z-10 w-50 h-50 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-90 xl:h-90 overflow-hidden">
                {renderAnimation(educationalLevels[activeLevel])}
              </div>
            </div>


            {/* Description - always second in markup, below on mobile, right on desktop */}
            <div className="relative w-full max-w-lg flex flex-col justify-center items-center mx-2">
              {educationalLevels.map((level, index) => (
                <div
                  key={level.id}
                  className={`transition-all duration-700 absolute w-full ${activeLevel === index ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                  style={{
                    transform: activeLevel === index ? "translateY(0)" : `translateY(${(index - activeLevel) * 50}px)`,
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: level.color }}
                    >
                      <level.icon size={20} className="sm:hidden" />
                      <level.icon size={24} className="hidden sm:block" />
                    </div>
                    <span className="text-xl sm:text-2xl text-gray-500 ">0{level.id}</span>
                  </div>

                  <h3 className="mt-3 md:mt-4 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-raleway font-bold text-gray-900">{level.title}</h3>

                  <p className="mt-3 md:mt-4 font-inter text-base md:text-lg xl:text-xl text-gray-700">{level.description}</p>

                  <div className="mt-4 md:mt-6">
                    <a
                      href={level.link}
                      className="group inline-flex items-center rounded-full px-4 py-2 md:px-6 md:py-3 text-base sm:text-lg font-inter font-medium transition-all duration-300 hover:translate-x-1"
                      style={{
                        backgroundColor: `${level.color}20`,
                        color: level.color,
                      }}
                    >
                      Learn More{" "}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EduLevels