"use client"

import { useState } from "react"
import { GraduationCap, Clock, Calendar, ChevronRight, Lightbulb, Rocket, Users } from "lucide-react"
import CareerForm from "./CareerForm"

const careersData = [
  {
    id: 1,
    title: "Mathematics Teacher",
    department: "Academic",
    experience: "3-5 years",
    education: "M.Sc. in Mathematics, B.Ed.",
    deadline: "June 15, 2025",
    description:
      "We are looking for an experienced Mathematics teacher for middle and high school classes. The ideal candidate should have strong subject knowledge and experience in teaching CBSE curriculum.",
    responsibilities: [
      "Teach Mathematics to grades 8-12",
      "Prepare lesson plans and teaching materials",
      "Conduct assessments and evaluate student performance",
      "Participate in curriculum development",
    ],
  },
  {
    id: 2,
    title: "Science Laboratory Assistant",
    department: "Administration",
    experience: "2-3 years",
    education: "B.Sc. in Chemistry/Physics",
    deadline: "June 10, 2025",
    description:
      "We are seeking a qualified Science Laboratory Assistant to support our science department. The candidate will be responsible for maintaining lab equipment and assisting teachers during practical sessions.",
    responsibilities: [
      "Prepare laboratory for practical classes",
      "Maintain inventory of lab equipment and chemicals",
      "Assist teachers during practical sessions",
      "Ensure safety protocols are followed",
    ],
  },
  // {
  //   id: 3,
  //   title: "Science Laboratory Assistant",
  //   department: "Administration",
  //   experience: "2-3 years",
  //   education: "B.Sc. in Chemistry/Physics",
  //   deadline: "June 10, 2025",
  //   description:
  //     "We are seeking a qualified Science Laboratory Assistant to support our science department. The candidate will be responsible for maintaining lab equipment and assisting teachers during practical sessions.",
  //   responsibilities: [
  //     "Prepare laboratory for practical classes",
  //     "Maintain inventory of lab equipment and chemicals",
  //     "Assist teachers during practical sessions",
  //     "Ensure safety protocols are followed",
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Science Laboratory Assistant",
  //   department: "Administration",
  //   experience: "2-3 years",
  //   education: "B.Sc. in Chemistry/Physics",
  //   deadline: "June 10, 2025",
  //   description:
  //     "We are seeking a qualified Science Laboratory Assistant to support our science department. The candidate will be responsible for maintaining lab equipment and assisting teachers during practical sessions.",
  //   responsibilities: [
  //     "Prepare laboratory for practical classes",
  //     "Maintain inventory of lab equipment and chemicals",
  //     "Assist teachers during practical sessions",
  //     "Ensure safety protocols are followed",
  //   ],
  // },
]

