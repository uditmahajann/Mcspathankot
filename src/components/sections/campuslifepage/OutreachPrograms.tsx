"use client"

import React from "react"
import { HeartHandshake, Leaf, Users, BookOpen, HelpingHand } from "lucide-react"

const programs = [
  {
    id: 1,
    title: "Community Service & Awareness Drives",
    description:
      "Our students actively organize and participate in cleanliness drives, donation campaigns, and local awareness initiatives. From tree plantations to traffic safety rallies — they learn compassion, responsibility, and teamwork.",
    image: "/Images/Campus/NewHostel.JPG",
    tag: "Social Responsibility",
    icon: <HeartHandshake className="w-6 h-6 text-rose-600" />,
    bg: "bg-rose-100",
  },
  {
    id: 2,
    title: "Environmental Stewardship Program",
    description:
      "Through sustainability clubs and ‘Go Green’ initiatives, our learners engage in eco-projects like composting, waste segregation, and creating school gardens — nurturing a lifelong respect for nature.",
    image: "/Images/Campus/NewHostel.JPG",
    tag: "Eco Initiative",
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    bg: "bg-green-100",
  },
  {
    id: 3,
    title: "Rural Education & Literacy Support",
    description:
      "Partnering with local NGOs, our students volunteer their time to teach underprivileged children — sharing knowledge, organizing donation drives, and creating learning materials for community schools.",
    image: "/Images/Campus/NewHostel.JPG",
    tag: "Education for All",
    icon: <BookOpen className="w-6 h-6 text-purple-600" />,
    bg: "bg-purple-100",
  },
  {
    id: 4,
    title: "Health & Wellness Awareness Camps",
    description:
      "In collaboration with health organizations, MCS conducts free check-up camps, hygiene awareness sessions, and blood donation drives to build a healthier, more informed society.",
    image: "/Images/Campus/NewHostel.JPG",
    tag: "Public Health",
    icon: <Users className="w-6 h-6 text-amber-600" />,
    bg: "bg-amber-100",
  },
]

