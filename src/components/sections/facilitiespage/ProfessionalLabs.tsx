"use client";

import React from "react";
import CtaButton from "../..//interface/CtaButton";
import {
  Atom,
  FlaskConical,
  Microscope,
  Calculator,
  Laptop,
  Bot,
  ArrowRight,
} from "lucide-react";

const labs = [
  {
    id: "physics",
    icon: Atom,
    title: "Physics Lab",
    image: "/Images/Campus/NewHostel.JPG",
    desc:
      "A hands-on environment for learning mechanics, motion, electricity, optics, and energy.",
    features: [
      "Laser and light experiments",
      "Electric circuits and electromagnetism setups",
      "Precision measurement and timing systems",
      "Board-exam aligned lab workbooks",
    ],
    outcome:
      "Students verify theories, analyze real data, and strengthen scientific reasoning.",
  },
  {
    id: "chemistry",
    icon: FlaskConical,
    title: "Chemistry Lab",
    image: "/Images/Campus/NewHostel.JPG",
    desc:
      "A fully equipped space designed for safe exploration of reactions, compounds, and chemical behaviour.",
    features: [
      "Fume hood and ventilation systems",
      "Digital pH meters and titration instruments",
      "Reagent-safe storage and safety cabinets",
      "Mandatory protective equipment",
    ],
    outcome:
      "Learners master lab safety, accurate measurement, and analytical methods.",
  },
  {
    id: "biology",
    icon: Microscope,
    title: "Biology Lab",
    image: "/Images/Campus/NewHostel.JPG",
    desc:
      "A discovery-based learning space to study life systems from cells to ecosystems.",
    features: [
      "High-resolution microscopes",
      "Prepared slides and lab specimens",
      "DNA model kits and dissection tools",
      "Research corner for advanced study",
    ],
    outcome:
      "Students strengthen observation, classification, and scientific documentation skills.",
  },
  {
    id: "math",
    icon: Calculator,
    title: "Mathematics Lab",
    image: "/Images/Campus/NewHostel.JPG",
    desc:
      "A space for hands-on mathematical thinking through puzzles, models, and logic activities.",
    features: [
      "Geometry kits & 3D models",
      "Logical reasoning and olympiad modules",
      "Hands-on measurement tools",
      "Interactive learning corners",
    ],
    outcome:
      "Math becomes visual, memorable, and enjoyable — strengthening reasoning and problem-solving.",
  },
  {
    id: "computer",
    icon: Laptop,
    title: "Computer Science Lab",
    image: "/Images/Campus/NewHostel.JPG",
    desc:
      "A modern digital workspace where students build foundational and advanced computing skills.",
    features: [
      "Python and web development modules",
      "Cyber safety protocols",
      "Project-based coding and design learning",
      "Productivity and digital fluency tools",
    ],
    outcome:
      "Students become confident digital creators — not just technology users.",
  },
  {
    id: "robotics",
    icon: Bot,
    title: "Robotics & AI Lab",
    image: "/Images/Campus/NewHostel.JPG",
    desc:
      "A hub for hands-on engineering using robotics, electronics, and programming.",
    features: [
      "Arduino, sensors & servo motors",
      "Block and text-based coding",
      "Prototype building and testing",
      "3D printing and engineering design",
    ],
    outcome:
      "Students learn to design, build, and automate — bringing imagination to life.",
  },
];