const HR_EMAIL = "hr@mcs.example.com";

 const development = [
    {
      icon: Rocket,
      title: "Faculty Orientation Programs",
      desc: "New educators at MCS undergo a comprehensive orientation to understand our pedagogy, ethics, and learner-centered philosophy.",
    },
    {
      icon: Lightbulb,
      title: "In-Service Training Workshops",
      desc: "Monthly workshops on modern teaching methods, classroom innovation, and digital tools for education.",
    },
    {
      icon: GraduationCap,
      title: "Mentorship & Peer Observation",
      desc: "Teachers mentor one another through classroom observations and collaborative feedback cycles that promote reflective practice.",
    },
    {
      icon: Users,
      title: "External Certifications & Webinars",
      desc: "We partner with national education boards and training bodies to encourage faculty participation in certified development programs.",
    },
  ]

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)

  const filteredJobs = careersData

  return (
    <section id="careers" className="py-10 my-10 bg-white">
      <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40">
        <div className="text-center mb-10 sm:mb-12 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Careers{" "}
            <span className="relative inline-block">
              @MCS
              <img
                src="/Images/Doodles/SparkGreen.png"
                alt="Spark"
                className="absolute w-10 sm:w-12 md:w-14 -top-6 -right-15"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Join our team of dedicated educators and staff. We are always looking for talented individuals who are
            passionate about education and committed to nurturing young minds.
          </p>
        </div>

        {/* Current Openings */}
        <h3 className="text-2xl font-poppins tracking-wide font-bold text-primarydark mb-6">Current Openings</h3>
        <div className="space-y-6">
  {filteredJobs.length > 0 ? (
    filteredJobs.map((job) => (
      <div key={job.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <h3 className="text-xl font-poppins tracking-wide font-bold text-gray-900">{job.title}</h3>
                  <span
                    className={`mt-2 md:mt-0 inline-flex items-center px-4 py-1.5 font-inter rounded-full text-sm font-medium ${
                      job.department === "Academic"
                        ? "bg-blue-100 text-blue-800"
                        : job.department === "Administration"
                        ? "bg-purple-100 text-purple-800"
                        : job.department === "Sports"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {job.department}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 font-inter">
                  <div className="flex items-center ">
                    <GraduationCap size={22} className="text-gray-400 mr-4" />
                    <div>
                      <p className="text-sm text-gray-500">Education</p>
                      <p className="text-md font-medium text-gray-700">{job.education}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock size={22} className="text-gray-400 mr-4" />
                    <div>
                      <p className="text-sm text-gray-500">Experience</p>
                      <p className="text-md font-medium text-gray-700">{job.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={22} className="text-gray-400 mr-4" />
                    <div>
                      <p className="text-sm text-gray-500">Application Deadline</p>
                      <p className="text-md font-medium text-gray-700">{job.deadline}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-500 mb-2 font-inter">{job.description}</p>

                {expandedJob === job.id && (
                  <div className="mt-4 border-t border-gray-200 pt-4 font-inter">
                    <h4 className="font-medium text-primarydark mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {job.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    className="text-blue-600 hover:text-blue-800 font-inter font-medium text-base flex items-center mb-4 sm:mb-0 cursor-pointer"
                  >
                    {expandedJob === job.id ? "Show Less" : "View Details"}
                    <ChevronRight size={18} className="ml-1" />
                  </button>

                  <a
                    href={`mailto:${HR_EMAIL}?subject=Application for ${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center justify-center px-6 py-2 bg-primary hover:bg-primarydark text-white font-outfit font-semibold rounded-lg transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
      </div>
    ))
  ) : (
    <div className="items-center w-full mx-auto p-12 bg-gray-100 rounded-lg shadow">
      <div className="flex flex-col text-center items-center mb-6">
      <h2 className="text-gray-900 text-2xl font-poppins font-semibold">No openings right now.</h2>
      <p className="text-gray-500 mt-4 font-inter text-base max-w-3xl">But, we're always interested in hearing from talented individuals. Fill out this Application Form and send us your resume for future opportunities.</p>
      </div>
      <CareerForm />
    </div>
  
    
  )}
</div>

        

        

        
      </div>
      {/* FACULTY DEVELOPMENT */}
        <div className="mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40 my-20 py-25 bg-gradient-to-br from-violet-950 via-blue-900 to-indigo-950">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium">
            Faculty Development & Professional Growth
          </h2>
          <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
            MCS believes in nurturing educators as lifelong learners through skill-building, collaboration, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {development.map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 hover:shadow-md transition-all"
            >
              <item.icon className="w-9 h-9 text-blue-600 mb-3" />
              <h4 className="text-xl font-poppins tracking-wide font-semibold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-700 font-inter ">{item.desc}</p>
            </div>
          ))}
        </div>
        </div>

        {/* Job Application Form and Process */}
        <div className="flex flex-col md:flex-row gap-8 container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 ">

          {/* Application Process */}
          <div className="w-full bg-gray-50 p-6 rounded-lg ">
            <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-8 tracking-wide">Application Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        title: "Submit Application",
        description: "Apply online with your resume and cover letter",
      },
      {
        title: "Initial Screening",
        description: "Applications are reviewed by our HR department",
      },
      {
        title: "Interview",
        description: "Selected candidates are invited for interviews",
      },
      {
        title: "Demo Class/Assessment",
        description: "Teaching positions require a demonstration class",
      },
      {
        title: "Final Selection",
        description: "Offer letter is issued to selected candidates",
      },
    ].map((step, idx) => (
      <div key={idx} className="flex items-start">
        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 text-primarydark flex items-center justify-center font-bold font-playpen text-lg">
          {idx + 1}
        </div>
        <div className="ml-4 font-inter">
          <h4 className="text-lg font-medium text-gray-900">{step.title}</h4>
          <p className="text-md text-gray-700">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
          </div>
        </div>
        
    </section>
  )
}

export default Careers




// "use client"

