"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

interface TrendCardProps {
  number: string
  title: string
  description: string
  imagePath: string
  isActive: boolean
}

const TrendCard: React.FC<TrendCardProps> = ({ number, title, description, imagePath, isActive }) => {
  return (
    <div
      className={`lg:w-[80%] relative flex flex-col gap-4 transition-all duration-300 ${isActive ? "scale-[1.02]" : "scale-1.02"}`}
    >
      <div className={`absolute top-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-teal-400 text-white ${isActive ? "-left-14" : "-left-16"}`}>
        {number}
      </div>
      <div className="overflow-hidden rounded-lg lg:rounded-xl">
        <img
          src={imagePath || "/placeholder.svg"}
          alt={title}
          className="h-54 lg:h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-poppins font-semibold text-gray-900">{title}</h3>
        <p className="text-base sm:text-md text-gray-700">{description}</p>
        <a href="#" className="text-lg inline-flex font-medium items-center text-primarydark hover:text-secondarydark transition-colors">
          Learn More <ArrowRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
        </a>
      </div>
    </div>
  )
}

const FutureTrends: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  const trends = [
    {
      number: "01",
      title: "STEAM Learning",
      description:
        "We integrate Science, Technology, Engineering, Arts, and Math into a unified, hands-on curriculum that nurtures creativity, innovation, and real-world problem-solving across all age groups. By combining technical knowledge with artistic expression, students learn to approach problems from multiple angles.",
      imagePath: "/Images/Facilities/Steam.JPG",
    },
    {
      number: "02",
      title: "SEL- Social & Emotional Learning",
      description:
        "We prioritize well-being alongside academics. Through SEL, students build self-awareness, empathy, emotional regulation and responsible decision-making skills essential for lifelong success. Mindfulness practices, such as meditation and deep breathing, are also being introduced to support mental well-being and focus.",
      imagePath: "/Images/Facilities/SEL.JPG",
    },
    {
      number: "03",
      title: "Global Learning",
      description:
        "Our particular focus on 'Global learning' helps in broadening students’ perspectives through international collaborations, exchange programs, and cultural awareness activities. Language learning and exposure to different cultures fosters a global mindset & prepare them to lead in a truly global society",
      imagePath: "/Images/Facilities/Global.jpg",
    },
    {
      number: "04",
      title: "Sports & Physical Development",
      description:
        "With world-class facilities, expert coaches, and a strong culture of sportsmanship, we promote athleticism, discipline, and teamwork — empowering students to excel in both competitive and recreational sports while building confidence, resilience, and lifelong healthy habits.",
      imagePath: "/Images/Facilities/Swimming.JPG",
    },
    {
      number: "05",
      title: "Beyond Academics",
      description:
        "Beyond classrooms, students explore their passion through music, drama, debate, and leadership events. From performing arts to social initiatives and leadership clubs, our vibrant co-curricular life fuels creativity, collaboration, and a sense of purpose beyond the classroom.",
      imagePath: "/Images/Facilities/Cultural.jpg",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const containerTop = container.getBoundingClientRect().top
      const containerHeight = container.offsetHeight
      const windowHeight = window.innerHeight

      // Calculate how far we've scrolled through the section
      let progress = 0

      if (containerTop <= 0) {
        // We've scrolled past the top of the container
        const scrolledAmount = Math.abs(containerTop)
        const maxScrollable = containerHeight - windowHeight
        progress = Math.min(scrolledAmount / maxScrollable, 1)
      }

      setScrollProgress(progress)

      // Determine which card is active based on scroll position
      const newActiveIndex = Math.min(Math.floor(progress * trends.length), trends.length - 1)

      setActiveCardIndex(newActiveIndex)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [trends.length])

  return (
    <div ref={containerRef} className="relative bg-white py-10 sm:py-16 md:py-20 xl:py-25 my-10">
      <div className="container mx-auto pl-7 pr-6 min-[480px]:px-12 sm:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left side - Sticky content */}
          <div className="lg:sticky top-7/20 h-fit xl:pl-20 space-y-6 self-start">
            <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-playpen font-medium mb-8 sm:mb-10 leading-8 sm:leading-12">
              Insights into
              <div className="container">
                <span className="relative inline-block">Future Learning
                  <img
                    src="/Images/Doodles/LinePink.png"
                    alt="Underline"
                    className="w-[75%] absolute -bottom-6 sm:-bottom-8"
                  />
                </span>Trends
              </div>
            </h2>
            <p className="self-start text-base sm:text-lg text-gray-700 max-w-lg">
              At MCS, education is evolving to equip students with the mindset, skills, and values needed for success in tomorrow’s world.
            </p>
          </div>

          {/* Right side - Scrollable content with progress line */}
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-0 top-0 h-full w-0.5 md:w-0.75 bg-gray-200">
              <div
                className="absolute left-0 top-0 w-0.5 md:w-0.75 bg-teal-400 transition-all duration-300"
                style={{ height: `${scrollProgress * 100}%` }}
              ></div>
            </div>

            {/* Cards */}
            <div className="ml-11 sm:ml-12 space-y-20 sm:space-y-32">
              {trends.map((trend, index) => (
                <TrendCard
                  key={index}
                  number={trend.number}
                  title={trend.title}
                  description={trend.description}
                  imagePath={trend.imagePath}
                  isActive={index === activeCardIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FutureTrends