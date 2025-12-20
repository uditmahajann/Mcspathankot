"use client"

import React from "react"
import {
  FileText,
  ClipboardCheck,
  Users,
  School,
  BookOpen,
  Check,
} from "lucide-react"

const AdmissionProcedure = () => {
  const steps = [
    {
      title: "Registration",
      desc: "Contact our admissions office via phone, email, or visit our campus to inquire about available seats and admission requirements for the desired grade level. Parents can collect the registration form from the school office or download it from the website. Fill all required details carefully.",
      icon: FileText,
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      title: "Document Submission",
      desc: "Submit the completed registration form along with necessary documents — birth certificate, passport-sized photographs, and previous academic records etc. Refer below to obtain the list of all the necessary documents required for admission along with the application/registration form.",
      icon: ClipboardCheck,
      color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    },
    {
      title: "Interaction / Assessment",
      desc: "Students may be invited for an entrance assessment to evaluate their academic readiness for the appropriate grade level and gauge thier readiness & skill level. Selected candidates & their parents maybe invited for a brief interraction with the school principal or designated admission committee.",
      icon: Users,
      color: "bg-amber-100 text-amber-700 border-amber-200",
    },
    {
      title: "Admission Confirmation",
      desc: "Once selected, parents will receive an admission offer letter detailing the fee structure and payment schedule. Secure your child's place by submitting the required admission fees and documents for completing the enrollment process within the specified timeframe.",
      icon: School,
      color: "bg-rose-100 text-rose-700 border-rose-200",
    },
    {
      title: "Orientation & Commencement",
      desc: "After fee payment & confirmation of the seat, an orientation session welcomes new students and parents, helping them familiarize themselves with the school environment and ethos.",
      icon: BookOpen,
      color: "bg-indigo-100 text-indigo-700 border-indigo-200",
    },
  ]

  // Required documents
  const documents = [
    "Completed application form",
    "Birth certificate (original and photocopy)",
    "Four recent passport-sized photographs",
    "Previous academic records/report cards",
    "Transfer certificate from previous school (if applicable)",
    "Medical health record and vaccination history",
    "Passport copy (for international students)",
    "Residence proof",
  ]
  
  return (
    <section id="admission-procedure" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-playpen text-gray-900 font-medium">
            Admission Procedure{" "}
            <span className="relative inline-block">
              & Guidelines
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[80%] left-12 -bottom-4 sm:-bottom-6 md:-bottom-8"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Join our learning community through a simple, transparent, and
            student-friendly admission journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-sky-200 pl-15 mx-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="mb-12 relative flex flex-col sm:flex-row sm:items-center sm:gap-10"
            >
              {/* Connector dot */}
              <div className="absolute -left-24  flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-sky-400/75 shadow-lg">
                <step.icon className="w-6 h-6 text-sky-700" />
              </div>

              {/* Step content */}
              <div
                className={`flex-1 p-8 rounded-2xl border shadow-sm ${step.color} hover:shadow-md transition-all duration-300`}
              >
                <h3 className="text-xl font-semibold font-poppins mb-3 text-gray-900 tracking-wide">
                  {i + 1}. {step.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-inter">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    <div className="mt-30 py-25 bg-gradient-to-br from-violet-950 via-blue-900 to-indigo-950">
      <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium">
              Guidelines for Admission at MCS
          </h2>
          <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
              Our day-boarding program offers the perfect balance between school and home life, providing extended hours
              of supervised learning, activities, and meals.
          </p>
        </div>

        {/* Guidelines Section */}
        <div className="mt-12 bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-blue-100">
          <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6 tracking-wide">
            General Guidelines for Parents
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 font-inter">
            <li>
              Admission is subject to seat availability and completion of all
              required formalities.
            </li>
            <li>Ensure that all documents submitted are genuine and verified.</li>
            <li>Submission of registration form does not guarantee admission.</li>
            <li>
              Keep track of important admission dates through the school notice
              board or website.
            </li>
            <li>
              The school reserves the right to make final decisions regarding
              admissions.
            </li>
          </ul>
        </div>

        {/* Required Documents */}
        <div className="mt-12 bg-white rounded-2xl p-12 shadow-md">
          <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6 tracking-wide">List of Required Documents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {documents.map((document, index) => (
              <div key={index} className="flex items-center">
                <div className="p-1 rounded-full bg-blue-100 items-center justify-center">
                  <Check className="w-4 h-4 flex-shrink-0 text-primary" />
                </div>
                <span className="ml-3 text-gray-700 font-inter">{document}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Age Criteria */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-md border border-gray-100">
          <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6 tracking-wide">Age Criteria for Admission</h3>
          <p className="text-gray-700 mb-4 font-inter">
            The age criteria for admission to various classes are as follows (as of March 31st of the academic year):
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 font-inter">
              <thead className="bg-blue-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Class
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Minimum Age
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Maximum Age
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pre-Nursery</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 years 6 months</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 years 6 months</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Nursery</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 years 6 months</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 years 6 months</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">LKG</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 years 6 months</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 years 6 months</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">UKG</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 years 6 months</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6 years 6 months</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Class 1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6 years</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500 font-inter">
            Note: Age relaxation of up to 30 days may be considered in exceptional cases at the discretion of the school
            management.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="/downloads/school-prospectus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-md transition-all"
          >
            <FileText className="w-5 h-5" />
            Download School Prospectus
          </a>
        </div>
      </div>
    </div>
    </section>
    
  )
}

export default AdmissionProcedure





// import type React from "react"
// import { Check } from "lucide-react"

// const AdmissionProcedure: React.FC = () => {
//   // Admission steps
//   const steps = [
//     {
//       number: "1",
//       title: "Inquiry",
//       description:
//         "Contact our admissions office via phone, email, or visit our campus to inquire about available seats and admission requirements for the desired grade level.",
//       icon: "phone",
//     },
//     {
//       number: "2",
//       title: "Application Submission",
//       description:
//         "Complete and submit the application form along with required documents including birth certificate, previous academic records, and passport-sized photographs.",
//       icon: "document",
//     },
//     {
//       number: "3",
//       title: "Entrance Assessment",
//       description:
//         "Students applying for grades 1 and above will undergo an entrance assessment to evaluate their academic readiness for the appropriate grade level.",
//       icon: "pencil",
//     },
//     {
//       number: "4",
//       title: "Interview",
//       description:
//         "Selected candidates and their parents will be invited for an interview with the school principal or designated admission committee.",
//       icon: "users",
//     },
//     {
//       number: "5",
//       title: "Admission Offer",
//       description:
//         "Successful candidates will receive an admission offer letter detailing the fee structure and payment schedule.",
//       icon: "mail",
//     },
//     {
//       number: "6",
//       title: "Fee Payment & Enrollment",
//       description:
//         "Secure your child's place by paying the admission fee and completing the enrollment process within the specified timeframe.",
//       icon: "credit-card",
//     },
//   ]

//   // Required documents
//   const documents = [
//     "Completed application form",
//     "Birth certificate (original and photocopy)",
//     "Four recent passport-sized photographs",
//     "Previous academic records/report cards (for grades 2 and above)",
//     "Transfer certificate from previous school (if applicable)",
//     "Medical health record and vaccination history",
//     "Passport copy (for international students)",
//     "Residence proof",
//   ]

//   return (
//     <section id="admission-procedure" className="py-10 my-10 bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-10 sm:mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
//             How to <span className="relative inline-block">Join MCS?
//               <img
//                 src="/Images/Doodles/LineYellow.png"
//                 alt="Underline"
//                 className="absolute w-[80%] left-6 -bottom-4 sm:-bottom-6"
//               />
//             </span>
//           </h2>
//           <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
//             Follow these simple steps to enroll your child at Montessori Cambridge School
//           </p>
//         </div>
        
//         {/* Admission Steps */}
//         <div className="relative">
//           {/* Vertical line for desktop */}
//           <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 hidden md:block"></div>

//           {/* Steps */}
//           <div className="space-y-12 px-20 ">
//             {steps.map((step, index) => (
//               <div key={index} className="relative">
//                 <div
//                   className={`flex flex-col md:flex-row items-center  ${
//                     index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//                   }`}
//                 >
//                   {/* Step number for mobile */}
//                   <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-poppins font-bold text-lg mb-4 md:hidden">
//                     {step.number}
//                   </div>

//                   {/* Content */}
//                   <div
//                     className={`md:w-5/12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 duration-300 transition-all border border-gray-100 ${
//                       index % 2 === 0 ? "md:text-left md:pr-12" : "md:text-left md:pl-12"
//                     }`}
//                   >
//                     <h3 className="text-xl font-poppins font-bold text-gray-900 tracking-wide">{step.title}</h3>
//                     <p className="mt-2 text-gray-700 font-inter">{step.description}</p>
//                   </div>

//                   {/* Center circle for desktop */}
//                   <div className="hidden md:flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white font-bold text-lg absolute left-1/2 transform -translate-x-1/2">
//                     {step.number}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Required Documents */}
//         <div className="mt-24 bg-blue-50 rounded-2xl p-12 shadow-md">
//           <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6 tracking-wide">Required Documents</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {documents.map((document, index) => (
//               <div key={index} className="flex items-center">
//                 <div className="p-1 rounded-full bg-blue-100 items-center justify-center">
//                   <Check className="w-4 h-4 flex-shrink-0 text-primary" />
//                 </div>
//                 <span className="ml-3 text-gray-700 font-inter">{document}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Age Criteria */}
//         <div className="mt-12 bg-white rounded-2xl p-8 shadow-md border border-gray-100">
//           <h3 className="text-2xl font-bold text-gray-900 mb-6">Age Criteria</h3>
//           <p className="text-gray-700 mb-4">
//             The age criteria for admission to various classes are as follows (as of March 31st of the academic year):
//           </p>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-blue-50">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Class
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Minimum Age
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Maximum Age
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pre-Nursery</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 years 6 months</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 years 6 months</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Nursery</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 years 6 months</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 years 6 months</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">LKG</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 years 6 months</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 years 6 months</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">UKG</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 years 6 months</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6 years 6 months</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Class 1</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6 years</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7 years</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <p className="mt-4 text-sm text-gray-500">
//             Note: Age relaxation of up to 30 days may be considered in exceptional cases at the discretion of the school
//             management.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default AdmissionProcedure