// import React from "react"
// import { Heart, Lightbulb, Users, GraduationCap, Briefcase, Rocket, ArrowRight } from "lucide-react"

// const Careers = () => {
//   const benefits = [
//     {
//       icon: Heart,
//       title: "Supportive Work Culture",
//       desc: "At MCS, we value collaboration, empathy, and mutual respect. Our staff members are part of a warm and inclusive environment where every voice is heard.",
//       color: "bg-rose-50 text-rose-600 border-rose-100",
//     },
//     {
//       icon: Lightbulb,
//       title: "Continuous Professional Growth",
//       desc: "We invest in our teachers’ growth through mentorship, workshops, and certifications that foster both pedagogical and personal excellence.",
//       color: "bg-amber-50 text-amber-600 border-amber-100",
//     },
//     {
//       icon: Users,
//       title: "Collaborative Community",
//       desc: "Our educators work hand-in-hand across departments, blending creativity, academics, and technology to create holistic learning experiences.",
//       color: "bg-sky-50 text-sky-600 border-sky-100",
//     },
//     {
//       icon: GraduationCap,
//       title: "Global Exposure",
//       desc: "We encourage our faculty to participate in national and international training programs to bring fresh perspectives and innovations into classrooms.",
//       color: "bg-emerald-50 text-emerald-600 border-emerald-100",
//     },
//   ]

//   const openings = [
//     {
//       title: "Primary School Teacher (Grades I–V)",
//       desc: "Looking for passionate educators with experience in primary education, fluent in English, and capable of creating joyful learning environments.",
//       type: "Full-time | Patiala Campus",
//     },
//     {
//       title: "Physics Faculty (Senior Secondary)",
//       desc: "Subject expert with strong conceptual clarity and experience in CBSE curriculum for Grades XI–XII.",
//       type: "Full-time | Patiala Campus",
//     },
//     {
//       title: "Art & Craft Instructor",
//       desc: "Creative individual passionate about integrating art into academics and inspiring young learners.",
//       type: "Part-time | Patiala Campus",
//     },
//     {
//       title: "Digital Media Coordinator",
//       desc: "Responsible for managing school’s digital presence, content, and media production for campaigns and events.",
//       type: "Full-time | Hybrid",
//     },
//   ]

//   const development = [
//     {
//       icon: Rocket,
//       title: "Faculty Orientation Programs",
//       desc: "New educators at MCS undergo a comprehensive orientation to understand our pedagogy, ethics, and learner-centered philosophy.",
//     },
//     {
//       icon: Lightbulb,
//       title: "In-Service Training Workshops",
//       desc: "Monthly workshops on modern teaching methods, classroom innovation, and digital tools for education.",
//     },
//     {
//       icon: GraduationCap,
//       title: "Mentorship & Peer Observation",
//       desc: "Teachers mentor one another through classroom observations and collaborative feedback cycles that promote reflective practice.",
//     },
//     {
//       icon: Users,
//       title: "External Certifications & Webinars",
//       desc: "We partner with national education boards and training bodies to encourage faculty participation in certified development programs.",
//     },
//   ]

//   return (
//     <section id="careers" className="py-12 sm:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">

//         {/* HERO */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-playpen text-gray-900 font-medium">
//             Join the <span className="relative inline-block text-sky-600">MCS Family
//               <img
//                 src="/Images/Doodles/LineYellow.png"
//                 alt="Underline"
//                 className="absolute w-[80%] left-2 -bottom-4 sm:-bottom-6 md:-bottom-8"
//               />
//             </span>
//           </h2>
//           <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
//             At Montessori Cambridge School, teaching isn’t just a profession — it’s a purpose.  
//             Join a team of changemakers shaping the future, one child at a time.
//           </p>
//         </div>

