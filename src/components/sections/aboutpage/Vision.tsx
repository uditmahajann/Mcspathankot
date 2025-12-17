import type React from "react"
import { Eye, Flag, Goal, BookOpen, Lightbulb, Users, Sparkles, Compass, HeartHandshake, Star, Globe2 } from "lucide-react";

const Vision: React.FC = () => {
  return (
    <section id="vision-mission" className="pt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Our Purpose:{" "}
            <span className="relative inline-block">
              Vision & Mission
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkYellow.png"
                alt="Spark"
                className="absolute w-10 sm:w-12 md:w-14 lg:w-16 -top-8 -right-16"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            The guiding principles that inspire our educational journey — our vision for the future and the mission that shapes every step we take at MCS
          </p>
        </div>
        </div>

        {/* Blackboard Background */}

        {/* VISION SECTION */}
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] items-start">
              <div className="bg-gradient-to-br from-sky-50 via-white to-amber-50 border border-sky-100 rounded-3xl p-6 sm:p-12 shadow-sm">
              <h2 className="inline-flex items-center gap-2 text-2xl font-semibold text-primarydark font-poppins mb-5">
                <Sparkles className="w-8 h-8 text-amber-500" />
                Our Vision
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-gray-900 font-poppins mb-4 tracking-wide">
                “To inspire and nurture young minds to become confident, compassionate and
                impactful members of a global community.”
              </p>
              <p className="text-sm sm:text-base text-gray-600 font-inter">
                Our vision is to be the pre-eminent centre of learning, enabling pupils to achieve psychological and
              physical potential within the learning environment that is constructive, courteous & comprehensively
              inviting. We imagine every MCS learner as a grounded individual — rooted in values, equipped with strong academics, and ready to step into a global future with courage, empathy, and clarity of purpose.
              </p>
            </div>
          </div>
        </div>

        {/* MISSION SECTION */}
        <div className="mx-auto max-w-7xl px-6 sm:px-12 mt-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] items-start">
              <div className="bg-gradient-to-br from-sky-50 via-white to-amber-50 border border-sky-100 rounded-3xl p-6 sm:p-12 shadow-sm">
              <h2 className="inline-flex items-center gap-2 text-2xl font-semibold text-primarydark font-poppins mb-5">
                <Compass className="w-8 h-8 text-amber-500" />
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-gray-900 font-poppins mb-4 tracking-wide">
                “We exist to provide a joyful, rigorous and value-driven learning
                environment where every child feels safe, seen, challenged and
                inspired.”
              </p>
              <p className="text-sm sm:text-base text-gray-600 font-inter">
                Montessori Cambridge school inspires & prepares all individuals to achieve excellence to build brightest and harmonious career, empower them to confidently explore their interests and put their skills to meaningful use. Through thoughtfully designed experiences, we aim to balance academic excellence with character formation, creativity with discipline, and individual dreams with a sense of social responsibility.
              </p>
            </div>
          </div>
        </div>


      <div className="mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40 mt-20 py-25 bg-gradient-to-br from-violet-950 via-blue-900 to-indigo-950">

        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium">
            Our Core Educational Philosophy
          </h2>
          <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
            Our core values shape the way we teach, learn and grow together as a community.
          </p>
        </div>

        {/* Core Philosophy */}
        <div className="bg-white rounded-2xl shadow-xl p-12 overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-100 opacity-80 z-0"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-indigo-100 opacity-80 z-0"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <img
                    src="/Images/People/Swami.jpeg"
                    alt="Swami Vivekananda"
                    className="rounded-full h-65 w-65 object-cover shadow-lg relative z-10"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-2xl font-poppins font-semibold text-primary mb-4">
                  "Arise, awake, and stop not until the goal is reached"
                </blockquote>
                <p className="text-gray-700 font-inter text-lg">
                  At MCS, we bring our mission and vision to life by embodying the teachings of Swami Vivekananda. His
                  words inspire us to nurture each student's growth with purpose and resilience. By fostering
                  self-confidence and determination, we empower individuals to overcome challenges, solve problems, and
                  realize their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission pillars */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              {
                icon: <BookOpen className="w-6 h-6 text-sky-600" />,
                title: "Academic Excellence",
                desc: "Deliver a strong, concept-rich curriculum that promotes deep understanding, analytical thinking and love for learning.",
              },
              {
                icon: <Globe2 className="w-6 h-6 text-emerald-600" />,
                title: "Global Citizenship",
                desc: "Cultivate awareness of cultures, issues and perspectives so learners grow into respectful, responsible world citizens.",
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
                title: "Innovation & Inquiry",
                desc: "Encourage questioning, experimentation and problem-solving through projects, research and hands-on learning.",
              },
              {
                icon: <HeartHandshake className="w-6 h-6 text-rose-500" />,
                title: "Values & Character",
                desc: "Embed empathy, integrity, respect and resilience through daily interactions, service programs and reflective practices.",
              },
              {
                icon: <Users className="w-6 h-6 text-indigo-500" />,
                title: "Holistic Growth",
                desc: "Balance academics with sports, arts, leadership and wellness to support physical, emotional and creative development.",
              },
              {
                icon: <Star className="w-6 h-6 text-yellow-500" />,
                title: "Personalised Guidance",
                desc: "Offer mentorship, feedback and differentiated support so every learner feels known, encouraged and guided.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 rounded-2xl border-primary/30 bg-gradient-to-br from-white via-sky-50 to-amber-50 border shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-50">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 font-poppins">
                  {item.title}
                </h3>
                <p className="text-base text-gray-700 font-inter leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Vision




// "use client";

// import React from "react";
// import {
//   Sparkles,
//   Globe2,
//   BookOpen,
//   HeartHandshake,
//   Users,
//   Lightbulb,
//   Star,
//   Compass,
// } from "lucide-react";

// const VisionMissionPage: React.FC = () => {
//   return (
//     <section id="vision-mission" className="bg-white">
//       {/* HERO */}
//       <div className="relative overflow-hidden border-b border-gray-100">
//         <div className="mx-auto max-w-7xl px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40 py-16 sm:py-20 lg:py-24">
//           <div className="max-w-3xl">
//             <p className="text-sm font-semibold tracking-[0.18em] text-primarydark uppercase mb-4">
//               Our Purpose
//             </p>
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playpen font-semibold text-gray-900 leading-tight">
//               Vision <span className="text-primarydark">&</span> Mission
//             </h1>
//             <p className="mt-5 text-base sm:text-lg text-gray-700 font-inter max-w-2xl">
//               At Montessori Cambridge School, education is not just about grades
//               — it’s about shaping thoughtful human beings who learn with joy
//               and live with purpose.
//             </p>
//           </div>
//         </div>

//         {/* soft glow */}
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),transparent_55%),_radial-gradient(circle_at_bottom,_rgba(250,204,21,0.18),transparent_60%)] opacity-80" />
//       </div>

