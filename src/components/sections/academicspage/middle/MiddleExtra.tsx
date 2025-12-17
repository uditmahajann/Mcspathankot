"use client";

import React from "react";

const ENRICHMENTS = [
  {
    id: 1,
    title: "Sports Education & Gym Activities",
    description:
      "Fun fitness sessions designed to build coordination, teamwork, and confidence through movement.",
    image: "/Images/Sample/Kidsplay.jpg",
    bg: "",
  },
  {
    id: 2,
    title: "STEM & Innovation Lab",
    description:
      "Hands-on experiments, robotics, and model-building nurture logical and creative thinking.",
    image: "",
    bg: "bg-purple-300",
  },
  {
    id: 3,
    title: "Music, Rhythm & Dance",
    description:
      "Children move to beats, sing songs, and learn rhythm — building confidence and joy through music.",
    image: "/Images/Sample/Kidsplay.jpg",
    bg: "",
  },
  {
    id: 4,
    title: "Theatre & Public Speaking",
    description:
      "Creative performances boost confidence, communication, and leadership.",
    image: "",
    bg: "bg-lime-200",
  },
  {
    id: 5,
    title: "Storytelling & Puppet Theatre",
    description:
      "Interactive storytelling that sparks imagination, builds language, and teaches life lessons with fun.",
    image: "/Images/Sample/Kidsplay.jpg",
    bg: "",
  },
  {
    id: 6,
    title: "Life Skills & Wellness",
    description:
      "Sessions on mindfulness, values, and empathy help shape responsible and balanced individuals.",
    image: "",
    bg: "bg-rose-300",
  },
];

const EnrichmentExtras: React.FC = () => {
  return (
    <section id="enrichment-extras" className="bg-white">
      <div className="mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {ENRICHMENTS.map((item, index) => (
            <div
              key={item.id}
              className={`relative group ${
                index % 2 === 0 ? "" : item.bg
              } flex flex-col justify-center items-center text-center p-0 transition-all hover:scale-[1.02]`}
            >
              {index % 2 === 0 ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <>
                  <h3 className="text-lg sm:text-2xl font-poppins font-semibold tracking-wide text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-inter text-lg leading-relaxed max-w-sm mx-auto px-5">
                    {item.description}
                  </p>
                </>
              )}

              {/* Subtle overlay effect on hover */}
              {index % 2 === 0 && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnrichmentExtras;




// // EnrichmentExtras.tsx
// "use client";

// import React from "react";
// import {
//   Music,
//   Palette,
//   TreePine,
//   BusFront,
//   Smile,
//   Heart,
//   Leaf,
//   Sparkles,
// } from "lucide-react";

// type Enrichment = {
//   id: string;
//   icon: React.ComponentType<any>;
//   title: string;
//   description: string;
//   image: string;
//   color: string; // gradient background for icon
// };

// const ENRICHMENT_AREAS: Enrichment[] = [
//   {
//     id: "music",
//     icon: Music,
//     title: "Music & Movement",
//     description:
//       "Singing, rhythm, and creative movement sessions that nurture coordination, self-expression, and joy.",
//     image: "/Images/Kindergarten/music.jpg",
//     color: "from-pink-400 to-rose-500",
//   },
//   {
//     id: "art",
//     icon: Palette,
//     title: "Creative Art Studio",
//     description:
//       "Finger painting, collage, clay modeling and color play — every child becomes an artist in their own way.",
//     image: "/Images/Kindergarten/art.jpg",
//     color: "from-amber-400 to-orange-500",
//   },
//   {
//     id: "nature",
//     icon: TreePine,
//     title: "Nature Walks & Gardening",
//     description:
//       "Children grow plants, water gardens and observe butterflies — developing care and wonder for the natural world.",
//     image: "/Images/Kindergarten/nature.jpg",
//     color: "from-green-400 to-emerald-500",
//   },
//   {
//     id: "fieldtrips",
//     icon: BusFront,
//     title: "Field Trips & Excursions",
//     description:
//       "Fun, educational trips to farms, museums and parks to connect classroom learning with real-world experiences.",
//     image: "/Images/Kindergarten/trip.jpg",
//     color: "from-sky-400 to-blue-500",
//   },
//   {
//     id: "mindfulness",
//     icon: Smile,
//     title: "Mindfulness & Wellbeing",
//     description:
//       "Simple breathing, gratitude circles and quiet reflection help children build emotional awareness and calm.",
//     image: "/Images/Kindergarten/mindfulness.jpg",
//     color: "from-purple-400 to-violet-500",
//   },
//   {
//     id: "values",
//     icon: Heart,
//     title: "Values & Empathy Sessions",
//     description:
//       "Story-based learning to cultivate kindness, sharing and respect — the heart of our classroom community.",
//     image: "/Images/Kindergarten/values.jpg",
//     color: "from-red-400 to-pink-500",
//   },
// ];

// const EnrichmentExtras: React.FC = () => {
//   return (
//     <section id="enrichment-extras" className="relative py-20 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
//       {/* Soft Background Shapes */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 opacity-20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-14">
//           <h2 className="text-3xl sm:text-4xl font-playpen font-semibold text-gray-900">
//             Enrichment & Extras
//           </h2>
//           <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
//             Beyond academics — our enrichment activities nurture creativity, curiosity, kindness, and connection
//             with the world around them.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {ENRICHMENT_AREAS.map((item) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={item.id}
//                 className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1"
//               >
//                 {/* Image */}
//                 <div className="h-44 w-full overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     loading="lazy"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="flex items-center gap-4 mb-3">
//                     <div
//                       className={`flex h-12 w-12 rounded-xl items-center justify-center text-white bg-gradient-to-br ${item.color}`}
//                     >
//                       <Icon className="h-6 w-6" />
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
//                   </div>
//                   <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
//                 </div>

//                 {/* Fun sparkle overlay on hover */}
//                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
//                   <Sparkles className="h-5 w-5 text-yellow-400" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Footer CTA */}
//         <div className="mt-14 text-center">
//           <h3 className="text-lg sm:text-xl font-playpen text-gray-800 mb-4">
//             “Learning at MCS Kindergarten is a celebration — full of colors, songs and smiles!”
//           </h3>
//           <a
//             href="/contact#visit"
//             className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-medium shadow"
//           >
//             Schedule a School Tour
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EnrichmentExtras;