//         {/* WHY WORK WITH US */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
//           {benefits.map((item, i) => (
//             <div
//               key={i}
//               className={`p-8 rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 ${item.color}`}
//             >
//               <item.icon className="w-10 h-10 mb-4" />
//               <h3 className="text-lg font-semibold mb-3 text-gray-900">{item.title}</h3>
//               <p className="text-gray-700 text-sm">{item.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* FACULTY DEVELOPMENT */}
//         <div className="text-center mb-12">
//           <h3 className="text-2xl sm:text-3xl font-poppins font-semibold mb-4 text-gray-900">
//             Faculty Development & Growth
//           </h3>
//           <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
//             MCS believes in nurturing educators as lifelong learners through skill-building, collaboration, and innovation.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-24">
//           {development.map((item, i) => (
//             <div
//               key={i}
//               className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 hover:shadow-md transition-all"
//             >
//               <item.icon className="w-8 h-8 text-blue-600 mb-3" />
//               <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
//               <p className="text-gray-700 text-sm">{item.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* OPEN POSITIONS */}
//         <div className="text-center mb-12">
//           <h3 className="text-2xl sm:text-3xl font-poppins font-semibold mb-4 text-gray-900">
//             Current Openings
//           </h3>
//           <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
//             Explore exciting opportunities to grow your career with one of the most respected schools in North India.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
//           {openings.map((job, i) => (
//             <div
//               key={i}
//               className="border border-gray-100 rounded-2xl p-8 bg-white shadow-sm hover:shadow-md transition-all"
//             >
//               <h4 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h4>
//               <p className="text-gray-700 mb-3 text-sm">{job.desc}</p>
//               <p className="text-blue-600 text-sm font-medium">{job.type}</p>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl py-14 px-8 text-center shadow-lg">
//           <h3 className="text-2xl font-poppins font-semibold mb-4">
//             Ready to Inspire the Next Generation?
//           </h3>
//           <p className="max-w-2xl mx-auto text-blue-100 mb-8">
//             Join MCS to experience teaching as an art of transformation.  
//             Send your résumé and cover letter to <span className="text-yellow-300 font-semibold">careers@mcspatiala.in</span>.
//           </p>
//           <a
//             href="mailto:careers@mcspatiala.in"
//             className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-50 transition-all"
//           >
//             Apply Now
//             <ArrowRight className="w-5 h-5" />
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Careers







// "use client";

// import React, { useEffect, useState } from "react";
// import { X, Mail, Clock, Award, Briefcase, CheckCircle } from "lucide-react";

// type Job = {
//   id: number;
//   title: string;
//   dept: string;
//   level: string;
//   experience: string;
//   location: string;
//   deadline: string;
//   summary: string;
//   description: string;
//   category?: string;
// };

// const JOBS: Job[] = [
//   {
//     id: 1,
//     title: "Mathematics Teacher (Secondary)",
//     dept: "Mathematics Department",
//     level: "Full Time",
//     experience: "3-6 years",
//     location: "Pathankot Campus",
//     deadline: "June 15, 2025",
//     summary:
//       "Experienced educator for Secondary classes (CBSE) — strong subject knowledge, classroom management & continuous assessment experience.",
//     description:
//       "Responsibilities:\n\n• Deliver high-quality lessons aligned to CBSE syllabus.\n• Plan assessments and provide timely feedback.\n• Participate in co-curricular activities and mentoring.\n• Maintain records and communicate with parents.\n\nQualifications:\nM.Sc. in Mathematics / B.Ed or equivalent. Strong pedagogical skills and experience with modern teaching tools.",
//     category: "Academic",
//   },
//   {
//     id: 2,
//     title: "Science Laboratory Assistant",
//     dept: "Science Lab",
//     level: "Full Time",
//     experience: "1-3 years",
//     location: "Main Campus",
//     deadline: "June 20, 2025",
//     summary:
//       "Support science departments by maintaining labs, preparing practicals, and ensuring safety protocols.",
//     description:
//       "Responsibilities:\n\n• Prepare laboratory setups for Physics, Chemistry and Biology practicals.\n• Maintain inventory and order consumables.\n• Enforce lab safety and assist teachers during practical sessions.\n\nQualifications:\nDiploma/Graduate in Science or Lab Technology with prior school/college lab experience.",
//     category: "Administration",
//   },
//   {
//     id: 3,
//     title: "Physical Education Instructor",
//     dept: "PE & Sports",
//     level: "Part Time / Full Time",
//     experience: "2+ years",
//     location: "Sports Complex",
//     deadline: "Ongoing",
//     summary:
//       "Coach and train students across a range of sports; plan fitness programs and team activities.",
//     description:
//       "Responsibilities:\n\n• Conduct physical training and coaching sessions.\n• Organize intramurals and inter-school competitions.\n• Promote holistic fitness and healthy habits.\n\nQualifications:\nDegree/Diploma in Physical Education, experience coaching school-age children.",
//     category: "Academic",
//   },
// ];

// const HR_EMAIL = "hr@mcs.example.com";

