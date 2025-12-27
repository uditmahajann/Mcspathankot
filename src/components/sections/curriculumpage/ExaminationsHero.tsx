import type React from "react";

const ExaminationsHero: React.FC = () => {
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
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <span className="text-sm tracking-widest uppercase font-semibold text-white/80">Academic Assessments</span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold leading-tight">
                Exam<span className="text-sky-400"> Schedule</span> and Guidelines<br className="hidden sm:block" />
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/85">
                Our examination system is structured to test knowledge, encourage consistent learning, and prepare students for future challenges.
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

export default ExaminationsHero;




// import type React from "react"
// import { MapPin, Phone, Mail, Clock } from "lucide-react"

// const CurriculumHero: React.FC = () => {
//   return (
//     <section className="relative overflow-hidden pb-0 text-white">

//       <div
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

//         {/* Background Pattern */}
//         {/* <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-0 w-full h-full">
//           {[...Array(10)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute rounded-full bg-white"
//               style={{
//                 width: `${Math.random() * 300 + 50}px`,
//                 height: `${Math.random() * 300 + 50}px`,
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 opacity: Math.random() * 0.5,
//               }}
//             />
//           ))}
//         </div>
//       </div> */}

//         <div className="relative mx-auto px-5 min-[480px]:px-12 sm:px-10 py-10 sm:py-16 z-10">
//           <div className="max-w-5xl mx-auto text-center mb-12">
//               <div className="mx-auto max-w-5xl text-center">
//                 {/* <span className="inline-block px-5 py-2 mb-8 text-sm font-medium rounded-full bg-primary bg-opacity-30 text-blue-100">
//                   Connect With Us Now!
//                 </span> */}
//                 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold leading-16">
//                   Exam Schedules <span className="text-blue-300">and Evaluation Methods</span>
//                 </h1>
//                 <p className="mt-6 mb-12 text-xl text-blue-100">
//                   Our examination system is structured to test knowledge, encourage consistent learning, and prepare students for future challenges.
//                 </p>
//               </div>
            

//             <div className="flex flex-wrap justify-center gap-4 mt-8">
//               <a
//                 href="#contact-form"
//                 className="bg-white hover:bg-blue-300 hover:border-2 hover:border-white text-primarydark hover:text-white transition-colors px-6 py-2.5 rounded-full font-outfit font-semibold"
//               >
//                 Download Brochure
//               </a>
//               <a
//                 href="#location"
//                 className="bg-transparent border-2 border-white hover:bg-white/10 transition-colors px-6 py-2.5 rounded-full font-outfit font-semibold"
//               >
//                 Schedule a Visit
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
// export default CurriculumHero