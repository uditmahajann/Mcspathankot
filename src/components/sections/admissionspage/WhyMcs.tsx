"use client"

import React from "react"
import { Users, Heart, Star, Lightbulb, BookOpen, Leaf, Sparkles, Trophy, Globe2, ArrowRight, MessageSquareText } from "lucide-react"

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-10 my-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            MCS — More <span className="relative inline-block">Than a School!
              <img
                src="/Images/Doodles/LinePink.png"
                alt="Underline"
                className="absolute w-[80%] left-12 -bottom-4 sm:-bottom-6 md:-bottom-8"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
            Because education here isn’t just about classrooms — it’s about shaping human potential, nurturing curiosity,
            and building character that shines beyond the report card.
          </p>
        </div>

        <div className="text-center mb-12">
         
          <div className="space-y-20">
            {/* Block 1 */}
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <img
                  src="/Images/Campus/NewHostel.JPG"
                  alt="Holistic Learning"
                  className="rounded-3xl shadow-md w-full h-86 object-cover"
                />
              </div>
              <div className="md:w-1/2 text-left">
                <h3 className="text-2xl font-poppins font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-sky-600" /> Holistic Learning Beyond Books
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed font-inter">
                  From theatre and art to sports and robotics — our learners discover their unique strengths through
                  hands-on, multidisciplinary exploration. We believe learning should spark joy, not stress. We go beyond academics with sports, clubs, career counseling, heritage tours, and wellness programs for well-rounded growth.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              <div className="md:w-1/2">
                <img
                  src="/Images/Campus/NewHostel.JPG"
                  alt="Innovative Infrastructure"
                  className="rounded-3xl shadow-md w-full h-86 object-cover"
                />
              </div>
              <div className="md:w-1/2 text-left">
                <h3 className="text-2xl font-poppins font-semibold mb-4 flex items-center gap-2">
                  <Star className="w-8 h-8 text-amber-400" /> State-of-the-Art Facilities
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed font-inter">
                  From digital classrooms to a full-scale sports complex and smart labs, MCS equips students with world-class infrastructure. Smart classrooms, collaborative spaces, and digital labs blend tradition with technology — helping
                  students thrive in an evolving, connected world.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <img
                  src="/Images/Campus/NewHostel.JPG"
                  alt="Mentorship"
                  className="rounded-3xl shadow-md w-full h-86 object-cover"
                />
              </div>
              <div className="md:w-1/2 text-left">
                <h3 className="text-2xl font-poppins font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-8 h-8 text-rose-600" /> Personalised Mentorship
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed font-inter">
                  Every student is guided personally — not just academically, but emotionally. Through one-on-one guidance, consistent encouragement, and meaningful conversations, Our teachers serve as mentors,
                  helping learners grow into thoughtful, resilient individuals. 
                </p>
              </div>
            </div>

            {/* Block 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              <div className="md:w-1/2">
                <img
                  src="/Images/Campus/NewHostel.JPG"
                  alt="Innovative Infrastructure"
                  className="rounded-3xl shadow-md w-full h-86 object-cover"
                />
              </div>
              <div className="md:w-1/2 text-left">
                <h3 className="text-2xl font-poppins font-semibold mb-4 flex items-center gap-2">
                  <Leaf className="w-8 h-8 text-fuchsia-400" /> Innovative & Value-Based Education
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed font-inter">
                  We prioritize creativity, problem-solving, and aptitude development over rote memorization through an adaptive and engaging curriculum. Our passionate educators integrate academic excellence with life skills and core values like empathy, tolerance, and respect.
                </p>
              </div>
            </div>

            {/* Block 5 */}
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <img
                  src="/Images/Campus/NewHostel.JPG"
                  alt="Mentorship"
                  className="rounded-3xl shadow-md w-full h-86 object-cover"
                />
              </div>
              <div className="md:w-1/2 text-left">
                <h3 className="text-2xl font-poppins font-semibold mb-4 flex items-center gap-2">
                  <Globe2 className="w-8 h-8 text-lime-400" /> Global Vision with Local Values
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed font-inter">
                  Founded to deliver global education rooted in Indian tradition, MCS shapes students into culturally grounded and globally competent individuals. With students from across India and abroad, MCS nurtures a spirit of brotherhood and fosters cultural awareness, unity and understanding through diversity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default WhyChooseUs






// import React from "react";
// import {
//   Globe2,
//   Users,
//   Lightbulb,
//   BookUser,
//   Building2,
//   BrainCircuit,
//   MessageSquareText,
//   ArrowRight
// } from "lucide-react";