//       {/* VISION SECTION */}
//       <div className="mx-auto max-w-7xl px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40 py-14 sm:py-18">
//         <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] items-start">
//           <div>
//             <h2 className="inline-flex items-center gap-2 text-xl font-semibold text-primarydark font-poppins mb-3">
//               <Sparkles className="w-5 h-5 text-amber-500" />
//               Our Vision
//             </h2>
//             <p className="text-2xl sm:text-3xl font-playpen text-gray-900 leading-snug mb-4">
//               To nurture compassionate, confident and curious learners who make
//               a meaningful difference in the world.
//             </p>
//             <p className="text-gray-700 font-inter text-sm sm:text-base leading-relaxed">
//               We imagine every MCS learner as a grounded individual — rooted in
//               values, equipped with strong academics, and ready to step into a
//               global future with courage, empathy, and clarity of purpose.
//             </p>
//           </div>

//           <div className="bg-gradient-to-br from-sky-50 via-white to-amber-50 border border-sky-100 rounded-3xl p-6 sm:p-7 shadow-sm">
//             <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase mb-3">
//               Vision in one line
//             </p>
//             <p className="text-lg sm:text-xl font-semibold text-gray-900 font-poppins mb-3">
//               “To inspire young minds to become ethical, intelligent and
//               impactful members of a global community.”
//             </p>
//             <p className="text-xs sm:text-sm text-gray-600 font-inter">
//               This vision guides every decision we take — from curriculum
//               design and classroom culture to co-curricular programs and school
//               traditions.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* MISSION SECTION */}
//       <div className="border-y border-gray-100 bg-slate-50/40">
//         <div className="mx-auto max-w-7xl px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40 py-14 sm:py-18">
//           <div className="max-w-3xl mb-10">
//             <h2 className="inline-flex items-center gap-2 text-xl font-semibold text-primarydark font-poppins mb-3">
//               <Compass className="w-5 h-5 text-sky-600" />
//               Our Mission
//             </h2>
//             <p className="text-lg sm:text-xl font-playpen text-gray-900 mb-3">
//               We exist to provide a joyful, rigorous and value-driven learning
//               environment where every child feels safe, seen, challenged and
//               inspired.
//             </p>
//             <p className="text-gray-700 font-inter text-sm sm:text-base leading-relaxed">
//               Through thoughtfully designed experiences, we aim to balance
//               academic excellence with character formation, creativity with
//               discipline, and individual dreams with a sense of social
//               responsibility.
//             </p>
//           </div>

