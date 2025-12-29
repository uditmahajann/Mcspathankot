"use client"

import React from "react"
import CtaButton from "../../interface/CtaButton"

const partners = [
  {
    name: "SOF",
    logo: "/Images/Logos/Sof.jpg",
    alt: "SOF Logo",
  },
  {
    name: "NSTSE",
    logo: "/Images/Logos/Nstse.jpg",
    alt: "NSTSE Logo",
  },
  {
    name: "Silverzone",
    logo: "/Images/Logos/Silverzone.png",
    alt: "Silverzone Logo",
  },
  {
    name: "Unified Council",
    logo: "/Images/Logos/Unified.png",
    alt: "Unified Council Logo",
  },
  {
    name: "Uolo",
    logo: "/Images/Logos/Uolo.jpeg",
    alt: "Uolo Logo",
  },
  {
    name: "Anganwadi",
    logo: "/Images/Logos/Anganwadi.png",
    alt: "Anganwadi Logo",
  },
  {
    name: "IPN",
    logo: "/Images/Logos/Ipn.png",
    alt: "IPN Logo",
  },
  {
    name: "StudentExc",
    logo: "/Images/Logos/Studentexchange.png",
    alt: "Student Exchange Logo",
  },
]

const Partnerships: React.FC = () => {
  return (
    <section
      className="relative bg-white py-4 sm:py-10 my-10"
    >
      <div className="mx-auto max-w-6xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            School Community{" "}
            <span className="relative inline-block">
              Engagements
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[80%] -bottom-4 sm:-bottom-6"
              />
            </span>
          </h2>
          <p className="mt-3 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Our strong community partnerships help extend learning beyond classrooms and enrich student experiences through local collaborations.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-col gap-6 sm:gap-12 items-center">
          {/* First Row - 5 logos */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="p-1 sm:p-3 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ minWidth: 90, minHeight: 60 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="h-15 sm:h-20 w-auto object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partnerships