// const Careers: React.FC = () => {
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState<"All" | "Academic" | "Administration">("All");
//   const [faqOpen, setFaqOpen] = useState<number | null>(null);

//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setSelectedJob(null);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const filtered = JOBS.filter((j) => {
//     if (filter !== "All" && j.category !== filter) return false;
//     if (!search) return true;
//     const q = search.toLowerCase();
//     return (
//       j.title.toLowerCase().includes(q) ||
//       j.dept.toLowerCase().includes(q) ||
//       j.summary.toLowerCase().includes(q)
//     );
//   });

//   return (
//     <main className="bg-white text-gray-900">
    
//       {/* Current Openings */}
//       <section id="openings" className="container mx-auto px-6 lg:px-20 py-12">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
//           <div>
//             <h2 className="text-2xl font-semibold">Current Openings</h2>
//             <p className="text-sm text-gray-600">Explore roles across academics, administration and campus support.</p>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="hidden sm:flex items-center gap-2">
//               <button
//                 onClick={() => setFilter("All")}
//                 className={`px-3 py-1 rounded-full text-sm ${filter === "All" ? "bg-primarydark text-white" : "bg-gray-100"}`}
//               >
//                 All
//               </button>
//               <button
//                 onClick={() => setFilter("Academic")}
//                 className={`px-3 py-1 rounded-full text-sm ${filter === "Academic" ? "bg-primarydark text-white" : "bg-gray-100"}`}
//               >
//                 Academic
//               </button>
//               <button
//                 onClick={() => setFilter("Administration")}
//                 className={`px-3 py-1 rounded-full text-sm ${filter === "Administration" ? "bg-primarydark text-white" : "bg-gray-100"}`}
//               >
//                 Administration
//               </button>
//             </div>

//             <div className="relative">
//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search roles..."
//                 className="pl-10 pr-4 py-2 border rounded-lg w-56 focus:outline-none focus:ring-2 focus:ring-blue-200"
//               />
//               <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none">
//                 <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="space-y-8">
//           {filtered.length === 0 ? (
//             <div className="text-gray-600 py-12 text-center">No roles match your search or filter.</div>
//           ) : (
//             filtered.map((job) => (
//               <article
//                 key={job.id}
//                 className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col md:flex-row md:items-center gap-6"
//               >
//                 <div className="flex-shrink-0 w-full md:w-2/3">
//                   <div className="flex items-start justify-between gap-4">
//                     <div>
//                       <h3 className="text-xl font-semibold">{job.title}</h3>
//                       <div className="text-sm text-gray-600 mt-1">{job.dept} • <span className="text-gray-700">{job.level}</span></div>
//                       <p className="mt-3 text-gray-700">{job.summary}</p>
//                       <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
//                         <span className="inline-flex items-center gap-2">
//                           <Clock className="w-4 h-4 text-gray-400" /> {job.experience}
//                         </span>
//                         <span className="inline-flex items-center gap-2">
//                           <Briefcase className="w-4 h-4 text-gray-400" /> {job.location}
//                         </span>
//                         <span className="inline-flex items-center gap-2">
//                           <Award className="w-4 h-4 text-gray-400" /> Deadline: {job.deadline}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="md:hidden" />
//                   </div>
//                 </div>

//                 <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-3 md:w-1/3">
//                   <span className={`px-3 py-1 rounded-full text-sm ${job.category === "Academic" ? "bg-blue-50 text-blue-700" : "bg-emerald-50 text-emerald-700"}`}>
//                     {job.category ?? "General"}
//                   </span>

//                   <div className="mt-2 flex gap-3">
//                     <button
//                       onClick={() => setSelectedJob(job)}
//                       className="px-4 py-2 border rounded-md text-sm hover:bg-gray-50"
//                     >
//                       View details
//                     </button>
//                     <a
//                       href={`mailto:${HR_EMAIL}?subject=Application for ${encodeURIComponent(job.title)}`}
//                       className="px-4 py-2 bg-primarydark text-white rounded-md text-sm"
//                     >
//                       Apply now
//                     </a>
//                   </div>
//                 </div>
//               </article>
//             ))
//           )}
//         </div>

