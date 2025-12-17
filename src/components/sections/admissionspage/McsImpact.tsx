"use client"

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
    const interval = setInterval(scroll, 25)
    return () => clearInterval(interval)
  }, [])

  const carouselImages = [
    "/Images/Campus/NewHostel.JPG",
    "/Images/Campus/NewHostel.JPG",
    "/Images/Campus/NewHostel.JPG",
    "/Images/Campus/NewHostel.JPG",
    "/Images/Campus/NewHostel.JPG",
    "/Images/Campus/NewHostel.JPG",
    "/Images/Campus/NewHostel.JPG",
    "/Images/Campus/NewHostel.JPG",
    "/Images/Campus/NewHostel.JPG",
    "/Images/Campus/NewHostel.JPG",
  ]

  const testimonials = [
    {
      quote:
        "Our son transformed from a shy student into a confident speaker. The teachers don’t just educate — they inspire.",
      name: "Parent of Grade 6 Student",
      role: "Parent Testimonial",
      img: "/Images/Parents/Parent1.jpg",
    },
    {
      quote:
        "The environment at MCS feels like a second home. I learned leadership, teamwork, and kindness — not just subjects.",
      name: "Student, Class 10",
      role: "Student Voice",
      img: "/Images/Students/Student1.jpg",
    },
    {
      quote:
        "Montessori Cambridge didn’t just prepare me for exams — it prepared me for life. Forever grateful.",
      name: "Alumni, Batch of 2020",
      role: "Alumni Reflection",
      img: "/Images/Alumni/Alumni1.jpg",
    },
  ]

  return (
    <section id="why-choose-us" className="bg-white">
      {/* MCS IMPACT */}
      <div className="text-center py-25 relative bg-gradient-to-br from-violet-950 via-blue-900 to-indigo-950">

        <div className="px-6 sm:px-16 lg:px-28 mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium">
            The MCS Impact
          </h2>
          <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
            Our results speak through our students — confident communicators, ethical citizens, and lifelong learners who carry the MCS spirit wherever they go.
          </p>
        </div>

          {/* Animated Impact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
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
                className={`group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 text-center text-white transition-all duration-500 hover:scale-[1.05] hover:bg-white/20 hover:shadow-xl ${card.glow}`}
              >
                <div className="flex justify-center mb-4">{card.icon}</div>
                <h3 className="text-5xl font-bold font-outfit text-yellow-400 mb-2">
                  {card.stat}
                </h3>
                <p className="text-lg font-medium font-poppins tracking-wide">{card.title}</p>
                {/* <p className="text-gray-300 mt-3 text-sm font-inter">{card.desc}</p> */}
              </div>
            ))}
          </div>

          {/* Image Carousel */}
          <div className="relative w-full mt-30">
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
            >
              {[...carouselImages, ...carouselImages].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`MCS Impact ${i + 1}`}
                  className="rounded-xl h-80 w-[420px] object-cover flex-shrink-0 shadow-md hover:scale-[1.05] transition-transform duration-500 "
                />
              ))}
            </div>
          </div>
      </div>

      {/* TESTIMONIAL SECTION */}
      
      <div className="mx-auto max-w-7xl my-20 rounded-2xl bg-gradient-to-br from-sky-100 to-indigo-50 p-10 shadow-2xl">
          <div className="px-6 sm:px-12 lg:px-28 text-center">
            <MessageSquareText className="mx-auto w-10 h-10 text-sky-600" />
            <h3 className="mt-4 text-2xl font-outfit font-semibold tracking-wide text-gray-900">What Our Parents Say!</h3>
            <blockquote className="mt-6">
              <p className="text-xl italic text-gray-700">
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
              className="group inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-3 text-outfit text-base md:text-lg font-medium rounded-full transition-all duration-300 ease-in-out hover:font-semibold hover:scale-105 active:scale-95 shadow-md cursor-pointer border border-transparent bg-primarydark text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-300"
            >
              Enquire Now for Admissions
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={22} />
            </a>
          </div>
        </div>
    </section>
  )
}

export default McsImpact