//           {/* Mission pillars */}
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 icon: <BookOpen className="w-6 h-6 text-sky-600" />,
//                 title: "Academic Excellence",
//                 desc: "Deliver a strong, concept-rich curriculum that promotes deep understanding, analytical thinking and love for learning.",
//               },
//               {
//                 icon: <Globe2 className="w-6 h-6 text-emerald-600" />,
//                 title: "Global Citizenship",
//                 desc: "Cultivate awareness of cultures, issues and perspectives so learners grow into respectful, responsible world citizens.",
//               },
//               {
//                 icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
//                 title: "Innovation & Inquiry",
//                 desc: "Encourage questioning, experimentation and problem-solving through projects, research and hands-on learning.",
//               },
//               {
//                 icon: <HeartHandshake className="w-6 h-6 text-rose-500" />,
//                 title: "Values & Character",
//                 desc: "Embed empathy, integrity, respect and resilience through daily interactions, service programs and reflective practices.",
//               },
//               {
//                 icon: <Users className="w-6 h-6 text-indigo-500" />,
//                 title: "Holistic Growth",
//                 desc: "Balance academics with sports, arts, leadership and wellness to support physical, emotional and creative development.",
//               },
//               {
//                 icon: <Star className="w-6 h-6 text-yellow-500" />,
//                 title: "Personalised Guidance",
//                 desc: "Offer mentorship, feedback and differentiated support so every learner feels known, encouraged and guided.",
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col gap-3 rounded-2xl bg-white/80 border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5"
//               >
//                 <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-50">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-md font-semibold text-gray-900 font-poppins">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-700 font-inter leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* EDUCATIONAL PHILOSOPHY */}
//       <div className="mx-auto max-w-7xl px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40 py-14 sm:py-18">
//         <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] items-start">
//           <div>
//             <h2 className="text-xl font-poppins font-semibold text-primarydark mb-3 flex items-center gap-2">
//               <BookOpen className="w-5 h-5 text-primarydark" />
//               Our Educational Philosophy
//             </h2>
//             <p className="text-lg font-playpen text-gray-900 mb-4">
//               Learning that honours both the mind and the heart.
//             </p>
//             <p className="text-gray-700 font-inter text-sm sm:text-base leading-relaxed mb-4">
//               We blend Montessori-inspired early learning, structured CBSE
//               academics, and experiential programs to create classrooms that are
//               warm, engaging and future-focused.
//             </p>
//             <ul className="space-y-3 text-sm sm:text-base text-gray-700 font-inter">
//               <li>• Inquiry-based learning instead of rote memorisation</li>
//               <li>• Real-world projects that connect concepts to life</li>
//               <li>• Space for reflection, mistakes and growth</li>
//               <li>• Strong partnership between teachers, parents and students</li>
//             </ul>
//           </div>