const ProfessionalLabs = () => {
  return (
    <section className="py-20 my-10 bg-gradient-to-br from-violet-950 via-blue-900 to-indigo-950">
      <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-35">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium">
            Professional Laboratories
          </h2>
          <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-4xl mx-auto">
            Our professional laboratories provide hands-on learning experiences with state-of-the-art equipment
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {labs.map((lab) => {
            const Icon = lab.icon;
            return (
              <div
                key={lab.id}
                className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white"
              >
                <img
                  src={lab.image}
                  alt={lab.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-6 h-6 text-sky-500" />
                    <h3 className="text-xl font-poppins tracking-wide font-semibold text-gray-900">
                      {lab.title}
                    </h3>
                  </div>

                  <p className="font-inter text-gray-700 text-base mb-4">{lab.desc}</p>

                  <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside mb-4 font-inter">
                    {lab.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>

                  <p className="font-inter text-sm text-gray-800 font-medium">
                    <span className="text-green-500 font-inter font-semibold">Outcome:</span>{" "}
                    {lab.outcome}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <CtaButton text="View More Details" href="/co-curriculars/research-&-innovation" icon={ArrowRight} />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalLabs;





// "use client"

// import React from "react"
// import { FlaskRoundIcon as Flask, Atom, Microscope, Orbit, Cpu, Pyramid } from "lucide-react"

// const ProfessionalLabs = () => {
//   const labs = [
//     {
//       id: 1,
//       name: "Computer Laboratory",
//       icon: <Cpu className="w-12 h-12" />,
//       description:
//         "State-of-the-art computer labs with the latest hardware and software for programming and digital skills.",
//       features: ["High-performance computers", "Coding environments", "Design software", "Networking infrastructure"],
//       image: "/Images/Campus/NewHostel.JPG",
//       color: {
//         iconBg: "bg-blue-100",
//         iconColor: "text-blue-600",
//         tabActive: "bg-blue-50 border-l-4 border-blue-500",
//         tabInactive: "bg-gray-50 hover:bg-gray-100",
//       },
//     },
//     {
//       id: 2,
//       name: "Maths Laboratory",
//       icon: <Pyramid className="w-12 h-12" />,
//       description:
//         "A creative space for students to design, prototype, and develop innovative solutions to real-world problems.",
//       features: ["3D printers", "Prototyping tools", "Design thinking space", "Presentation area"],
//       image: "/Images/Campus/NewHostel.JPG",
//       color: {
//         iconBg: "bg-blue-100",
//         iconColor: "text-blue-600",
//         tabActive: "bg-blue-50 border-l-4 border-blue-500",
//         tabInactive: "bg-gray-50 hover:bg-gray-100",
//       },
//     },

//     {
//       id: 3,
//       name: "Physics Laboratory",
//       icon: <Orbit className="w-12 h-12" />,
//       description: "Specialized lab for robotics education with programmable robots, components, and testing areas.",
//       features: ["Robotics kits", "Programming stations", "Testing arenas", "Competition preparation area"],
//       image: "/Images/Campus/NewHostel.JPG",
//       color: {
//         iconBg: "bg-blue-100",
//         iconColor: "text-blue-600",
//         tabActive: "bg-blue-50 border-l-4 border-blue-500",
//         tabInactive: "bg-gray-50 hover:bg-gray-100",
//       },
//     },
//     {
//       id: 4,
//       name: "Biology Laboratory",
//       icon: <Atom className="w-12 h-12" />,
//       description:
//         "A creative space for students to design, prototype, and develop innovative solutions to real-world problems.",
//       features: ["3D printers", "Prototyping tools", "Design thinking space", "Presentation area"],
//       image: "/Images/Campus/NewHostel.JPG",
//       color: {
//         iconBg: "bg-blue-100",
//         iconColor: "text-blue-600",
//         tabActive: "bg-blue-50 border-l-4 border-blue-500",
//         tabInactive: "bg-gray-50 hover:bg-gray-100",
//       },
//     },
//     {
//       id: 5,
//       name: "Chemistry Laboratory",
//       icon: <Flask className="w-12 h-12" />,
//       description: "Fully equipped physics, chemistry, and biology labs with modern apparatus and safety equipment.",
//       features: ["Advanced experimental setups", "Digital measurement tools", "Safety equipment", "Demonstration area"],
//       image: "/Images/Campus/NewHostel.JPG",
//       color: {
//         iconBg: "bg-blue-100",
//         iconColor: "text-blue-600",
//         tabActive: "bg-blue-50 border-l-4 border-blue-500",
//         tabInactive: "bg-gray-50 hover:bg-gray-100",
//       },
//     },

//   ]

//   const [activeLab, setActiveLab] = React.useState(labs[0])

//   return (
//     <section id="professional-labs" className="py-10 sm:py-16 my-10 bg-gradient-to-br from-violet-950 via-blue-900 to-indigo-950">
//       <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-35">
//         <div className="text-center mb-10 sm:mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium">
//             Professional Laboratories
//           </h2>
//           <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-4xl mx-auto">
//             Our professional laboratories provide hands-on learning experiences with state-of-the-art equipment
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-12">
//           <div className="lg:w-1/3">
//             <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-30">
//               <div className="p-8">
//                 <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4 flex items-center gap-2 tracking-wide">
//                   <Microscope className="w-6 h-6" />
//                   Our Laboratories
//                 </h3>
//                 <p className="text-gray-700 mb-6 font-inter">
//                   Select a lab to learn more about the facilities and equipment available to our students.
//                 </p>

//                 <div className="space-y-3">
//                   {labs.map((lab) => (
//                     <button
//                       key={lab.id}
//                       onClick={() => setActiveLab(lab)}
//                       className={`w-full text-left p-4 rounded-lg transition-all cursor-pointer ${activeLab.id === lab.id ? lab.color.tabActive : lab.color.tabInactive
//                         }`}

//                     >
//                       <div className="flex items-center gap-3">
//                         <div className={`p-2 rounded-full ${activeLab.id === lab.id ? lab.color.iconBg : "bg-gray-200"}`}>
//                           {React.cloneElement(lab.icon, {
//                             className: `w-5 h-5 ${activeLab.id === lab.id ? lab.color.iconColor : "text-gray-700"}`,
//                           })}
//                         </div>

//                         <span className={`font-inter font-medium ${activeLab.id === lab.id ? "text-primarydark" : "text-gray-700"}`}>
//                           {lab.name}
//                         </span>
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="lg:w-2/3">
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               <div className="h-64 overflow-hidden">
//                 <img
//                   src={activeLab.image || "/placeholder.svg"}
//                   alt={`${activeLab.name} at our school`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="p-6 md:p-8">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className={`${activeLab.color.iconBg} p-3 rounded-full`}>
//                     {React.cloneElement(activeLab.icon, { className: `w-6 h-6 ${activeLab.color.iconColor}` })}
//                   </div>

//                   <h3 className="text-2xl font-poppins font-bold tracking-wide text-gray-900">{activeLab.name}</h3>
//                 </div>

//                 {/* <p className="text-gray-700 mb-6 text-lg">{activeLab.description}</p> */}

//                 <div className="mb-6">
//                   <h4 className="text-lg font-inter font-semibold text-gray-900 mb-4">Key Features:</h4>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {activeLab.features.map((feature, index) => (
//                       <div key={index} className="flex items-center gap-3 bg-emerald-50 p-3 rounded-lg">
//                         <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
//                         <span className="text-gray-700 font-inter">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
//                   <h4 className="text-base font-inter font-semibold text-primarydark mb-2">Learning Outcomes:</h4>
//                   <p className="text-gray-700 font-inter">
//                     Students working in our {activeLab.name.toLowerCase()} develop practical skills, critical thinking,
//                     and a deeper understanding of theoretical concepts through hands-on experimentation and
//                     project-based learning.
//                   </p>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ProfessionalLabs