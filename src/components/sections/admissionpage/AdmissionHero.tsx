import type React from "react"

interface AboutHeroProps {
  schoolName: string
  foundingYear: number
  tagline?: string
}

const AdmissionHero: React.FC<AboutHeroProps> = ({ schoolName, foundingYear, tagline }) => {
  

  return (
    <>
      <section className="relative overflow-hidden pb-0 text-white">
        <div
        className="relative z-10 flex flex-col items-center justify-center text-center py-10 bg-linear-to-r from-blue-900 to-indigo-800"
        style={{
          clipPath: "ellipse(100% 90% at 50% 0%)", // Curves only the bottom
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400"></div>
          <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-indigo-500"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-blue-600"></div>
        </div>

        {/* Content */}
        <div className="relative mx-auto px-5 min-[480px]:px-12 sm:px-10 py-10 sm:py-16 md:py-20 z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block px-5 py-2 mb-8 text-sm font-medium rounded-full bg-primary bg-opacity-30 text-blue-100">
              Choosing the Right School Matters
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold leading-16">
              Admission <span className="text-blue-300">at MCS</span>
            </h1>
            <p className="mt-6 mb-12 text-xl text-blue-100">
              We invite families to be part of a learning community where academic excellence meets personal growth. Let’s build the future together.

            </p>
          </div>
        </div>
        </div>
    
      </section>

    </>
  )
}

export default AdmissionHero