//           <div className="rounded-3xl border border-dashed border-primary/30 bg-gradient-to-br from-white via-sky-50 to-amber-50 p-6 sm:p-7">
//             <p className="text-sm font-semibold text-primarydark mb-2 font-poppins">
//               In simple words…
//             </p>
//             <p className="italic text-gray-800 text-base sm:text-lg leading-relaxed font-inter">
//               “At MCS, children don’t just learn answers — they learn how to
//               ask better questions, make thoughtful choices and carry their
//               values with pride.”
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* VALUES STRIP */}
//       <div className="border-y border-gray-100 bg-white">
//         <div className="mx-auto max-w-7xl px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40 py-12 sm:py-14">
//           <h2 className="text-xl sm:text-2xl font-poppins font-semibold text-gray-900 text-center mb-6">
//             What We Stand For
//           </h2>
//           <p className="text-sm sm:text-base text-gray-700 font-inter text-center max-w-2xl mx-auto mb-8">
//             Our core values shape the way we teach, learn and grow together as
//             a community.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             {[
//               { label: "Respect", desc: "Honouring self, others and the environment." },
//               { label: "Excellence", desc: "Doing our best, consistently and humbly." },
//               { label: "Integrity", desc: "Choosing what is right, even when unseen." },
//               { label: "Responsibility", desc: "Owning our actions and their impact." },
//               { label: "Collaboration", desc: "Growing together through teamwork." },
//               { label: "Curiosity", desc: "Keeping the spark of wonder alive." },
//             ].map((value, idx) => (
//               <div
//                 key={idx}
//                 className="min-w-[180px] max-w-xs rounded-full border border-gray-200 bg-slate-50/60 px-5 py-3 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 shadow-sm"
//               >
//                 <span className="text-sm font-semibold text-gray-900 font-poppins">
//                   {value.label}
//                 </span>
//                 <span className="hidden sm:inline text-xs text-gray-500 font-inter">
//                   • {value.desc}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* GRADUATE PROFILE */}
//       <div className="mx-auto max-w-7xl px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40 py-14 sm:py-18">
//         <div className="max-w-3xl text-center mx-auto mb-10">
//           <h2 className="text-xl sm:text-2xl font-poppins font-semibold text-gray-900 mb-3">
//             The MCS Graduate
//           </h2>
//           <p className="text-sm sm:text-base text-gray-700 font-inter">
//             When our students step out into the world, this is who we hope they
//             have become.
//           </p>
//         </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {[
//             {
//               title: "Ethical Leader",
//               desc: "Takes initiative, includes others and leads with humility and fairness.",
//             },
//             {
//               title: "Independent Learner",
//               desc: "Knows how to ask, research, reflect and keep learning beyond exams.",
//             },
//             {
//               title: "Creative Thinker",
//               desc: "Connects ideas, finds new solutions and isn’t afraid to imagine differently.",
//             },
//             {
//               title: "Confident Communicator",
//               desc: "Expresses thoughts clearly, listens deeply and respects diverse opinions.",
//             },
//             {
//               title: "Global-minded Citizen",
//               desc: "Understands local roots and global realities, and acts with empathy.",
//             },
//             {
//               title: "Emotionally Resilient Individual",
//               desc: "Manages emotions, handles setbacks and bounces back with optimism.",
//             },
//           ].map((item, idx) => (
//             <div
//               key={idx}
//               className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 flex flex-col gap-2"
//             >
//               <h3 className="text-md font-semibold text-gray-900 font-poppins">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-gray-700 font-inter leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* FINAL CTA */}
//       <div className="border-t border-gray-100 bg-slate-50/60">
//         <div className="mx-auto max-w-5xl px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40 py-12 sm:py-16 text-center">
//           <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primarydark mb-3">
//             Our Promise
//           </p>
//           <h2 className="text-2xl sm:text-3xl font-playpen font-semibold text-gray-900 mb-4">
//             Every child is capable. Every child is unique. Every child matters.
//           </h2>
//           <p className="text-sm sm:text-base text-gray-700 font-inter max-w-2xl mx-auto mb-8">
//             If our vision and mission resonate with the future you imagine for
//             your child, we’d be honoured to be a part of their journey.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <a
//               href="/admissions"
//               className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primarydark text-white text-sm sm:text-base font-medium shadow-md hover:bg-primary transition-colors cursor-pointer"
//             >
//               Explore Admissions
//             </a>
//             <a
//               href="/contact#visit"
//               className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-sm sm:text-base font-medium text-gray-800 hover:bg-white shadow-sm cursor-pointer"
//             >
//               Schedule a Campus Visit
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VisionMissionPage;
