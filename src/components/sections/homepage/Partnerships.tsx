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
  const firstRow = partners.slice(0, 5)
  const secondRow = partners.slice(5)

  return (
    <section
      className="h-full px-5 min-[480px]:px-12 sm:px-10 py-35 my-10 bg-no-repeat bg-cover bg-center sm:bg-[url('/Svg/PaperTorn.svg')] bg-[url('/Svg/PaperTornM.svg')]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl text-gray-900 md:text-4xl font-playpen font-medium">
            School Community{" "}
            <span className="relative inline-block">
              Engagements
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute left-8 -bottom-4 sm:-bottom-6 md:-bottom-8 xl:-bottom-9"
              />
            </span>
          </h2>
          <p className="mt-5 sm:mt-8 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Our strong community partnerships help extend learning beyond classrooms and enrich student experiences through local collaborations.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-col gap-6 sm:gap-12 mb-20 items-center">
          {/* First Row - 5 logos */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {firstRow.map((partner) => (
              <div
                key={partner.name}
                className="bg-white/80 rounded-lg sm:rounded-xl px-1 sm:px-4 py-1 sm:py-3 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-2xl"
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

          {/* Second Row - 3 logos */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {secondRow.map((partner) => (
              <div
                key={partner.name}
                className="bg-white/80 rounded-lg sm:rounded-xl px-1 sm:px-4 py-2 sm:py-3 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-2xl"
                style={{ minWidth: 90, minHeight: 60 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="h-14 sm:h-20 w-auto object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 sm:mt-10 flex items-center justify-center">
          <CtaButton text="Connect as a Community Partner" href="" />
        </div>
      </div>
    </section>
  )
}

export default Partnerships