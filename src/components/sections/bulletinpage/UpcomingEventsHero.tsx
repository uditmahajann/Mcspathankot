import type React from "react";

const UpcomingEventsHero: React.FC = () => {
  return (
    <section className="relative text-white">
      <div
        className="relative min-h-[60vh] md:min-h-[65vh] flex items-center"
        style={{
          backgroundImage: `url('/Images/Heros/eventshero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // parallax-like
        }}
      >
        {/* left-to-right overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-transparent" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <span className="text-sm tracking-widest uppercase font-semibold text-white/80">News & Events</span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold leading-tight">
                Discover What’s <span className="text-red-400">Happening </span>at MCS<br className="hidden sm:block" />
                
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/85">
                 Stay informed with a complete schedule of upcoming events — cultural, academic, and co-curricular, that enrich student life.
              </p>

              {/* <div className="sm:mt-2 md:mt-6 flex items-center gap-4">
                <a
                  href="/curriculum/academic-courses"
                  className="group inline-flex items-center px-6 py-2 md:py-3 text-outfit font-medium text-white bg-primary rounded-lg transition-all duration-300 ease-in-out hover:font-semibold cursor-pointer hover:bg-blue-600"
                >
                  Find Courses
                </a>
                <a
                  href="/about/history"
                  className="group inline-flex items-center px-6 py-2 md:py-3 text-outfit font-medium bg-white/15 backdrop-blur rounded-lg transition-all duration-300 ease-in-out hover:font-semibold cursor-pointer hover:bg-white/25"
                >
                  Our History
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsHero;



// import type React from "react"

// interface AboutHeroProps {
//   schoolName: string
//   foundingYear: number
//   tagline?: string
// }

// const UpcomingEventsHero: React.FC<AboutHeroProps> = ({ schoolName, foundingYear, tagline }) => {
  

//   return (
//     <>
//       <section className="relative overflow-hidden pb-0 text-white">
//         <div
//         className="relative z-10 flex flex-col items-center justify-center text-center py-10 bg-gradient-to-r from-blue-900 to-indigo-800"
//         style={{
//           clipPath: "ellipse(100% 90% at 50% 0%)", // Curves only the bottom
//         }}
//       >
//         {/* Decorative elements */}
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
//           <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400"></div>
//           <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-indigo-500"></div>
//           <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-blue-600"></div>
//         </div>

//         {/* Content */}
//         <div className="relative mx-auto px-5 min-[480px]:px-12 sm:px-10 py-10 sm:py-16 md:py-20 z-10">
//           <div className="mx-auto max-w-3xl text-center">
//             {/* <span className="inline-block px-5 py-2 mb-8 text-sm font-medium rounded-full bg-primary bg-opacity-30 text-blue-100">
//               Engage. Discover. Stay Informed.
//             </span> */}
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold leading-16">
//               Discover <span className="text-blue-300">What’s Happening at MCS</span>
//             </h1>
//             <p className="mt-6 mb-12 text-xl text-blue-100">
//               Stay informed with a complete schedule of upcoming events — cultural, academic, and co-curricular, that enrich student life.
//             </p>
//           </div>
//         </div>
//         </div>
    
//       </section>

//     </>
//   )
// }

// export default UpcomingEventsHero
