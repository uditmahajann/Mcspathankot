"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
};

const slides: Slide[] = [
  {
    src: "/Images/Sample/Kidsdance.jpg",
    alt: "Kids running in fancy dress race",
    title: "Sports Day Fun",
    caption:
      "Tiny racers, big smiles — our annual sports day is packed with joy and teamwork.",
  },
  {
    src: "/Images/Sample/Kidsplay.jpg",
    alt: "Children painting together",
    title: "Creative Studio",
    caption:
      "Hands-on art and sensory play to develop fine motor skills and imagination.",
  },
  {
    src: "/Images/Sample/Kidsdance.jpg",
    alt: "Children gardening",
    title: "Nature Time",
    caption:
      "Gardening & outdoor exploration to build curiosity about the natural world.",
  },
];

const KindergartenCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Optional autoplay
  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => next(), 7000);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index]);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex items-center py-30"
      style={{
        backgroundImage: `url('/Images/Academics/Kinderhighlights.png')`, // background image
      }}
    >
      <div className="relative w-full px-0 sm:px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Kindergarten Highlights
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Everyday is an adventure! — snapshots from classroom fun, outdoor play and special events.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-[60%] rounded-2xl shadow-2xl overflow-hidden">
          {/* Left arrow */}
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-white/90 transition cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          {/* Slides */}
          <div className="relative w-full min-h-[380px] md:min-h-[550px] ">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  i === index
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95 z-0"
                }`}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading={i === index ? "eager" : "lazy"}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            aria-label="Next slide"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-white/90 transition cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default KindergartenCarousel;





// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// type Slide = {
//   src: string;
//   alt: string;
//   title?: string;
//   caption?: string;
// };

// const slides: Slide[] = [
//   {
//     src: "/Images/Sample/Kidsdance.jpg",
//     alt: "Kids running in fancy dress race",
//     title: "Sports Day Fun",
//     caption:
//       "Tiny racers, big smiles — our annual sports day is packed with joy and teamwork.",
//   },
//   {
//     src: "/Images/Sample/Kidsplay.jpg",
//     alt: "Children painting together",
//     title: "Creative Studio",
//     caption:
//       "Hands-on art and sensory play to develop fine motor skills and imagination.",
//   },
//   {
//     src: "/Images/Sample/Kidsdance.jpg",
//     alt: "Children gardening",
//     title: "Nature Time",
//     caption:
//       "Gardening & outdoor exploration to build curiosity about the natural world.",
//   },
// ];

// const KindergartenCarousel: React.FC = () => {
//   const [index, setIndex] = useState(0);
//   const timerRef = useRef<number | null>(null);

//   const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
//   const next = () => setIndex((i) => (i + 1) % slides.length);

//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "ArrowLeft") prev();
//       if (e.key === "ArrowRight") next();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   useEffect(() => {
//     if (timerRef.current) window.clearTimeout(timerRef.current);
//     timerRef.current = window.setTimeout(() => next(), 7000);
//     return () => {
//       if (timerRef.current) window.clearTimeout(timerRef.current);
//     };
//   }, [index]);

//   return (
//     <section
//       className="relative bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center py-25 overflow-hidden"
//       style={{
//         backgroundImage: `url('/Images/Academics/Giraffe.png')`, // giraffe & stars bg
//       }}
//     >
//       {/* Header (centered) */}
//       <div className="text-center mb-10 sm:mb-12 px-4">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
//           Kindergarten Highlights
//         </h2>
//         <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
//           Everyday is an adventure! — snapshots from classroom fun, outdoor play and special events.
//         </p>
//       </div>

//       {/* Carousel (shifted to right) */}
//       <div className="relative w-full flex justify-end pr-6 sm:pr-10 lg:pr-70 -z-10">
//         <div className="relative w-[90%] sm:w-[80%] lg:w-[70%] rounded-2xl shadow-2xl overflow-hidden">
//           {/* Left Arrow */}
//           <button
//             aria-label="Previous slide"
//             onClick={prev}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-white/90 transition cursor-pointer"
//           >
//             <ChevronLeft className="w-5 h-5 text-gray-900" />
//           </button>

//           {/* Slides */}
//           <div className="relative w-full min-h-[380px] md:min-h-[550px]">
//             {slides.map((s, i) => (
//               <div
//                 key={i}
//                 className={`absolute inset-0 transition-all duration-700 ease-in-out ${
//                   i === index
//                     ? "opacity-100 scale-100 z-10"
//                     : "opacity-0 scale-95 z-0"
//                 }`}
//               >
//                 <img
//                   src={s.src}
//                   alt={s.alt}
//                   loading={i === index ? "eager" : "lazy"}
//                   className="w-full h-full object-cover rounded-2xl"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             aria-label="Next slide"
//             onClick={next}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-white/90 transition cursor-pointer"
//           >
//             <ChevronRight className="w-5 h-5 text-gray-900" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KindergartenCarousel;





// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// type Slide = {
//   src: string;
//   alt: string;
//   title?: string;
//   caption?: string;
// };

// const slides: Slide[] = [
//   {
//     src: "/Images/Sample/Kidsdance.jpg",
//     alt: "Kids running in fancy dress race",
//     title: "Sports Day Fun",
//     caption: "Tiny racers, big smiles — our annual sports day is packed with joy and teamwork.",
//   },
//   {
//     src: "/Images/Sample/Kidsplay.jpg",
//     alt: "Children painting together",
//     title: "Creative Studio",
//     caption: "Hands-on art and sensory play to develop fine motor skills and imagination.",
//   },
//   {
//     src: "/Images/Sample/Kidsdance.jpg",
//     alt: "Children gardening",
//     title: "Nature Time",
//     caption: "Gardening & outdoor exploration to build curiosity about the natural world.",
//   },
// ];

// const KindergartenCarousel: React.FC = () => {
//   const [index, setIndex] = useState(0);
//   const timerRef = useRef<number | null>(null);

//   const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
//   const next = () => setIndex((i) => (i + 1) % slides.length);

//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "ArrowLeft") prev();
//       if (e.key === "ArrowRight") next();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   // Optional autoplay (remove if not needed)
//   useEffect(() => {
//     if (timerRef.current) window.clearTimeout(timerRef.current);
//     timerRef.current = window.setTimeout(() => next(), 7000);
//     return () => {
//       if (timerRef.current) window.clearTimeout(timerRef.current);
//     };
//   }, [index]);

//   return (
//     <section
//       className="relative bg-cover bg-center bg-no-repeat flex items-center py-20"
//       style={{
//         backgroundImage: `url('/Images/Academics/Giraffe.png')`, // replace with your image path
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-10 sm:mb-12">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
//             Kindergarten Highlights
//           </h2>
//           <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
//             Everyday is an adventure! — snapshots from classroom fun, outdoor play and special events.
//           </p>
//         </div>

//         {/* Carousel */}
//         <div className="relative rounded-xl shadow-2xl overflow-hidden">
//           {/* Left arrow */}
//           <button
//             aria-label="Previous slide"
//             onClick={prev}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-white/90 transition cursor-pointer"
//           >
//             <ChevronLeft className="w-5 h-5 text-gray-900" />
//           </button>

//           {/* Image slides */}
//           <div className="relative w-full min-h-[350px] md:min-h-[520px]">
//             {slides.map((s, i) => (
//               <div
//                 key={i}
//                 className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
//                   i === index ? "opacity-100 z-10" : "opacity-0 z-0"
//                 }`}
//               >
//                 <img
//                   src={s.src}
//                   alt={s.alt}
//                   loading={i === index ? "eager" : "lazy"}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Right arrow */}
//           <button
//             aria-label="Next slide"
//             onClick={next}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-white/90 transition cursor-pointer"
//           >
//             <ChevronRight className="w-5 h-5 text-gray-900" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KindergartenCarousel;