const OutreachPrograms = () => {
  return (
    <section id="outreach-programs" className="py-12 my-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Outreach <span className="relative inline-block">
              Programs
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[90%] left-12 -bottom-4 sm:-bottom-6"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            At Montessori Cambridge School, we believe education extends beyond academics — it’s about shaping kind, aware, and socially responsible citizens.
          </p>
        </div>

        {/* Program Sections */}
        <div className="space-y-15">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} items-stretch gap-10 rounded-3xl shadow-sm overflow-hidden ${program.bg}`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-80 md:h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 flex flex-col justify-center p-8 md:p-12">
                <div className="flex items-center gap-3 mb-3">
                  {program.icon}
                  <span className="text-sm font-semibold text-gray-700 bg-white/60 px-3 py-1 rounded-full">
                    {program.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4 tracking-wide">
                  {program.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg font-inter leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OutreachPrograms





// import { CircleCheck } from "lucide-react"

// const OutreachPrograms = () => {
//   const programs = [
//     {
//       title: "Community Teaching Initiative",
//       description:
//         "Our students teach underprivileged children from nearby communities, sharing knowledge and developing empathy.",
//       impact: "Over 500 children benefited annually",
//       image: "/Images/Campus/NewHostel.JPG",
//     },
//     {
//       title: "Environmental Conservation",
//       description: "Tree planting, clean-up drives, and awareness campaigns to protect our local environment.",
//       impact: "Planted 2,000+ trees in the last 3 years",
//       image: "/Images/Campus/NewHostel.JPG",
//     },
//     {
//       title: "Elder Care Program",
//       description: "Regular visits to elderly care homes, organizing activities and providing companionship.",
//       impact: "Monthly visits to 5 elder care facilities",
//       image: "/Images/Campus/NewHostel.JPG",
//     },
//     {
//       title: "Health and Wellness Camps",
//       description: "Organizing health check-ups and awareness sessions in underserved communities.",
//       impact: "Served 1,500+ individuals through health camps",
//       image: "/Images/Campus/NewHostel.JPG",
//     },
//   ]

//   const testimonials = [
//     {
//       quote:
//         "The outreach programs have transformed my perspective on life and taught me the value of giving back to society.",
//       author: "Ananya Singh, Grade 11",
//     },
//     {
//       quote: "Working with underprivileged children has been the most rewarding experience of my school life.",
//       author: "Rohan Mehta, Grade 12",
//     },
//   ]

//   return (
//     <section id="outreach" className="py-10 sm:py-16 my-10 bg-white">
//       <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40">
//         <div className="text-center mb-10 sm:mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
//             Outreach <span className="relative inline-block"> Programs
//               <img
//                 src="/Images/Doodles/LineYellow.png"
//                 alt="Underline"
//                 className="absolute w-[80%] left-12 -bottom-4 sm:-bottom-6 md:-bottom-8"
//               />
//             </span>
//           </h2>
//           <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
//             Fostering social responsibility and empathy through meaningful community service
//           </p>
//         </div>

//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             {programs.map((program, index) => (
//               <div key={index} className="bg-white border border-gray-200 group relative rounded-xl overflow-hidden shadow-lg">
//                 <img
//                   src={program.image || "/placeholder.svg"}
//                   alt={program.title}
//                   className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="p-5">
//                   <h3 className="text-xl font-poppins tracking-wide font-semibold text-gray-900 mb-2">{program.title}</h3>
//                   <p className="text-gray-700 mb-4 font-inter">{program.description}</p>
//                   <div className="bg-blue-50 text-primary font-inter px-5 py-2 rounded-md font-medium inline-block">
//                     <span className="font-semibold font-inter">Impact:</span> {program.impact}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-blue-50 rounded-xl p-12 mb-12">
//             <h3 className="text-2xl font-poppins tracking-wide font-semibold text-gray-900 mb-6">Our Approach to Community Service</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="bg-white p-6 rounded-lg shadow-sm font-inter">
//                 <div className="text-purple-300 text-4xl font-black mb-2">01</div>
//                 <h4 className="font-poppins tracking-wide font-semibold text-gray-900 mb-2 uppercase">Identify Needs</h4>
//                 <p className="text-gray-700">
//                   We conduct research to identify genuine community needs where our students can make a difference.
//                 </p>
//               </div>
//               <div className="bg-white p-6 rounded-md shadow-sm font-inter">
//                 <div className="text-amber-200 text-4xl font-black mb-2">02</div>
//                 <h4 className="font-poppins tracking-wide font-semibold text-gray-900 mb-2 uppercase">Develop Solutions</h4>
//                 <p className="text-gray-700">Students collaborate & participate in designing sustainable solutions and action plans.</p>
//               </div>
//               <div className="bg-white p-6 rounded-md shadow-sm font-inter">
//                 <div className="text-rose-300 text-4xl font-black mb-2">03</div>
//                 <h4 className="font-poppins tracking-wide font-semibold text-gray-900 mb-2 uppercase">Implement & Reflect</h4>
//                 <p className="text-gray-700">
//                   Programs are implemented with regular reflection to ensure meaningful impact.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-2xl font-poppins tracking-wide font-semibold text-gray-900 mb-4">Student Testimonials</h3>
//               <div className="space-y-6">
//                 {testimonials.map((testimonial, index) => (
//                   <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//                     <svg className="h-8 w-8 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//                     </svg>
//                     <p className="text-gray-700 italic mb-2 font-inter text-base">{testimonial.quote}</p>
//                     <p className="text-blue-700 font-medium font-inter">{testimonial.author}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h3 className="text-2xl font-poppins tracking-wide font-semibold text-gray-900 mb-4">Benefits of Outreach</h3>
//               <div className="bg-white rounded-lg shadow-md p-8">
//                 <ul className="space-y-6">
//                   <li className="flex items-start">
//                     <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-2" />
//                     <div>
//                       <h4 className="font-semibold font-poppins tracking-wide text-primarydark">Develops Empathy</h4>
//                       <p className="text-gray-700 font-inter text-base">
//                         Students gain understanding of different life circumstances
//                       </p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-2" />
//                     <div>
//                       <h4 className="font-semibold font-poppins tracking-wide text-primarydark">Builds Leadership</h4>
//                       <p className="text-gray-700 font-inter text-base">Students take initiative and lead community projects</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-2" />
//                     <div>
//                       <h4 className="font-semibold font-poppins tracking-wide text-primarydark">Enhances College Applications</h4>
//                       <p className="text-gray-700 font-inter text-base">
//                         Meaningful service experiences strengthen university applications
//                       </p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-2" />
//                     <div>
//                       <h4 className="font-semibold font-poppins tracking-wide text-primarydark">Creates Global Citizens</h4>
//                       <p className="text-gray-700 font-inter text-base">
//                         Students develop awareness of global issues and their role in addressing them
//                       </p>
//                     </div>
//                   </li>
//                 </ul>

//                 {/* <div className="mt-6 pt-6 border-t border-gray-200">
//                   <h4 className="font-medium font-inter text-gray-900 mb-2">Get Involved</h4>
//                   <p className="text-gray-600 text-sm">
//                     Students can join existing programs or propose new initiatives through the Community Service
//                     Department.
//                   </p>
//                   <a href="#" className="inline-block mt-3 text-primary hover:text-secondarydark font-medium">
//                     Learn More
//                   </a>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//       </div>
//     </section>
//   )
// }

// export default OutreachPrograms