//         {/* small CTA */}
//         <div className="text-center mt-12">
//           <p className="text-gray-700">Don’t find the right role? Send us your CV and we’ll keep it on file.</p>
//           <a
//             href={`mailto:${HR_EMAIL}?subject=Speculative application`}
//             className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-white border border-primarydark text-primarydark rounded-full shadow"
//           >
//             <Mail className="w-4 h-4" /> Submit CV
//           </a>
//         </div>
//       </section>

//       {/* Faculty Development */}
//       <section className="bg-gray-50 py-12">
//         <div className="container mx-auto px-6 lg:px-20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <div>
//               <h2 className="text-2xl font-semibold">Faculty Development & Professional Growth</h2>
//               <p className="mt-3 text-gray-700">
//                 At MCS we invest in our educators — regular workshops, peer observations, micro-teaching clinics and funded
//                 certification courses help our teachers grow their craft and leadership.
//               </p>

//               <ul className="mt-6 space-y-3">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-6 h-6 text-primarydark mt-1" />
//                   <div>
//                     <b>Induction & Mentoring</b>
//                     <div className="text-sm text-gray-600">Structured onboarding & assigned mentor for the first 6 months.</div>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-6 h-6 text-primarydark mt-1" />
//                   <div>
//                     <b>Certifications & Workshops</b>
//                     <div className="text-sm text-gray-600">Regular sessions on formative assessment, differentiation & blended learning.</div>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-6 h-6 text-primarydark mt-1" />
//                   <div>
//                     <b>Research & Exchange</b>
//                     <div className="text-sm text-gray-600">Opportunities to present at conferences and partner with universities.</div>
//                   </div>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <div className="bg-white rounded-xl shadow p-6">
//                 <h4 className="text-lg font-semibold mb-4">Upcoming Programs</h4>
//                 <ol className="space-y-4">
//                   <li className="flex gap-4">
//                     <div className="w-10 h-10 rounded-full bg-primarydark text-white flex items-center justify-center">1</div>
//                     <div>
//                       <div className="font-medium">Micro-Teaching Lab</div>
//                       <div className="text-sm text-gray-600">Hands-on lesson practice and feedback — July 2025</div>
//                     </div>
//                   </li>
//                   <li className="flex gap-4">
//                     <div className="w-10 h-10 rounded-full bg-primarydark text-white flex items-center justify-center">2</div>
//                     <div>
//                       <div className="font-medium">Inclusive Classroom Strategies</div>
//                       <div className="text-sm text-gray-600">Workshop for differentiated instruction — Aug 2025</div>
//                     </div>
//                   </li>
//                   <li className="flex gap-4">
//                     <div className="w-10 h-10 rounded-full bg-primarydark text-white flex items-center justify-center">3</div>
//                     <div>
//                       <div className="font-medium">Assessment for Learning</div>
//                       <div className="text-sm text-gray-600">Formative assessment & feedback — Sept 2025</div>
//                     </div>
//                   </li>
//                 </ol>

//                 <div className="mt-6 text-right">
//                   <a href="/faculty-development" className="text-primarydark font-medium hover:underline">
//                     Learn more & schedules →
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits / Why Join */}
//       <section className="container mx-auto px-6 lg:px-20 py-12">
//         <h3 className="text-2xl font-semibold mb-6">Why work with us</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white rounded-xl p-6 shadow">
//             <h4 className="font-semibold">Competitive Compensation</h4>
//             <p className="text-sm text-gray-600 mt-2">Transparent pay bands and annual reviews.</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow">
//             <h4 className="font-semibold">Work-Life Balance</h4>
//             <p className="text-sm text-gray-600 mt-2">Supportive policies, manageable workloads and staff wellbeing programs.</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow">
//             <h4 className="font-semibold">Professional Growth</h4>
//             <p className="text-sm text-gray-600 mt-2">Paid trainings, leadership pathways and sponsored certifications.</p>
//           </div>
//         </div>
//       </section>

