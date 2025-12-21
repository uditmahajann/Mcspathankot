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
    <section id="admission-procedure" className="py-4 sm:py-10 my-10 bg-white">
      <div className="mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl font-playpen text-gray-900 font-medium leading-normal">
            Admission Procedure{" "}
            <span className="relative inline-block">
              & Guidelines
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[80%] left-12 -bottom-4 sm:-bottom-6"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Join our learning community through a simple, transparent, and
            student-friendly admission journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-sky-200 pl-8 sm:pl-15 ml-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="mb-8 sm:mb-12 relative flex flex-col sm:flex-row sm:items-center sm:gap-10"
            >
              {/* Connector dot */}
              <div className="absolute -left-16 sm:-left-24  flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-3 sm:border-4 border-sky-400/75 shadow-lg">
                <step.icon className="w-6 h-6 text-sky-700" />
              </div>

              {/* Step content */}
              <div
                className={`flex-1 p-6 sm:p-8 rounded-2xl border shadow-sm ${step.color} hover:shadow-md transition-all duration-300`}
              >
                <h3 className="text-lg sm:text-xl font-semibold font-poppins mb-3 text-gray-900 tracking-wide">
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

    <div className="mt-20 py-15 md:py-20 bg-linear-to-br from-violet-950 via-blue-900 to-indigo-950">
      <div className="container mx-auto px-6 min-[540px]:px-12 sm:px-16 lg:px-20 max-w-6xl">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-amber-300 font-playpen font-medium leading-normal">
              Guidelines for Admission at MCS
          </h2>
          <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
              Our day-boarding program offers the perfect balance between school and home life, providing extended hours
              of supervised learning, activities, and meals.
          </p>
        </div>

        {/* Guidelines Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-blue-100">
          <h3 className="text-xl sm:text-2xl font-poppins font-bold text-gray-900 mb-4 sm:mb-6 tracking-wide">
            General Guidelines for Parents
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base text-gray-700 font-inter">
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
        <div className="mt-8 sm:mt-10 lg:mt-12 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md">
          <h3 className="text-xl sm:text-2xl font-poppins font-bold text-gray-900 mb-4 sm:mb-6 tracking-wide leading-normal">List of Required Documents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {documents.map((document, index) => (
              <div key={index} className="flex items-center">
                <div className="p-1 rounded-full bg-blue-100 items-center justify-center">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 shrink-0 text-primary" />
                </div>
                <span className="ml-3 text-gray-700 text-sm sm:text-base font-inter">{document}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Age Criteria */}
        <div className="mt-8 sm:mt-10 lg:mt-12 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md border border-gray-100">
          <h3 className="text-xl sm:text-2xl font-poppins font-bold text-gray-900 mb-4 sm:mb-6 tracking-wide leading-normal">Age Criteria for Admission</h3>
          <p className="text-gray-700 mb-4 text-sm sm:text-base font-inter">
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
                  <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pre-Nursery</td>
                  <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">2 years 6 months</td>
                  <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">3 years 6 months</td>
                </tr>
                <tr>
                  <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">Nursery</td>
                  <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">3 years 6 months</td>
                  <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">4 years 6 months</td>
                </tr>
                <tr>
                  <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">LKG</td>
                  <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">4 years 6 months</td>
                  <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">5 years 6 months</td>
                </tr>
                <tr>
                  <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">UKG</td>
                  <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">5 years 6 months</td>
                  <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">6 years 6 months</td>
                </tr>
                <tr>
                  <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">Class 1</td>
                  <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">6 years</td>
                  <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">7 years</td>
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
        <div className="text-center mt-8 lg:mt-14">
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