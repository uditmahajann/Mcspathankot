"use client";

import type React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[680px] flex items-center"
      style={{
        backgroundImage: `url('/Images/Academics/Kindergartenhero.png')`, // replace with your image path
      }}
    >
      {/* Soft overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-80 -mt-15 flex flex-col text-left">
        <span className="inline-block tracking-wide uppercase font-outfit font-semibold text-orange-500  mb-4">
          Kindergarten School • Early Years • Ages 3–6
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-raleway font-extrabold leading-tight text-gray-900">
          A joyful start to learning
          <br />
          <span className="text-amber-500 font-extrabold">for little explorers</span>
        </h1>

        <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          Our kindergarten school blends play, purpose, and personalized attention — helping children grow happy and confident.
        </p>

        {/* <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/admissions/apply-online"
            className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow-md transition"
          >
            Apply Now
          </a>
          <a
            href="/admissions/schedule-visit"
            className="inline-block bg-white/90 text-blue-800 border border-blue-100 hover:bg-blue-50 font-medium px-6 py-3 rounded-full shadow-sm transition"
          >
            Book a Tour
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;





// import React from "react";

// type HeroProps = {
//   title?: string;
//   subtitle?: string;
//   ctaPrimaryHref?: string;
//   ctaSecondaryHref?: string;
//   bgImage?: string;
//   heightClass?: string; // e.g. "h-[420px]" or "h-[600px]"
// };

// const KindergartenHero: React.FC<HeroProps> = ({
//   title = "Kindergarten at Montessori Cambridge School",
//   subtitle = "Play-based learning • Gentle guidance • A joyful start to lifelong learning",
//   ctaPrimaryHref = "/admissions/apply-online",
//   ctaSecondaryHref = "/contact",
//   bgImage = "/Images/Academics/Kinderhero.jpg",
//   heightClass = "h-[520px]",
// }) => {
//   return (
//     <section className={`relative w-full overflow-hidden ${heightClass} md:${heightClass}`}>
//       {/* Background image */}
//       <div
//         aria-hidden
//         className="absolute inset-0 bg-center bg-cover -z-10"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//         }}
//       />

//       {/* soft dark overlay for readability */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/45 -z-5" />

//       <div className="container mx-auto px-4 md:px-8 h-full flex items-center">
//         <div className="max-w-3xl text-white">
//           <p className="text-sm md:text-base font-medium uppercase tracking-wider text-blue-100/90">
//             Early Years • Ages 3–6
//           </p>

//           <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-sm">
//             {title.split("•")[0] || title}
//             <span className="block text-blue-200 mt-2 text-3xl sm:text-4xl lg:text-5xl">
//               {title.includes("•") ? title.split("•").slice(1).join("•") : ""}
//             </span>
//           </h1>

//           <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl">
//             {subtitle}
//           </p>

//           <div className="mt-6 flex flex-wrap gap-3">
//             <a
//               href={ctaPrimaryHref}
//               className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-3 rounded-lg shadow"
//             >
//               Enquire / Apply
//             </a>

//             <a
//               href={ctaSecondaryHref}
//               className="inline-block bg-white/90 text-blue-900 font-medium px-5 py-3 rounded-lg shadow-sm"
//             >
//               Schedule a tour
//             </a>
//           </div>

//           {/* optional highlights */}
//           <div className="mt-6 flex flex-wrap gap-4 text-sm text-blue-100">
//             <div className="flex items-center gap-2">
//               <span className="inline-block w-2 h-2 rounded-full bg-emerald-300" />
//               Safe & nurturing environment
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="inline-block w-2 h-2 rounded-full bg-amber-300" />
//               Montessori-inspired play & exploration
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="inline-block w-2 h-2 rounded-full bg-indigo-300" />
//               Trained early-years educators
//             </div>
//           </div>
//         </div>

//         {/* decorative / illustrative right side (hidden on mobile) */}
//         <div className="hidden md:block ml-auto max-w-sm">
//           <div className="rounded-2xl overflow-hidden shadow-2xl w-[320px] h-[320px] bg-white/5 backdrop-blur-sm border border-white/10" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KindergartenHero;