//       {/* Onboarding Timeline */}
//       <section className="bg-gray-50 py-12">
//         <div className="container mx-auto px-6 lg:px-20">
//           <h3 className="text-2xl font-semibold mb-6">How to apply — simple 4 step process</h3>
//           <div className="bg-white rounded-xl p-6 shadow flex flex-col md:flex-row gap-6">
//             <ol className="flex-1 space-y-6">
//               <li className="flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">1</div>
//                 <div>
//                   <b>Find a role</b>
//                   <div className="text-sm text-gray-600">Browse openings and select the best match.</div>
//                 </div>
//               </li>
//               <li className="flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">2</div>
//                 <div>
//                   <b>Apply</b>
//                   <div className="text-sm text-gray-600">Email your CV and cover letter to our HR email.</div>
//                 </div>
//               </li>
//               <li className="flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">3</div>
//                 <div>
//                   <b>Interview & demo lesson</b>
//                   <div className="text-sm text-gray-600">Shortlisting, demo lesson and panel interview.</div>
//                 </div>
//               </li>
//               <li className="flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">4</div>
//                 <div>
//                   <b>Offer & onboarding</b>
//                   <div className="text-sm text-gray-600">Offer letter, joining formalities and induction program.</div>
//                 </div>
//               </li>
//             </ol>

//             <div className="md:w-1/3 flex flex-col items-center justify-center">
//               <img src="/Images/Campus/office-hr.jpg" alt="apply" className="rounded-lg shadow w-full h-44 object-cover mb-4" />
//               <a href={`mailto:${HR_EMAIL}?subject=Application`} className="px-6 py-3 bg-primarydark text-white rounded-full">
//                 Apply / Email CV
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="container mx-auto px-6 lg:px-20 py-12">
//         <h3 className="text-2xl font-semibold mb-6">Frequently asked questions</h3>
//         <div className="space-y-4">
//           {[1, 2, 3].map((i) => {
//             const question =
//               i === 1
//                 ? "What documents are required to apply?"
//                 : i === 2
//                 ? "Do you accept speculative applications?"
//                 : "What professional development opportunities do you offer?";
//             const answer =
//               i === 1
//                 ? "A CV, cover letter, copies of certificates and a recent photograph. Additional documents may be requested at interview."
//                 : i === 2
//                 ? "Yes — send your CV to HR and we’ll keep it on file. Use the 'Submit CV' button above."
//                 : "We run regular workshops, mentorship, funded certifications and peer-observation programs throughout the year.";
//             return (
//               <div key={i} className="bg-white rounded-xl shadow p-4">
//                 <button
//                   onClick={() => setFaqOpen(faqOpen === i ? null : i)}
//                   className="w-full flex items-center justify-between text-left"
//                 >
//                   <div>
//                     <div className="font-medium">{question}</div>
//                     {faqOpen === i && <div className="text-sm text-gray-600 mt-2">{answer}</div>}
//                   </div>
//                   <div className="text-primarydark font-bold">{faqOpen === i ? "−" : "+"}</div>
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Footer CTA */}
//       <section className="bg-primarydark text-white py-12">
//         <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
//           <div>
//             <h4 className="text-xl font-semibold">Ready to join our faculty?</h4>
//             <p className="mt-1 text-sm">We welcome passionate educators. Apply and be part of our learning community.</p>
//           </div>
//           <div className="flex gap-3">
//             <a href={`mailto:${HR_EMAIL}`} className="px-6 py-3 bg-white text-primarydark rounded-full font-medium">
//               Email HR
//             </a>
//             <a href="/contact" className="px-6 py-3 border border-white rounded-full">
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Job details modal */}
//       {selectedJob && (
//         <div
//           className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
//           role="dialog"
//           aria-modal="true"
//           onClick={() => setSelectedJob(null)}
//         >
//           <div
//             className="bg-white rounded-xl max-w-3xl w-full shadow-xl overflow-auto max-h-[90vh] relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="p-6">
//               <div className="flex items-start justify-between">
//                 <div>
//                   <h3 className="text-2xl font-semibold">{selectedJob.title}</h3>
//                   <div className="text-sm text-gray-600 mt-1">{selectedJob.dept} • {selectedJob.location}</div>
//                 </div>
//                 <button onClick={() => setSelectedJob(null)} className="p-2 rounded-full hover:bg-gray-100">
//                   <X />
//                 </button>
//               </div>

//               <div className="mt-4 text-sm text-gray-700 whitespace-pre-line">
//                 {selectedJob.description}
//               </div>

//               <div className="mt-6 flex items-center gap-3">
//                 <a
//                   href={`mailto:${HR_EMAIL}?subject=Application for ${encodeURIComponent(selectedJob.title)}`}
//                   className="px-5 py-2 bg-primarydark text-white rounded-md"
//                 >
//                   Apply for role
//                 </a>
//                 <a href={selectedJob.link} className="text-primarydark underline">View job listing page</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default Careers;


