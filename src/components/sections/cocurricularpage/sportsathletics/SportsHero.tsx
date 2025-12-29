"use client";
import React from "react";

const SportsHeroA = () => {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('/Images/Sample/SportsH.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Text */}
      <div className="relative z-10 max-w-7xl px-6">
        <h1 className="text-white font-extrabold text-5xl md:text-8xl tracking-tight leading-tight">
          PUSH. PLAY. REPEAT.
        </h1>
        <p className="mt-6 text-white/80 text-lg md:text-2xl font-light">
          Because greatness is built — one session at a time.
        </p>
      </div>
    </section>
  );
};

export default SportsHeroA;









// "use client";
// import React from "react";

// const SportsHero: React.FC = () => {
//   return (
//     <section className="relative w-full bg-[#E9FF4A] overflow-hidden">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-6 py-20 items-center">
        
//         {/* TEXT SIDE */}
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//             Unlock Your True <span className="text-[#0E0E0E] underline decoration-[#FF431E]">Sports Potential</span>
//           </h1>

//           <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed">
//             From playground curiosity to professional ambition — sports at MCS 
//             build strength, confidence, and discipline while making learning active and joyful.
//           </p>

//           <div className="flex gap-4">
//             <button className="px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-[#FF431E] transition">
//               Explore Programs
//             </button>
//             <button className="px-6 py-3 rounded-full border border-black text-black font-medium hover:bg-black hover:text-white transition">
//               View Facilities
//             </button>
//           </div>
//         </div>

//         {/* IMAGE SIDE */}
//         <div className="relative">
//           <img
//             src="/Images/Sports/hero-tennis.png"
//             alt="Sports Hero"
//             className="w-full rounded-3xl object-cover shadow-xl"
//           />
//           <span className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
//             ⚡ Active. Confident. Future-ready.
//           </span>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default SportsHero;









