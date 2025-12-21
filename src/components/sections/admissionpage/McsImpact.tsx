import React, { useRef, useEffect } from "react"
import {
  Users,
  Heart,
  Star,
  BookOpen,
  Leaf,
  Sparkles,
  Trophy,
  Globe2,
  ArrowRight,
  MessageSquareText,
  GraduationCap,
  Medal,
} from "lucide-react"

const McsImpact = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null)

  // Auto-scroll for image carousel
  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth / 2
        ) {
          carouselRef.current.scrollLeft = 0
        }
      }
    }
    const interval = setInterval(scroll, 10)
    return () => clearInterval(interval)
  }, [])

  const carouselImages = [
    "/Images/Heros/samplehero.JPG",
    "/Images/Heros/samplehero.JPG",
    "/Images/Heros/samplehero.JPG",
    "/Images/Heros/samplehero.JPG",
    "/Images/Heros/samplehero.JPG",
    "/Images/Heros/samplehero.JPG",
    "/Images/Heros/samplehero.JPG",
    "/Images/Heros/samplehero.JPG",
    "/Images/Heros/samplehero.JPG",
    "/Images/Heros/samplehero.JPG",
  ]

  const testimonials = [
    {
      quote:
        "Our son transformed from a shy student into a confident speaker. The teachers don’t just educate — they inspire.",
      name: "Parent of Grade 6 Student",
      role: "Parent Testimonial",
      img: "/Images/Heros/samplehero.JPG",
    },
    {
      quote:
        "The environment at MCS feels like a second home. I learned leadership, teamwork, and kindness — not just subjects.",
      name: "Student, Class 10",
      role: "Student Voice",
      img: "/Images/Heros/samplehero.JPG",
    },
    {
      quote:
        "Montessori Cambridge didn’t just prepare me for exams — it prepared me for life. Forever grateful.",
      name: "Alumni, Batch of 2020",
      role: "Alumni Reflection",
      img: "/Images/Heros/samplehero.JPG",
    },
  ]

  return (
    <section id="why-choose-us" className="bg-white">
      {/* MCS IMPACT */}
      <div className="text-center my-10 md:my-20 py-15 md:py-20 relative bg-linear-to-br from-violet-950 via-blue-900 to-indigo-950">

        <div className="mx-auto px-6 min-[540px]:px-12 sm:px-16 lg:px-20 mb-10 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-amber-300 font-playpen font-medium leading-normal">
            The MCS Impact
          </h2>
          <p className="mt-4 md:mt-7 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
            Our results speak through our students — confident communicators, ethical citizens, and lifelong learners who carry the MCS spirit wherever they go.
          </p>
        </div>

          {/* Animated Impact Cards */}
          <div className="grid grid-cols-1 min-[540px]:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10 px-10 min-[540px]:px-12 sm:px-16 xl:px-20 max-w-6xl mx-auto">
            {[
              {
                icon: <Trophy className="w-10 h-10 text-yellow-400" />,
                stat: "98%",
                title: "Board Exams Pass Percentage",
                desc: "Every student achieves academic excellence with passion and purpose.",
                glow: "shadow-[0_0_25px_rgba(255,193,7,0.4)]",
              },
              {
                icon: <Users className="w-10 h-10 text-green-400" />,
                stat: "20+",
                title: "Active Clubs & Societies",
                desc: "From astronomy to art — students explore every dimension of interest.",
                glow: "shadow-[0_0_25px_rgba(34,197,94,0.4)]",
              },
              {
                icon: <Star className="w-10 h-10 text-pink-400" />,
                stat: "5000+",
                title: "Successful Alumni of MCS",
                desc: "Our alumni are thriving professionals, artists, and innovators worldwide.",
                glow: "shadow-[0_0_25px_rgba(236,72,153,0.4)]",
              },
              {
                icon: <GraduationCap className="w-10 h-10 text-sky-400" />,
                stat: "30+",
                title: "Years of Academic Excellence",
                desc: "Decades of nurturing intellect, empathy, and global citizenship.",
                glow: "shadow-[0_0_25px_rgba(56,189,248,0.4)]",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl xl:rounded-3xl p-6 text-center text-white transition-all duration-500 hover:scale-[1.05] hover:bg-white/20 hover:shadow-xl ${card.glow}`}
              >
                <div className="flex justify-center mb-4">{card.icon}</div>
                <h3 className="text-4xl xl:text-5xl font-bold font-outfit text-yellow-400 mb-2">
                  {card.stat}
                </h3>
                <p className="text-base xl:text-lg font-medium font-poppins tracking-wide">{card.title}</p>
                {/* <p className="text-gray-300 mt-3 text-sm font-inter">{card.desc}</p> */}
              </div>
            ))}
          </div>

          {/* Image Carousel */}
          <div className="relative w-full mt-16 xl:mt-20">
            <div
              ref={carouselRef}
              className="flex gap-5 xl:gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
            >
              {[...carouselImages, ...carouselImages].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`MCS Impact ${i + 1}`}
                  className="rounded-xl h-64 xl:h-80 w-90 xl:w-105 object-cover shrink-0 shadow-md hover:scale-[1.05] transition-transform duration-500 "
                />
              ))}
            </div>
          </div>
      </div>

      {/* TESTIMONIAL SECTION */}
      
      <div className="max-w-7xl mx-auto my-16 lg:my-20">
        <div className="mx-6 min-[540px]:mx-12 sm:mx-16 lg:mx-20 rounded-xl lg:rounded-2xl bg-linear-to-br from-sky-100 to-indigo-50 p-8 md:p-10 shadow-2xl items-center">
          <div className="text-center">
            <MessageSquareText className="mx-auto w-8 h-8 sm:w-10 sm:h-10 text-sky-600" />
            <h3 className="mt-4 text-xl md:text-2xl font-outfit font-semibold tracking-wide text-gray-900">What Our Parents Say!</h3>
            <blockquote className="mt-4 lg:mt-6">
              <p className="text-base md:text-xl italic text-gray-700">
                "Choosing Montessori Cambridge School for our children was one of the best decisions we've made as
                parents. The school's commitment to academic excellence, character development, and creating a
                supportive community has exceeded our expectations."
              </p>
              <footer className="mt-4">
                <p className="font-outfit font-medium text-gray-400">— Parent of MCS students</p>
              </footer>
            </blockquote>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/testimonials"
              className="group inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-outfit text-base font-medium rounded-full transition-all duration-300 ease-in-out hover:font-semibold hover:scale-105 active:scale-95 shadow-md cursor-pointer border border-transparent bg-primarydark text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-300"
            >
              Enquire Now for Admissions
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default McsImpact