// const reasons = [
//   {
//     title: "Global Vision with Local Values",
//     icon: Globe2,
//     description:
//       "Founded to deliver global education rooted in Indian tradition, MCS shapes students into culturally grounded and globally competent individuals.",
//   },
//   {
//     title: "Diverse & Inclusive Student Body",
//     icon: Users,
//     description:
//       "With students from across India and abroad, MCS nurtures a spirit of brotherhood and fosters cultural awareness, unity and understanding through diversity.",
//   },
//   {
//     title: "Innovative & Personalized Learning",
//     icon: Lightbulb,
//     description:
//       "We prioritize creativity, problem-solving, and aptitude development over rote memorization through an adaptive and engaging curriculum.",
//   },
//   {
//     title: "Expert Faculty & Value-Based Education",
//     icon: BookUser,
//     description:
//       "Our passionate educators integrate academic excellence with life skills and core values like empathy, tolerance, and respect.",
//   },
//   {
//     title: "State-of-the-Art Facilities",
//     icon: Building2,
//     description:
//       "From digital classrooms to a full-scale sports complex and smart labs, MCS equips students with world-class infrastructure.",
//   },
//   {
//     title: "Holistic Development",
//     icon: BrainCircuit,
//     description:
//       "We go beyond academics with sports, clubs, career counseling, heritage tours, and wellness programs for well-rounded growth.",
//   },
// ];

// const WhyMcs = () => {
//   return (
//     <section className="pb-10 sm:pb-16 lg:pb-20 my-10 bg-gradient-to-tr from-blue-50 via-blue-50 to-white" id="why-mcs">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-10 sm:mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
//             Why <span className="relative inline-block">Choose MCS?
//               <img
//                 src="/Images/Doodles/LineYellow.png"
//                 alt="Underline"
//                 className="absolute w-[80%] left-12 -bottom-4 sm:-bottom-6 md:-bottom-8"
//               />
//             </span>
//           </h2>
//           <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
//             A legacy of excellence rooted in values, innovation, and holistic development — discover what makes MCS the preferred destination for learners across the globe.
//           </p>
//         </div>

//         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {reasons.map((reason, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group"
//             >
//               <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
//                 <reason.icon className="w-6 h-6" />
//               </div>
//               <h4 className="text-xl font-inter font-semibold text-gray-900 mb-3">
//                 {reason.title}
//               </h4>
//               <p className="text-gray-700 text-base leading-relaxed font-inter">
//                 {reason.description}
//               </p>
//             </div>
//           ))}
//         </div>
//         {/* Testimonial */}
//         <div className="mt-24 rounded-2xl bg-gradient-to-br from-primarydark to-indigo-900 p-9 text-white shadow-2xl">
//           <div className="mx-auto max-w-4xl text-center">
//             <MessageSquareText className="mx-auto w-10 h-10 text-blue-300" />
//             <h3 className="mt-4 text-2xl font-outfit font-semibold tracking-wide">What Our Parents Say!</h3>
//             <blockquote className="mt-6">
//               <p className="text-xl italic text-primarylight">
//                 "Choosing Montessori Cambridge School for our children was one of the best decisions we've made as
//                 parents. The school's commitment to academic excellence, character development, and creating a
//                 supportive community has exceeded our expectations."
//               </p>
//               <footer className="mt-4">
//                 <p className="font-outfit font-medium">— Parent of MCS students</p>
//               </footer>
//             </blockquote>
//           </div>

//           <div className="mt-8 text-center">
//             <a
//               href="/testimonials"
//               className="group inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-3 text-outfit text-base md:text-lg font-medium rounded-full transition-all duration-300 ease-in-out hover:font-semibold hover:scale-105 active:scale-95 shadow-md cursor-pointer border border-transparent bg-white text-primarydark hover:text-secondarydark hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-300"
//             >
//               Enquire Now for Admissions
//               <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={22} />
//             </a>
//           </div>
//         </div>

//         {/* CTA Section */}
//         {/* <div className="mt-24 bg-blue-50 rounded-2xl p-8 shadow-xl">
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-gray-900">Ready to join the MCS family?</h3>
//             <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//               Take the first step towards providing your child with an exceptional educational experience that will
//               shape their future.
//             </p>
//             <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
//               <a
//                 href="/admissions"
//                 className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105"
//               >
//                 Apply for Admission
//               </a>
//               <a
//                 href="/contact"
//                 className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-blue-600 bg-white px-8 py-3 text-base font-medium text-blue-600 shadow-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105"
//               >
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default WhyMcs;
