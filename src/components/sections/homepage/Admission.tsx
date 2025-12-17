"use client"

import React from "react"
import {
  ArrowRight,
  CalendarDays,
  Clock,
  UserPlus,
  Mail,
} from "lucide-react"

const Admission: React.FC = () => {
  return (
    <section className="w-full bg-linear-to-l from-[#e0eeff] via-[#f8fcff] to-[#e0eeff] sm:pb-12 lg:pb-16 lg:pt-16 my-10">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center gap-12 sm:gap-14 lg:gap-5">

  {/* ⬅️ Left Image (Desktop) */}
  <div className="flex w-full lg:w-1/3 justify-end">
    <div className="relative lg:rounded-tl-[60px] lg:rounded-br-[120px] overflow-hidden shadow-lg lg:border-4 border-[#d3eaff] bg-white aspect-21/9 lg:aspect-4/5 w-full lg:max-w-70 xl:max-w-90 transition-transform duration-300 hover:scale-105">
      <img
        src="/Images/Campus/MCSExit.JPG"
        alt="Student applying"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <span className="absolute bottom-4 left-4 bg-white/75 px-4 py-2 rounded-full hidden lg:flex items-center gap-2 text-sm font-medium text-primarydark shadow">
        <UserPlus size={16} /> New Admission
      </span>
    </div>
  </div>

  {/* 🖥️ Center Content (Text) */}
  <div className="px-5 min-[480px]:px-8 sm:px-12 md:px-20 lg:px-8 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-poppins font-semibold mb-5 text-gray-900 leading-8 sm:leading-12 tracking-wide">
      Admissions are{" "}
      <span className="text-primary font-bold">NOW OPEN</span> for 2025–26
    </h2>
    <p className="text-gray-700 mb-6 text-base sm:text-lg w-full font-inter">
      Join our vibrant learning community at MCS! Applications are open for Pre-Primary to Senior Secondary levels. Secure your child’s future with expert faculty, holistic education, and world-class facilities. <span className="font-semibold"><i>Join MCS Today- where Futures begin and Greatness grows!</i></span>
    </p>

    <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full justify-center lg:justify-start">
      <div className="flex items-center gap-2 bg-white/90 px-4 py-3 rounded-lg shadow hover:shadow-lg transition-all duration-300">
        <CalendarDays size={22} className="text-secondarydark" />
        <span className="font-medium text-gray-900">Admissions Closes: July 31, 2025</span>
      </div>
      <div className="flex items-center gap-2 bg-white/90 px-4 py-3 rounded-lg shadow hover:shadow-lg transition-all duration-300">
        <Clock size={22} className="text-secondarydark" />
        <span className="font-medium text-gray-900">Only Limited Seats Left</span>
      </div>
    </div>

    <a
      href="/admissions"
      className="group inline-flex items-center gap-2 bg-primary text-white px-6 py-2 text-outfit text-base md:text-lg font-medium cursor-pointer rounded-full shadow-lg hover:bg-secondarydark transition-all duration-300 ease-in-out hover:font-semibold hover:scale-105"
    >
      <Mail size={20} />
      Apply Now
      <ArrowRight size={20} />
    </a>
  </div>

  {/* ➡️ Right Image (Desktop) */}
  <div className="flex sm:hidden lg:flex w-full lg:w-1/3 justify-start">
    <div className="relative lg:rounded-tr-[60px] lg:rounded-bl-[120px] overflow-hidden shadow-lg lg:border-4 border-[#d3eaff] bg-white aspect-21/9 lg:aspect-4/5 w-full lg:max-w-70 xl:max-w-90 transition-transform duration-300 hover:scale-105">
      <img
        src="/Images/Campus/NewHostel.JPG"
        alt="Student at desk"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <span className="absolute top-4 right-4 bg-white/75 px-4 py-2 rounded-full hidden lg:flex items-center gap-2 text-sm font-medium text-primarydark shadow">
        <UserPlus size={16} /> Enroll Today
      </span>
    </div>
  </div>

  {/* 📱 Mobile Layout: Both Images Side by Side on Top */}
  
</div>

    </section>
  )
}

export default Admission