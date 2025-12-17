import type React from "react";

const HistoryHero: React.FC = () => {
  return (
    <section className="relative text-white">
      <div
        className="relative min-h-[60vh] md:min-h-[65vh] flex items-center"
        style={{
          backgroundImage: `url('/Images/Campus/EntryFront.JPG')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // parallax-like
        }}
      >
        {/* left-to-right overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <span className="text-sm tracking-widest uppercase font-semibold text-white/80">Our History</span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold leading-tight">
                A <span className="text-blue-400">Legacy</span> of Inspiring<br className="hidden sm:block" />
                Excellence
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/85">
                Founded in 1997, MCS continues to uphold its mission of academic excellence, holistic development, and a tradition of innovation in education.
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

export default HistoryHero;



// import type React from "react";

// const HistoryHero_Parallax: React.FC = () => {
//   const backgroundImage = "/Images/backgrounds/school-campus.jpg";
//   return (
//     <section className="relative text-white">
//       <div
//         className="relative min-h-[75vh] md:min-h-[85vh] flex items-center"
//         style={{
//           backgroundImage: `url('/Images/Campus/EntryFront.JPG')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed", // parallax-like
//         }}
//       >
//         <div className="absolute inset-0 bg-black/40" />
//         <div className="relative z-10 w-full">
//           <div className="mx-auto max-w-6xl px-5 sm:px-8">
//             <div className="max-w-2xl">
//               <span className="text-xs tracking-widest uppercase text-white/80">Montessori Cambridge School</span>
//               <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold leading-tight">
//                 Learn • Grow • Excel
//               </h1>
//               <p className="mt-4 text-white/85">
//                 Where curiosity meets guidance and every day sparks discovery.
//               </p>
//               <a
//                 href="/admissions"
//                 className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold hover:bg-blue-700 transition"
//               >
//                 Admissions
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HistoryHero_Parallax;






// import type React from "react";

// const HistoryHero: React.FC = () => {
//   return (
//     <section className="relative overflow-hidden pb-0 text-white">
//       <div
//         className="relative z-10 flex flex-col items-center justify-center text-center py-10"
//         style={{
//           backgroundImage: `url('/Images/Campus/EntryFront.JPG')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >

//         {/* Dark overlay for readability */}
//         {/* <div className="absolute inset-0 bg-black/50"></div> */}


//         {/* Decorative circles */}
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-50">
//           {/* <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400"></div> */}
//           {/* <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-indigo-500"></div> */}
//           <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-black"></div>
//         </div>

//         {/* Content */}
//         <div className="relative mx-auto px-5 min-[480px]:px-12 sm:px-10 py-10 sm:py-16 md:py-20 z-10">
//           <div className="mx-auto max-w-3xl text-center">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold leading-16">
//               About <span className="text-blue-300">Montessori Cambridge School</span>
//             </h1>
//             <p className="mt-6 mb-4 text-xl text-blue-100">
//               Nurturing minds, building character, and inspiring excellence since 1997
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HistoryHero;



// import type React from "react"

// interface AboutHeroProps {
//   schoolName: string
//   foundingYear: number
//   tagline?: string
// }

// const HistoryHero: React.FC<AboutHeroProps> = ({ schoolName, foundingYear, tagline }) => {

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
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold leading-16">
//               About <span className="text-blue-300">Montessori Cambridge School</span>
//             </h1>
//             <p className="mt-6 mb-12 text-xl text-blue-100">
//               {tagline || "Nurturing minds, building character, and inspiring excellence for generations."}
//             </p>
//           </div>
//         </div>
//         </div>
//       </section>

//     </>
//   )
// }

// export default HistoryHero