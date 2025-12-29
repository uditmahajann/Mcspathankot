import type React from "react"
import { useEffect, useRef, useState } from "react"

interface TrendCardProps {
  number: string
  title: string
  description: string
  imagePath: string
}

const TrendCard: React.FC<TrendCardProps> = ({ number, title, description, imagePath }) => {
  return (
    <div
      className={`lg:w-[80%] relative flex flex-col gap-4 transition-all duration-300`}
    >
      <div className={`absolute top-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-white font-inter -left-15`}>
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
        <h3 className="text-xl sm:text-2xl font-raleway font-semibold text-gray-900">{title}</h3>
        <p className="text-base sm:text-md text-gray-700 font-inter">{description}</p>
        
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
      number: "1",
      title: "STEAM Learning",
      description:
        "We integrate Science, Technology, Engineering, Arts, and Math into a unified, hands-on curriculum that nurtures creativity, innovation, and real-world problem-solving across all age groups. By combining technical knowledge with artistic expression, students learn to approach problems from multiple angles.",
      imagePath: "/Images/Heros/samplehero.JPG",
    },
    {
      number: "2",
      title: "SEL- Social & Emotional Learning",
      description:
        "We prioritize well-being alongside academics. Through SEL, students build self-awareness, empathy, emotional regulation and responsible decision-making skills essential for lifelong success. Mindfulness practices, such as meditation and deep breathing, are also being introduced to support mental well-being and focus.",
      imagePath: "/Images/Heros/samplehero.JPG",
    },
    {
      number: "3",
      title: "Global Learning",
      description:
        "Our particular focus on 'Global learning' helps in broadening students’ perspectives through international collaborations, exchange programs, and cultural awareness activities. Language learning and exposure to different cultures fosters a global mindset & prepare them to lead in a truly global society",
      imagePath: "/Images/Heros/samplehero.JPG",
    },
    {
      number: "4",
      title: "Sports & Physical Development",
      description:
        "With world-class facilities, expert coaches, and a strong culture of sportsmanship, we promote athleticism, discipline, and teamwork — empowering students to excel in both competitive and recreational sports while building confidence, resilience, and lifelong healthy habits.",
      imagePath: "/Images/Heros/samplehero.JPG",
    },
    {
      number: "5",
      title: "Beyond Academics",
      description:
        "Beyond classrooms, students explore their passion through music, drama, debate, and leadership events. From performing arts to social initiatives and leadership clubs, our vibrant co-curricular life fuels creativity, collaboration, and a sense of purpose beyond the classroom.",
      imagePath: "/Images/Heros/samplehero.JPG",
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
    <div ref={containerRef} className="relative bg-white py-4 sm:py-10 lg:py-20 my-10">
      <div className="container mx-auto px-8 min-[540px]:px-12 sm:px-16 xl:px-0 max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left side - Sticky content */}
          <div className="lg:sticky top-7/20 h-fit self-start">
            <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
              Insights into
              <div className="container">
                <span className="relative inline-block">Future Learning
                  <img
                    src="/Images/Doodles/LinePink.png"
                    alt="Underline"
                    className="w-[60%] absolute -bottom-4 sm:-bottom-5"
                  />
                </span>Trends
              </div>
            </h2>
            <p className="mt-4 sm:mt-6 self-start text-base sm:text-lg text-gray-700 max-w-3xl">
              At MCS, education is evolving to equip students with the mindset, skills, and values needed for success in tomorrow’s world.
            </p>
          </div>

          {/* Right side - Scrollable content with progress line */}
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-0 top-0 h-full w-0.5 lg:w-0.75 bg-gray-200">
              <div
                className="absolute left-0 top-0 w-0.5 lg:w-0.75 bg-amber-300 transition-all duration-300"
                style={{ height: `${scrollProgress * 100}%` }}
              ></div>
            </div>

            {/* Cards */}
            <div className="ml-11 space-y-20 lg:space-y-32">
              {trends.map((trend, index) => (
                <TrendCard
                  key={index}
                  number={trend.number}
                  title={trend.title}
                  description={trend.description}
                  imagePath={trend.imagePath}
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